// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

/**
  This library is the JavaScript Juju API client. Use the connect function to
  get access to the API. See the examples/ folder for detailed examples on how
  to use this API.
*/

import { Bakery } from "@canonical/macaroon-bakery";
import AdminV3, {
  FacadeVersions,
  LoginRequest,
  LoginResult,
  RedirectInfoResult,
} from "./facades/admin/AdminV3.js";

import {
  Error as MacaroonError,
  MacaroonObject,
} from "@canonical/macaroon-bakery/dist/macaroon";
import type { Callback, JujuRequest } from "../generator/interfaces";
import {
  ClassType,
  Facade,
  FacadeClass,
  FacadeClassList,
  GenericFacade,
} from "./types.js";
import { createAsyncHandler } from "./utils.js";

export interface ConnectOptions {
  bakery?: Bakery | null;
  closeCallback: Callback<number>;
  debug?: boolean;
  facades?: (ClassType<Facade> | GenericFacade)[];
  onWSCreated?: (ws: WebSocket) => void;
  wsclass?: typeof WebSocket;
}

export interface ConnectionInfo {
  controllerTag?: string;
  serverVersion?: string;
  servers?: object[];
  user?: object;
  getFacade?: (name: string) => Facade;
}

export interface Credentials {
  username?: string;
  password?: string;
  macaroons?: object;
}

export interface LoginArguments {
  "auth-tag"?: string; // username prefixed with 'user-'
  "client-version"?: string; // the client version in the format 3.0.0
  credentials?: string; // password
  macaroons?: object; // Macaroon object
}

/**
  Connect to the Juju controller or model at the given URL.

  @param url The WebSocket URL of the Juju controller or model.
  @param options Connections options, including:
    - facades (default=[]): the list of facade classes to include in the API
      connection object. Those classes are usually auto-generated and can be
      found in the facades directory of the project. When multiple versions of
      the same facade are included, the most recent version supported by the
      server is made available as part of the connection object;
    - debug (default=false): when enabled, all API messages are logged at debug
      level;
    - wsclass (default=W3C browser native WebSocket): the WebSocket class to
      use for opening the connection and sending/receiving messages. Server
      side, require('websocket').w3cwebsocket can be used safely, as it
      implements the W3C browser native WebSocket API;
    - bakery (default: null): the bakery client to use when macaroon discharges
      are required, in the case an external user is used to connect to Juju;
      see <https://www.npmjs.com/package/macaroon-bakery>;
    - closeCallback: a callback to be called with the exit code when the
      connection is closed.
  @param callback Called when the connection is made, the
    callback receives an error and a client object. If there are no errors, the
    client can be used to login and logout to Juju. See the docstring for the
    Client class for information on how to use the client.
  @return This promise will be rejected if there is an error
    connecting, or resolved with a new Client instance. Note that the promise
    will not be resolved or rejected if a callback is provided.
*/
function connect(
  url: string,
  options?: ConnectOptions,
  callback?: Callback<Client>
): Promise<any> {
  if (!options) {
    options = { closeCallback: () => {} };
  }
  if (!options.bakery) {
    options.bakery = null;
  }
  if (!options.closeCallback) {
    options.closeCallback = () => {};
  }
  if (!options.debug) {
    options.debug = false;
  }
  if (!options.facades) {
    options.facades = [];
  }
  if (!options.wsclass) {
    console.error("No websocket provided. define 'wsclass'.");
  }
  return new Promise((resolve, reject) => {
    // Instantiate the WebSocket, and make the client available when the
    // connection is open.
    const ws = new options!.wsclass!(url);
    const handler = createAsyncHandler(callback, resolve, reject);
    ws.onopen = (_evt) => {
      handler(null, new Client(ws, options!));
    };
    ws.onclose = (evt) => {
      handler("cannot connect WebSocket: " + evt.reason);
    };
    ws.onerror = (evt) => {
      console.log("--", evt);
    };
    options?.onWSCreated?.(ws);
  });
}

