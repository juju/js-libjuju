// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

/**
  This library is the JavaScript Juju API client. Use the connect function to
  get access to the API. See the examples/ folder for detailed examples on how
  to use this API.
*/

import Admin from "./facades/admin-v3.js";

import { createAsyncHandler } from "./utils.js";
import type { Callback, JujuRequest } from "../generator/interfaces";

interface ConnectOptions {
  bakery?: any;
  closeCallback?: Function;
  debug?: boolean;
  facades?: any[];
  wsclass?: WebSocket;
}

interface ConnectionInfo {
  controllerTag: string;
  serverVersion: string;
  servers: object[];
  user: object;
  getFacade: (string) => Facade;
}

interface Credentials {
  username?: string;
  password?: string;
  macaroons?: object;
}

interface LoginArguments {
  "auth-tag"?: string; // username prefixed with 'user-'
  credentials?: string; // password
  macaroons?: object; // Macaroon object
}

// XXX Expand on these types.
// Facades are wrapped which makes the class types break. Can we do that
// override differently to avoid this issue?
type AdminV3 = any;
type Bakery = any;
type Facade = any;

/**
  Connect to the Juju controller or model at the given URL.

  @param {String} url The WebSocket URL of the Juju controller or model.
  @param {Object} options Connections options, including:
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
  @param {Function} [callback=null] Called when the connection is made, the
    callback receives an error and a client object. If there are no errors, the
    client can be used to login and logout to Juju. See the docstring for the
    Client class for information on how to use the client.
  @return {Promise} This promise will be rejected if there is an error
    connecting, or resolved with a new Client instance. Note that the promise
    will not be resolved or rejected if a callback is provided.
*/
function connect(
  url: string,
  options: ConnectOptions = {},
  callback: Callback = null
): Promise<any> {
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
    // @ts-ignore The following line is ignored because TS thinks that
    // WebSocket is not instantiable.
    const ws = new options.wsclass(url);
    const handler = createAsyncHandler(callback, resolve, reject);
    ws.onopen = (evt) => {
      handler(null, new Client(ws, options));
    };
    ws.onclose = (evt) => {
      handler("cannot connect WebSocket: " + evt.reason, null);
    };
    ws.onerror = (evt) => {
      console.log("--", evt);
    };
  });
}

/**
  Connect to the Juju controller or model at the given URL and the authenticate
  using the given credentials.

  @param {String} url The WebSocket URL of the Juju controller or model.
  @param {Object} credentials An object with the user and password fields for
    userpass authentication or the macaroons field for bakery authentication.
    If an empty object is provided a full bakery discharge will be attempted
    for logging in with macaroons. Any necessary third party discharges are
    performed using the bakery instance provided in the options (see below).
  @param {Object} options Connections options, including:
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
  @return {Promise} This promise will be rejected if there is an error
    connecting, or resolved with a new {conn, logout} object. Note that the
    promise will not be resolved or rejected if a callback is provided.
*/
function connectAndLogin(url: string, credentials, options) {
  return new Promise(async (resolve, reject) => {
    // Connect to Juju.
    let juju;
    try {
      juju = await connect(url, options);
      const conn = await juju.login(credentials);
      resolve({ conn, logout: juju.logout.bind(juju) });
    } catch (error) {
      if (!juju || !juju.isRedirectionError(error)) {
        reject(error);
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
          const generateURL = (uuidOrURL: string, srv) => {
            let uuid = uuidOrURL;
            if (uuid.startsWith('wss://') || uuid.startsWith('ws://')) {
              const parts = uuid.split('/');
              uuid = parts[parts.length - 2];
            }
            return `wss://${srv.value}:${srv.port}/model/${uuid}/api`;
          }

          resolve(connectAndLogin(generateURL(url, srv), credentials, options));
        }
      }
      reject("cannot connect to model after redirection");
    }
  });
}

/**
  Returns a URL that is to be used to connect to a supplied model uuid on the
  supplied controller host.
  @param {String} controllerHost The url that's used to connect to the controller.
    The `connectAndLogin` method handles redirections so the public URL is fine.
  @param {String} modelUUID The UUID of the model to connect to.
  @returns {String} The fully qualified wss URL to connect to the model.
*/
function generateModelURL(controllerHost, modelUUID) {
  return `wss://${controllerHost}/model/${modelUUID}/api`;
}

/**
  A Juju API client allowing for logging in and get access to facades.

  @param {Object} ws The WebSocket instance already connected to a Juju
    controller or model.
  @param {Object} options Connections options. See the connect documentation
    above for a description of available options.
*/
class Client {
  _transport: Transport;
  _facades: Facade[];
  _bakery: Bakery;
  _admin: AdminV3;

  constructor(ws: WebSocket, options) {
    // Instantiate the transport, used for sending messages to the server.
    this._transport = new Transport(ws, options.closeCallback, options.debug);
    this._facades = options.facades;
    this._bakery = options.bakery;
    this._admin = new Admin(this._transport, {});
  }

