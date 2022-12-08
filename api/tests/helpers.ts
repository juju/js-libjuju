// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

"use strict";

import { Bakery } from "@canonical/macaroon-bakery";
import { JujuRequest } from "../../generator/interfaces";
import {
  Client,
  connect,
  Connection,
  ConnectOptions,
  Transport,
} from "../client";
import { Macaroon } from "../facades/admin/AdminV3";

export type Response = {
  error?: string;
  response?: unknown;
  "request-id"?: number;
};

export type Request = JujuRequest & Record<string, unknown>;

/**
  Create a Juju connection with the given options and provide it to the given
  callback.

  @param options The connect options.
  @param callback Called when the connection is ready passing the
    connection itself and the WebSocket instance.
*/
function makeConnection(
  options: ConnectOptions,
  callback: (conn: Connection | undefined, ws: MockWebSocket) => void
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
  loginResponse: Partial<LoginResponse>,
  callback: (conn: Connection | undefined, ws: MockWebSocket) => void
) {
  let ws: MockWebSocket | undefined;
  options.wsclass = makeWSClass((instance: MockWebSocket) => {
    ws = instance;
  });
  connect("wss://1.2.3.4", options, (err, juju?: Client) => {
    expect(err).toBe(null);
    expect(juju).not.toBe(null);
    juju
      ?.login({ username: "who", password: "secret" })
      .then((conn?: Connection) => {
        expect(conn).not.toBe(null);
        if (ws) {
          callback(conn, ws);
        }
      });
    // Reply to the login request.
    const generatedResponse = makeLoginResponse(loginResponse);
    ws?.reply(generatedResponse);
  });
  // Open the WebSocket connection.
  ws?.open();
}

/**
  Generate a login response mixing in the supplied overrides to the
  default login response.
  @param overrides The response to be returned during the juju
    login over the WebSocket. The object value provided here will be merged with
    the default response allowing you to provide custom values for top level keys
    like 'facades'.
  @return The merged login response.
*/
function makeLoginResponse(overrides: Partial<LoginResponse>) {
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

type LoginResponse = typeof defaultLoginResponse;

/**
  Define a base class for test facades.
*/
class BaseFacade {
  _info: any;
  _transport: Transport;
  version: number;

  constructor(transport: Transport, info: any) {
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
function makeWSClass(init: (instance: MockWebSocket) => void) {
  const mock: unknown = MockWebSocket.bind(null, init);
  // Cast our mock to the standard WebSocket type to allow it to be passed to
  // the client.
  return mock as typeof WebSocket;
}

/**
  Implement the WebSocket W3C browser API for testing.
*/
export class MockWebSocket {
  url: string;
  readyState: number;
  requests: Request[];
  responses: any;
  _queuedResponses: Map<number, Response>;
  lastRequest: Request | null;

  constructor(init: (ws: MockWebSocket) => void, url: string) {
    this.url = url;
    this.readyState = 0;
    this.requests = [];
    this.responses = [];
    this._queuedResponses = new Map();
    this.lastRequest = null;
    init(this);
  }

  onopen() {}
  onclose(_params: { reason: string }) {}
  onmessage(_params: { data: string }) {}

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
    if (this.lastRequest) {
      this.requests.push(this.lastRequest);
      if (this.lastRequest["request-id"]) {
        this._autoReply(this.lastRequest["request-id"]);
      }
    }
  }

  _autoReply(requestId: number) {
    if (this._queuedResponses.has(requestId)) {
      const response = this._queuedResponses.get(requestId);
      if (response) {
        response["request-id"] = requestId;
        this.reply(response);
      }
    }
  }

  /**
    Reply to requests from the WebSocket.
    @param resp - The response for the request in a JSON.stringify-able
      format.
  */
  reply(resp: Response) {
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
  queueResponses(responses: Map<number, Response>) {
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
  const mockBakery: unknown = {
    discharge: (
      _macaroon: Macaroon,
      onSuccess: (response: unknown) => void,
      onFailure: (error: string) => void
    ) => {
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
  // Cast the fake bakery to the expected type.
  return mockBakery as Bakery;
}

/**
  Check that the two requests equal.

  @param got and want The obtained and expected requests.
  @param want The expected result.
*/
function requestEqual(got: Request | null, want: Request | null) {
  if (got === null || want === null) {
    throw new Error("Received a null request");
  }
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