/**
  Connect to the Juju controller or model at the given URL and the authenticate
  using the given credentials.

  @param url The WebSocket URL of the Juju controller or model.
  @param credentials An object with the user and password fields for
    userpass authentication or the macaroons field for bakery authentication.
    If an empty object is provided a full bakery discharge will be attempted
    for logging in with macaroons. Any necessary third party discharges are
    performed using the bakery instance provided in the options (see below).
  @param options Connections options, including:
    - facades (default=[]): the list of facade classes to include in the API
      connection object. Those classes are usually auto-generated and can be
      found in the facades directory of the project. When multiple versions of
      the same facade are included, the most recent version supported by the
      server is made available as part of the connection object;
    - debug (default=false): when enabled, all API messages are logged at debug
      level;
    - wsclass (default=W3C browser native WebSocket): the WebSocket class to
      use for opening the connection and sending/receiving messages. Server
      side, require('websocket').w3cwebsocket can be used safely, as it
      implements the W3C browser native WebSocket API;
    - bakery (default: null): the bakery client to use when macaroon discharges
      are required, in the case an external user is used to connect to Juju;
      see <https://www.npmjs.com/package/macaroon-bakery>;
    - closeCallback: a callback to be called with the exit code when the
      connection is closed.
  @return This promise will be rejected if there is an error
    connecting, or resolved with a new {conn, logout} object. Note that the
    promise will not be resolved or rejected if a callback is provided.
*/
async function connectAndLogin(
  url: string,
  credentials: Credentials,
  options: ConnectOptions
): Promise<{
  conn?: Connection;
  logout: typeof Client.prototype.logout;
}> {
  // Connect to Juju.
  const juju: Client = await connect(url, options);
  try {
    const conn = await juju.login(credentials);
    return { conn, logout: juju.logout.bind(juju) };
  } catch (error: any) {
    if (!juju || !juju.isRedirectionError(error)) {
      throw error;
    }
    // Redirect to the real model.
    juju && juju.logout();
    for (let i = 0; i < error.servers.length; i++) {
      const srv = error.servers[i][0];
      // TODO(frankban): we should really try to connect to all servers and
      // just use the first connection available, without second guessing
      // that the public hostname is reachable.
      if (srv.type === "hostname" && srv.scope === "public") {
        // This is a public server with a dns-name, connect to it.
        const generateURL = (
          uuidOrURL: string,
          srv: { value: any; port: any }
        ) => {
          let uuid = uuidOrURL;
          if (uuid.startsWith("wss://") || uuid.startsWith("ws://")) {
            const parts = uuid.split("/");
            uuid = parts[parts.length - 2];
          }
          return `wss://${srv.value}:${srv.port}/model/${uuid}/api`;
        };
        return await connectAndLogin(
          generateURL(url, srv),
          credentials,
          options
        );
      }
    }
    throw new Error("cannot connect to model after redirection");
  }
}

/**
  Returns a URL that is to be used to connect to a supplied model uuid on the
  supplied controller host.
  @param controllerHost The url that's used to connect to the controller.
    The `connectAndLogin` method handles redirections so the public URL is fine.
  @param modelUUID The UUID of the model to connect to.
  @returns The fully qualified wss URL to connect to the model.
*/
function generateModelURL(controllerHost: string, modelUUID: string): string {
  return `wss://${controllerHost}/model/${modelUUID}/api`;
}

/**
  A Juju API client allowing for logging in and get access to facades.

  @param ws The WebSocket instance already connected to a Juju
    controller or model.
  @param options Connections options. See the connect documentation
    above for a description of available options.
*/
class Client {
  _transport: Transport;
  _bakery?: Bakery | null;
  _facades: (ClassType<Facade> | GenericFacade)[];
  _admin: AdminV3;

  constructor(ws: WebSocket, options: ConnectOptions) {
    // Instantiate the transport, used for sending messages to the server.
    this._transport = new Transport(
      ws,
      options.closeCallback,
      Boolean(options.debug)
    );

    this._facades = options.facades || [];
    this._bakery = options.bakery;
    this._admin = new AdminV3(this._transport, {});
  }

