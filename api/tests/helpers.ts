// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

"use strict";

import { Client, connect, Connection, ConnectOptions } from "../client";
import { JujuRequest } from "../../generator/interfaces";

/**
  Create a Juju connection with the given options and provide it to the given
  callback.

  @param options The connect options.
  @param callback Called when the connection is ready passing the
    connection itself and the WebSocket instance.
*/
function makeConnection(
  options: ConnectOptions,
  callback: (conn: Connection, ws: WebSocket) => void
) {
  makeConnectionWithResponse(options, {}, callback);
}

/**
  Create a Juju connection with the given options and provide it to the given
  callback. When logging in, the simulated server side automatically returns
  the appropriate response.

  @param options The connect options.
  @param loginResponse The response to be returned during the juju
    login over the websocket. The object value provided here will be merged with
    the default response allowing you to provide custom values for top level keys
    like 'facades'.
  @param callback Called when the connection is ready passing the
    connection itself and the WebSocket instance.
*/
function makeConnectionWithResponse(
  options: ConnectOptions,
  loginResponse,
  callback: (conn: Connection, ws: WebSocket) => void
) {
  let ws: WebSocket;
  options.wsclass = makeWSClass((instance: WebSocket) => {
    ws = instance;
  });
  connect("wss://1.2.3.4", options, (err, juju: Client) => {
    expect(err).toBe(null);
    expect(juju).not.toBe(null);
    juju
      .login({ username: "who", password: "secret" })
      .then((conn: Connection) => {
        expect(conn).not.toBe(null);
        callback(conn, ws);
      });
    // Reply to the login request.
    const generatedResponse = makeLoginResponse(loginResponse);
    ws.reply(generatedResponse);
  });
  // Open the WebSocket connection.
  ws.open();
}

/**
  Generate a login response mixing in the supplied overrides to the
  default login response.
  @param loginResponse The response to be returned during the juju
    login over the WebSocket. The object value provided here will be merged with
    the default response allowing you to provide custom values for top level keys
    like 'facades'.
  @return The merged login response.
*/
function makeLoginResponse(overrides) {
  return { response: Object.assign(defaultLoginResponse, overrides) };
}

const defaultLoginResponse = {
  "controller-tag": "controller-76b9c391-12be-47fc-8406-c31f2db68ee5",
  "model-tag": "model-c36a62d0-a17a-484e-87bf-a09d1b403627",
  "server-version": "2.42.47",
  "user-info": {
    credentials: "creds",
    "display-name": "who",
    identity: "user-who@gallifrey",
    "last-connection": "2018-06-06T01:02:13Z",
    "controller-access": "timelord",
    "model-access": "admin",
  },
  facades: [
    {
      name: "AllModelWatcher",
      versions: [1],
    },
    {
      name: "AllWatcher",
      versions: [0],
    },
    {
      name: "Application",
      versions: [7],
    },
    {
      name: "Client",
      versions: [2, 3],
    },
    {
      name: "Controller",
      versions: [3, 4, 5],
    },
    {
      name: "MyFacade",
      versions: [1, 7],
    },
  ],
};

/**
  Define a base class for test facades.
*/
class BaseFacade {
  _info: any;
  _transport: any;
  version: number;

  constructor(transport, info) {
    (this._transport = transport), (this._info = info);
    // This is JavaScript: implicit type conversion for the win.
    this.version = +this.constructor.name.slice(-1);
  }
}

/**
  Create and return a WebSocket class for testing that executes the given
  init function passing the instance once available.

  @param init A function receiving the WebSocket instance.
*/
function makeWSClass(init) {
  return WebSocket.bind(null, init);
}

/**
  Implement the WebSocket W3C browser API for testing.
*/
export class WebSocket {
  url: string;
  readyState: number;
  requests: JujuRequest[];
  responses: any;
  _queuedResponses: Map<string, any>;
  lastRequest: JujuRequest | null;

  constructor(init: (ws: WebSocket) => void, url: string) {
    this.url = url;
    this.readyState = 0;
    this.requests = [];
    this.responses = [];
    this._queuedResponses = new Map();
    this.lastRequest = null;
    init(this);
  }

  onopen() {}
  onclose(params: { reason: string }) {}
  onmessage(params: { data: string }) {}

  open() {
    this.readyState = 1;
    this.onopen();
  }

  close(reason: string) {
    this.readyState = 3;
    this.onclose({ reason: reason });
  }

  message(msg: string) {
    this.onmessage({ data: msg });
  }

  send(msg: string) {
    this.lastRequest = JSON.parse(msg);
    this.requests.push(this.lastRequest);
    this._autoReply(this.lastRequest["request-id"]);
  }

  _autoReply(requestId: string) {
    if (this._queuedResponses.has(requestId)) {
      const response = this._queuedResponses.get(requestId);
      response["request-id"] = requestId;
      this.reply(response);
    }
  }

  /**
    Reply to requests from the WebSocket.
    @param resp - The response for the request in a JSON.stringify-able
      format.
  */
  reply(resp) {
    if (resp["request-id"] === undefined) {
      if (this.lastRequest === null) {
        throw new Error("cannot reply as no requests were received");
      }
      resp["request-id"] = this.lastRequest["request-id"];
    }
    this.responses.push(resp);
    this.onmessage({ data: JSON.stringify(resp) });
  }

  /**
    Queue up a number of response values for upcoming requests.
    @param responses - The response values as a map where the Id is the
      request-id and the value is the response value. The response value does
      not need to include the `request-id` key.
  */
  queueResponses(responses) {
    this._queuedResponses = responses;
  }
}

/**
  Create and return a mock bakery instance.

  @param succeeding Whether the simulated discharge succeeds.
  @returns The mock bakery instance.
*/
function makeBakery(succeeding: boolean) {
  const fakeMacaroon = btoa(JSON.stringify("fake macaroon"));
  return {
    discharge: (macaroon, onSuccess, onFailure) => {
      if (succeeding) {
        onSuccess(["m1", "m2"]);
        return;
      }
      onFailure("bad wolf");
    },
    storage: {
      get: jest.fn().mockReturnValue(fakeMacaroon),
      set: jest.fn(),
    },
  };
}

/**
  Check that the two requests equal.

  @param got and want The obtained and expected requests.
  @param want The expected result.
*/
function requestEqual(got, want) {
  expect(got["request-id"]).not.toBe(null);
  expect(got.type).toBe(want.type);
  expect(got.request).toBe(want.request);
  expect(got.params).toStrictEqual(want.params);
  expect(got.version).toBe(want.version);
}

export {
  BaseFacade,
  makeBakery,
  makeConnection,
  makeConnectionWithResponse,
  makeLoginResponse,
  makeWSClass,
  requestEqual,
};