  /**
    Log in to Juju.

    @param {Object} credentials An object with the user and password fields for
      userpass authentication or the macaroons field for bakery authentication.
      If an empty object is provided a full bakery discharge will be attempted
      for logging in with macaroons. Any necessary third party discharges are
      performed using the bakery instance originally provided to connect().
    @return {Promise} This promise will be rejected if there is an error
      connecting, or resolved with a new connection instance. Note that the
      promise will not be resolved or rejected if a callback is provided.
  */
  login(credentials: Credentials): Promise<any> | void {
    const args: LoginArguments = {};
    if (credentials.password) {
      args.credentials = credentials.password;
    }
    if (credentials.macaroons) {
      args.macaroons = credentials.macaroons;
    }
    if (credentials.username) {
      args["auth-tag"] = `user-${credentials.username}`;
    }

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this._admin.login(args);
        const dischargeRequired =
          response["discharge-required"] ||
          response["bakery-discharge-required"];
        if (dischargeRequired) {
          if (!this._bakery) {
            reject(
              "macaroon discharge required but no bakery instance provided"
            );
            return;
          }
          const onSuccess = (macaroons) => {
            // Send the login request again including the discharge macaroons.
            credentials.macaroons = [macaroons];
            return resolve(this.login(credentials));
          };
          const onFailure = (err) => {
            reject("macaroon discharge failed: " + err);
          };
          this._bakery.discharge(
            dischargeRequired,
            onSuccess,
            onFailure
          );
          return;
        } else if (response === REDIRECTION_ERROR) {
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
          const info = await this._admin.redirectInfo();
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

    @param {Function} callback Called when the logout process completes and the
      connection is closed, the callback receives the close code and optionally
      another callback. It is responsibility of the callback to call the
      provided callback if present.
  */
  logout(callback) {
    this._transport.close(callback);
  }

  /**
    Report whether the given error is a redirection error from Juju.

    @param {Any} err The error returned by the login request.
    @returns {Boolean} Whether the given error is a redirection error.
  */
  isRedirectionError(err) {
    return err instanceof RedirectionError;
  }
}

// Define the redirect error returned by Juju, and the one returned by the API.
const REDIRECTION_ERROR = "redirection required";
class RedirectionError {
  servers: object[];
  caCert: string;

  constructor(info) {
    this.servers = info.servers;
    this.caCert = info["ca-cert"];
  }
}

/**
  A transport providing the ability of sending and receiving WebSocket messages
  to and from Juju controllers and models.

  @param {Object} ws The WebSocket instance already connected to a Juju
    controller or model.
  @param {Function} closeCallback A callback to be called after the transport
    closes the connection. The callback receives the close code.
  @param {Boolean} debug When enabled, all API messages are logged at debug
    level.
*/
class Transport {
  _ws: WebSocket;
  _counter: number;
  _callbacks: object;
  _closeCallback: Callback;
  _debug: boolean;

  constructor(ws: WebSocket, closeCallback: Callback, debug: boolean) {
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

    @param {Object} req A Juju API request, typically in the form of an object
      like {type: 'Client', request: 'DoSomething', version: 1, params: {}}.
      The request must not be already serialized and must not include the
      request id, as those are responsibilities of the transport.
    @param {Function} resolve Function called when the request is successful.
    @param {Function} reject Function called when the request is not successful.
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

    @param {Function} callback Called after the transport is closed, the
      callback receives the close code and optionally another callback. It is
      responsibility of the callback to call the provided callback if present.
  */
  close(callback: Callback) {
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

    @param {String} data: the raw response from Juju, usually as a JSON encoded
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

  @param {Object} transport The Transport instance used to communicate with
    Juju. The transport is available exposed to users via the transport
    property of the connection instance. See the Transport docstring for
    information on how to use the transport, typically calling transport.write.
  @param {Object} facades The facade classes provided in the facades property
    of the options provided to the connect function. When the connection is
    instantiated, the matching available facades as declared by Juju are
    instantiated and access to them is provided via the facades property of the
    connection.
  @param {Object} loginResult The result to the Juju login request. It includes
    information about the Juju server and available facades. This info is made
    available via the info property of the connection instance.
*/
class Connection {
  facades: Facade[];
  transport: Transport;
  info: ConnectionInfo;

  constructor(transport: Transport, facades, loginResult) {
    // Store the transport used for sending messages to Juju.
    this.transport = transport;

    // Populate info.
    this.info = {
      controllerTag: loginResult['controller-tag'],
      serverVersion: loginResult['server-version'],
      servers: loginResult.servers,
      user: loginResult['user-info'],
      getFacade: (name) => {
        return this.facades[name];
      },
    };

    // Handle facades.
    const registered = facades.reduce((previous, current) => {
      previous[current.NAME] = current;
      return previous;
    }, {});
    this.facades = loginResult.facades.reduce((previous, current) => {
      const facadeClass = registered[current.name];
      if (facadeClass && current.versions.includes(facadeClass.VERSION)) {
        const facadeName = uncapitalize(facadeClass.NAME);
        previous[facadeName] = new facadeClass(this.transport, this.info);
        return previous;
      }
      return previous;
    }, {});
  }
}

/**
  Convert ThisString to thisString and THATString to thatString.

  @param {String} text A StringLikeThis.
  @returns {String} A stringLikeThis.
*/
function uncapitalize(text: string): string {
  if (!text) {
    return "";
  }
  const isLower = (char) => char.toLowerCase() === char;
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

export { Client, connect, connectAndLogin, generateModelURL };