  /**
    Log in to Juju.

    @param credentials An object with the user and password fields for
      userpass authentication or the macaroons field for bakery authentication.
      If an empty object is provided a full bakery discharge will be attempted
      for logging in with macaroons. Any necessary third party discharges are
      performed using the bakery instance originally provided to connect().
    @return {Promise} This promise will be rejected if there is an error
      connecting, or resolved with a new connection instance. Note that the
      promise will not be resolved or rejected if a callback is provided.
  */
  async login(credentials: Credentials): Promise<Connection | undefined> {
    const args: LoginRequest = {
      "auth-tag": "",
      credentials: "",
      macaroons: [],
      nonce: "",
      "user-data": "",
    };
    const url = this._transport._ws.url;
    const origin = new URL(url).origin;

    if (credentials.username && credentials.password) {
      args.credentials = credentials.password;
      args["auth-tag"] = `user-${credentials.username}`;
    } else {
      const macaroons = this._bakery?.storage.get(origin);
      let deserialized;
      if (macaroons) {
        deserialized = JSON.parse(atob(macaroons));
      }
      args.macaroons = [deserialized];
    }

    // eslint-disable-next-line no-async-promise-executor
    return await new Promise(async (resolve, reject) => {
      const response: any = await this._admin.login(args);
      try {
        const dischargeRequired: string | undefined =
          response["discharge-required"] ||
          response["bakery-discharge-required"];
        if (dischargeRequired) {
          if (!this._bakery) {
            reject(
              "macaroon discharge required but no bakery instance provided"
            );
            return;
          }
          const onSuccess = (macaroons: MacaroonObject[]) => {
            // Store the macaroon in the bakery for the next connections.
            const serialized = btoa(JSON.stringify(macaroons));
            this._bakery?.storage.set(origin, serialized, () => {});
            // Send the login request again including the discharge macaroons.
            credentials.macaroons = [macaroons];
            return resolve(this.login(credentials));
          };
          const onFailure = (err: string | MacaroonError) => {
            reject("macaroon discharge failed: " + err);
          };
          this._bakery.discharge(dischargeRequired, onSuccess, onFailure);
          return;
        } else if (response === REDIRECTION_ERROR) {
          // This is should be handled by any user of this login method.
          throw response;
        } else if (response === INVALIDCREDENTIALS_ERROR) {
          throw `response
Have you been granted permission to a model on this controller?`;
        } else if (response === PERMISSIONDENIED_ERROR) {
          throw `response
Ensure that you've been given 'login' permission on this controller.`;
        } else if (typeof response === "string") {
          // If the response is a string and not an object it's an error
          // message and surface that back to the user.
          throw response;
        }
        resolve(new Connection(this._transport, this._facades, response));
      } catch (error) {
        if (error !== REDIRECTION_ERROR) {
          reject(error);
          return;
        }
        // This is a model redirection error, fetch the redirection information.
        try {
          const info = await this._admin.redirectInfo(null);
          reject(new RedirectionError(info));
          return;
        } catch (error) {
          reject(error);
          return;
        }
      }
    });
  }

  /**
    Log out from Juju.

    @param callback Called when the logout process completes and the
      connection is closed, the callback receives the close code and optionally
      another callback. It is responsibility of the callback to call the
      provided callback if present.
  */
  logout(callback?: Callback<Client>) {
    this._transport.close(callback);
  }

  /**
    Report whether the given error is a redirection error from Juju.

    @param err The error returned by the login request.
    @returns Whether the given error is a redirection error.
  */
  isRedirectionError(err: any): boolean {
    return err instanceof RedirectionError;
  }
}

// Define the redirect error returned by Juju, and the one returned by the API.
const REDIRECTION_ERROR = "redirection required";
const INVALIDCREDENTIALS_ERROR = "invalid entity name or password";
const PERMISSIONDENIED_ERROR = "permission denied";
class RedirectionError {
  servers: RedirectInfoResult["servers"];
  caCert: string;

  constructor(info: RedirectInfoResult) {
    this.servers = info.servers;
    this.caCert = info["ca-cert"];
  }
}

/**
  A transport providing the ability of sending and receiving WebSocket messages
  to and from Juju controllers and models.

  @param ws The WebSocket instance already connected to a Juju
    controller or model.
  @param closeCallback A callback to be called after the transport
    closes the connection. The callback receives the close code.
  @param debug When enabled, all API messages are logged at debug
    level.
*/
export class Transport {
  _ws: WebSocket;
  _counter: number;
  _callbacks: { [k: number]: Function };
  _closeCallback: Callback<number>;
  _debug: boolean;

  constructor(ws: WebSocket, closeCallback: Callback<number>, debug: boolean) {
    this._ws = ws;
    this._counter = 0;
    this._callbacks = {};
    this._closeCallback = closeCallback;
    this._debug = debug;
    ws.onmessage = (evt) => {
      if (this._debug) {
        console.debug("<--", evt.data);
      }
      this._handle(evt.data);
    };
    ws.onclose = (evt) => {
      if (this._debug) {
        console.debug("close:", evt.code, evt.reason);
      }
      this._closeCallback(evt.code);
    };
  }

  /**
    Send a message to Juju.

    @param req A Juju API request, typically in the form of an object
      like {type: 'Client', request: 'DoSomething', version: 1, params: {}}.
      The request must not be already serialized and must not include the
      request id, as those are responsibilities of the transport.
    @param resolve Function called when the request is successful.
    @param reject Function called when the request is not successful.
  */
  write(req: JujuRequest, resolve: Function, reject: Function) {
    // Check that the connection is ready and sane.
    const state = this._ws.readyState;
    if (state !== 1) {
      const reqStr = JSON.stringify(req);
      const error = `cannot send request ${reqStr}: connection state ${state} is not open`;
      reject(error);
    }
    this._counter += 1;
    // Include the current request id in the request.
    req["request-id"] = this._counter;
    this._callbacks[this._counter] = resolve;
    const msg = JSON.stringify(req);
    if (this._debug) {
      console.debug("-->", msg);
    }
    // Send the request to Juju.
    this._ws.send(msg);
  }

  /**
    Close the transport, and therefore the connection.

    @param callback Called after the transport is closed, the
      callback receives the close code and optionally another callback. It is
      responsibility of the callback to call the provided callback if present.
  */
  close(callback?: Callback<any>) {
    const closeCallback = this._closeCallback;
    this._closeCallback = (code) => {
      if (callback) {
        callback(code, closeCallback);
        return;
      }
      closeCallback(code);
    };
    this._ws.close();
  }

  /**
    Handle responses arriving from Juju.

    @param data: the raw response from Juju, usually as a JSON encoded
      string.
  */
  _handle(data: string) {
    const resp = JSON.parse(data);
    const id = resp["request-id"];
    const callback = this._callbacks[id];
    delete this._callbacks[id];
    if (callback) {
      callback(resp.error || resp.response);
    }
  }
}

/**
  A connection to a Juju controller or model. This is the object users use to
  perform Juju API calls, as it provides access to all available facades
  (conn.facades), to a transport connected to Juju (conn.transport) and to
  information about the connected Juju server (conn.info).

  @param transport The Transport instance used to communicate with
    Juju. The transport is available exposed to users via the transport
    property of the connection instance. See the Transport docstring for
    information on how to use the transport, typically calling transport.write.
  @param facades The facade classes provided in the facades property
    of the options provided to the connect function. When the connection is
    instantiated, the matching available facades as declared by Juju are
    instantiated and access to them is provided via the facades property of the
    connection.
  @param loginResult The result to the Juju login request. It includes
    information about the Juju server and available facades. This info is made
    available via the info property of the connection instance.
*/
class Connection {
  facades: { [k: string]: Facade };
  transport: Transport;
  info: ConnectionInfo;

  constructor(
    transport: Transport,
    facades: (ClassType<Facade> | GenericFacade)[],
    loginResult: LoginResult
  ) {
    // Store the transport used for sending messages to Juju.
    this.transport = transport;

    // Populate info.
    this.info = {
      controllerTag: loginResult["controller-tag"],
      serverVersion: loginResult["server-version"],
      servers: loginResult.servers,
      user: loginResult["user-info"],
      getFacade: (name) => {
        return this.facades[name];
      },
    };

    // Handle facades.
    const loginSupportedFacades: FacadeVersions[] = loginResult.facades;
    const clientRequestedFacades = facades.reduce(
      (facadeVersions: { [k: string]: FacadeClassList }, current) => {
        if ("versions" in current) {
          // generic facade, where we won't the best version
          if (!facadeVersions[current.name]) facadeVersions[current.name] = [];
          facadeVersions[current.name].push(...current.versions);
        } else {
          // a specific version of a facade asked by the client
          const facade = current as FacadeClass;
          if (!facadeVersions[facade.NAME]) facadeVersions[facade.NAME] = [];
          facadeVersions[facade.NAME].push(facade);
        }
        return facadeVersions;
      },
      {}
    );
    // find the most suitable facade version
    this.facades = Object.entries(clientRequestedFacades).reduce(
      (
        suitableFacades: {
          [k: string]: Facade;
        },
        [facadeName, requestedFacades]
      ) => {
        const supportedFacades = loginSupportedFacades.find(
          (facadeVersions) => facadeVersions.name === facadeName
        );
        if (!supportedFacades || !supportedFacades.versions.length)
          return suitableFacades;

        const supportedFacadeVersions = new Set(supportedFacades.versions);
        const facadeCandidates = requestedFacades.filter((facade) =>
          supportedFacadeVersions.has(facade.VERSION)
        );
        // get the last element from the list (priority)
        if (facadeCandidates.length) {
          const mostSuitableFacade =
            facadeCandidates[facadeCandidates.length - 1];
          const facadeName = uncapitalize(mostSuitableFacade.NAME);
          suitableFacades[facadeName] = new mostSuitableFacade(
            this.transport,
            this.info
          );
        }
        return suitableFacades;
      },
      {}
    );
  }
}

/**
  Convert ThisString to thisString and THATString to thatString.

  @param text A StringLikeThis.
  @returns A stringLikeThis.
*/
function uncapitalize(text: string): string {
  if (!text) {
    return "";
  }
  const isLower = (char: string) => char.toLowerCase() === char;
  if (isLower(text[0])) {
    return text;
  }
  const uppers = [];
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (isLower(char)) {
      break;
    }
    uppers.push(char);
  }
  if (uppers.length > 1) {
    uppers.pop();
  }
  const prefix = uppers.join("");
  return prefix.toLowerCase() + text.slice(prefix.length);
}

export {
  Client,
  connect,
  connectAndLogin,
  Connection,
  generateModelURL,
  RedirectionError,
};
