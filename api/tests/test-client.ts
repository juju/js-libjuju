// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

"use strict";

import { CallbackError } from "../../generator/interfaces";
import {
  checkForJujuUpdate,
  Client,
  connect,
  connectAndLogin,
  Connection,
  generateModelURL,
  RedirectionError,
} from "../client";
import {
  BaseFacade,
  makeBakery,
  makeConnection,
  makeWSClass,
  MockWebSocket,
  requestEqual,
} from "./helpers";
import * as utils from "../utils";
const fail = () => {
  throw new Error("Fail called");
};

describe("connect", () => {
  let ws: MockWebSocket;
  const options = {
    bakery: makeBakery(true),
    closeCallback: jest.fn(),
    facades: [],
    wsclass: makeWSClass((instance: MockWebSocket) => {
      ws = instance;
    }),
  };

  it("supports supplying callback to login", (done) => {
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe(null);
      expect(juju instanceof Client).toBe(true);
      done();
    });
    ws.open();
  });

  it("returns promise, supports no callback", (done) => {
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      expect(juju instanceof Client).toBe(true);
      done();
    });
    ws.open();
  });

  it("handles failure to connect via promise", (done) => {
    connect("wss://1.2.3.4", options, (err) => {
      expect(err).toBe("cannot connect WebSocket: nope");
      done();
    });
    ws.close("nope");
  });

  it("connect failure", (done) => {
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe("cannot connect WebSocket: bad wolf");
      expect(juju).toBeFalsy();
      done();
    });
    // Close the WebSocket connection.
    ws.close("bad wolf");
  });

  function validateLoginFailure(error: string) {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "Login",
      params: {
        "auth-tag": "user-who",
        credentials: "secret",
        macaroons: [],
        nonce: "",
        "user-data": "",
      },
      version: 3,
    });
    expect(error).toBe("bad wolf");
  }

  it("login failure via promise", (done) => {
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      juju
        ?.login({ username: "who", password: "secret" })
        .then(() => fail)
        .catch((error) => {
          validateLoginFailure(error);
          done();
        });
      ws.reply({ error: "bad wolf" });
    });
    ws.open();
  });

  function validateRedirectionLoginFailure(error: Error) {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "RedirectInfo",
      params: null,
      version: 3,
    });
    expect(error).toBeInstanceOf(RedirectionError);
  }

  it("login redirection error failure via promise", (done) => {
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      // juju._admin.redirectInfo = jest.fn().mockImplementation(() => null);
      juju
        ?.login({})
        .then(() => fail)
        .catch((error) => {
          validateRedirectionLoginFailure(error);
          done();
        });
      ws.queueResponses(
        new Map([
          // Reply to the redirectInfo request.
          [2, { error: "bad wolf" }],
        ])
      );
      // Reply to the login request.
      ws.reply({ error: "redirection required" });
    });
    ws.open();
  });

  function validateRedirectionLoginSuccess(
    juju: Client,
    error: RedirectionError
  ) {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "RedirectInfo",
      params: null,
      version: 3,
    });
    expect(juju.isRedirectionError(error)).toBe(true);
    expect(error.caCert).toBe("mycert");
    expect(error.servers.length).toBe(1);
    expect(error.servers[0].length).toBe(2);
    expect(error.servers[0][0].value).toBe("1.2.3.4");
    expect(error.servers[0][0].port).toBe(17070);
    expect(error.servers[0][0].type).toBe("ipv4");
    expect(error.servers[0][0].scope).toBe("global");
    expect(error.servers[0][1].value).toBe("example.com");
    expect(error.servers[0][1].port).toBe(443);
    expect(error.servers[0][1].type).toBe("hostname");
    expect(error.servers[0][1].scope).toBe("global");
  }

  it("login redirection error success", (done) => {
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe(null);
      expect(juju).not.toBe(null);
      juju
        ?.login({})
        .then(() => fail)
        .catch((error) => {
          validateRedirectionLoginSuccess(juju, error);
          done();
        });
      ws.queueResponses(
        new Map([
          // Reply to the redirectInfo request.
          [
            2,
            {
              response: {
                "ca-cert": "mycert",
                servers: [
                  [
                    {
                      value: "1.2.3.4",
                      port: 17070,
                      type: "ipv4",
                      scope: "global",
                    },
                    {
                      value: "example.com",
                      port: 443,
                      type: "hostname",
                      scope: "global",
                    },
                  ],
                ],
              },
            },
          ],
        ])
      );
      // Reply to the login request.
      ws.reply({ error: "redirection required" });
    });
    // Open the WebSocket connection.
    ws.open();
  });

  it("login redirection error success via promises", (done) => {
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      juju
        ?.login({})
        .then(() => fail)
        .catch((error) => {
          validateRedirectionLoginSuccess(juju, error);
          done();
        });
      ws.queueResponses(
        new Map([
          // Reply to the redirectInfo request.
          [
            2,
            {
              response: {
                "ca-cert": "mycert",
                servers: [
                  [
                    {
                      value: "1.2.3.4",
                      port: 17070,
                      type: "ipv4",
                      scope: "global",
                    },
                    {
                      value: "example.com",
                      port: 443,
                      type: "hostname",
                      scope: "global",
                    },
                  ],
                ],
              },
            },
          ],
        ])
      );
      // Reply to the login request.
      ws.reply({ error: "redirection required" });
    });
    ws.open();
  });

  function validateLoginDischargeRequiredNoBakery(error: Error) {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "Login",
      params: {
        "auth-tag": "user-who",
        credentials: "secret",
        macaroons: [],
        nonce: "",
        "user-data": "",
      },
      version: 3,
    });
    expect(error).toBe(
      "macaroon discharge required but no bakery instance provided"
    );
  }

  it("login discharge required no bakery", (done) => {
    const options = {
      closeCallback: jest.fn(),
      wsclass: makeWSClass((instance: MockWebSocket) => {
        ws = instance;
      }),
    };
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe(null);
      expect(juju).not.toBe(null);
      juju
        ?.login({ username: "who", password: "secret" })
        .then(() => fail)
        .catch((err) => {
          validateLoginDischargeRequiredNoBakery(err);
          done();
        });
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    // Open the WebSocket connection.
    ws.open();
  });

  it("login discharge required no bakery via promises", (done) => {
    const options = {
      closeCallback: jest.fn(),
      wsclass: makeWSClass((instance: MockWebSocket) => {
        ws = instance;
      }),
    };
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      juju
        ?.login({ username: "who", password: "secret" })
        .then(() => fail)
        .catch((error) => {
          validateLoginDischargeRequiredNoBakery(error);
          done();
        });
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    ws.open();
  });

  function validateLoginDischargeRequiredFailure(error: Error) {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "Login",
      params: {
        "auth-tag": "",
        credentials: "",
        macaroons: ["fake macaroon"],
        nonce: "",
        "user-data": "",
      },
      version: 3,
    });
    expect(error).toBe("macaroon discharge failed: bad wolf");
  }

  it("login discharge required failure", (done) => {
    const options = {
      bakery: makeBakery(false),
      closeCallback: jest.fn(),
      wsclass: makeWSClass((instance: MockWebSocket) => {
        ws = instance;
      }),
    };
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe(null);
      expect(juju).not.toBe(null);
      juju
        ?.login({ macaroons: ["m"] })
        .then(() => fail)
        .catch((err) => {
          validateLoginDischargeRequiredFailure(err);
          done();
        });
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    // Open the WebSocket connection.
    ws.open();
  });

  it("login discharge required failure via promises", (done) => {
    const options = {
      bakery: makeBakery(false),
      closeCallback: jest.fn(),
      wsclass: makeWSClass((instance: MockWebSocket) => {
        ws = instance;
      }),
    };
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      juju
        .login({ macaroons: ["m"] })
        .then(() => fail)
        .catch((error) => {
          validateLoginDischargeRequiredFailure(error);
          done();
        });
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    ws.open();
  });

  function validateLoginDischargeRequiredSuccess() {
    requestEqual(ws.lastRequest, {
      type: "Admin",
      request: "Login",
      params: {
        "auth-tag": "",
        credentials: "",
        macaroons: ["fake macaroon"],
        nonce: "",
        "user-data": "",
      },
      version: 3,
    });
  }

  it("login discharge required success", (done) => {
    connect("wss://1.2.3.4", options, (err?: CallbackError, juju?: Client) => {
      expect(err).toBe(null);
      expect(juju).not.toBe(null);
      juju?.login({ macaroons: ["m"] }).then(() => {
        validateLoginDischargeRequiredSuccess();
        done();
      });
      ws.queueResponses(
        new Map([
          // Reply to the retried login request properly.
          [2, { response: { facades: [] } }],
        ])
      );
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    // Open the WebSocket connection.
    ws.open();
  });

  it("login discharge required success via promise", (done) => {
    const options = {
      bakery: makeBakery(true),
      closeCallback: jest.fn(),
      wsclass: makeWSClass((instance: MockWebSocket) => {
        ws = instance;
      }),
    };
    connect("wss://1.2.3.4", options).then((juju: Client) => {
      juju
        ?.login({ macaroons: ["m"] })
        .then((_conn) => {
          validateLoginDischargeRequiredSuccess();
          done();
        })
        .catch(() => fail);
      ws.queueResponses(
        new Map([
          // Reply to the retried login request properly.
          [2, { response: { facades: [] } }],
        ])
      );
      // Reply to the login request with a discharge required response.
      ws.reply({ response: { "discharge-required": "macaroon" } });
    });
    ws.open();
  });

  it("connection transport success", (done) => {
    const options = { closeCallback: jest.fn() };
    makeConnection(options, (conn, ws) => {
      conn?.transport.write(
        {
          type: "Test",
          request: "Test",
          params: {},
          version: 1,
        },
        (resp: Response) => {
          expect(resp.ok).toBe(true);
          done();
        },
        jest.fn()
      );
      // Reply to the transport test request.
      ws.reply({ response: { ok: true, facades: [] } });
    });
  });

  it("connection transport failure", (done) => {
    const options = { closeCallback: jest.fn() };
    makeConnection(
      options,
      (conn: Connection | undefined, ws: MockWebSocket) => {
        conn?.transport.write(
          {
            type: "Test",
            request: "Test",
            params: {},
            version: 1,
          },
          (err: CallbackError) => {
            expect(err).toBe("bad wolf");
            done();
          },
          jest.fn()
        );
        // Reply to the transport test request.
        ws.reply({ error: "bad wolf" });
      }
    );
  });

  it("connection info", (done) => {
    const options = { closeCallback: jest.fn() };
    makeConnection(
      options,
      (conn: Connection | undefined, _ws: MockWebSocket) => {
        expect(conn?.info.controllerTag).toBe(
          "controller-76b9c391-12be-47fc-8406-c31f2db68ee5"
        );
        expect(conn?.info.serverVersion).toBe("2.42.47");
        expect(conn?.info.user).toStrictEqual({
          credentials: "creds",
          "display-name": "who",
          identity: "user-who@gallifrey",
          "last-connection": "2018-06-06T01:02:13Z",
          "controller-access": "timelord",
          "model-access": "admin",
        });
        done();
      }
    );
  });

  it("connection info getFacade call", (done) => {
    const options = {
      closeCallback: jest.fn(),
      facades: [
        class ClientV2 extends BaseFacade {
          static NAME = "Client";
          static VERSION = 2;
        },
        class MyFacadeV2 extends BaseFacade {
          static NAME = "MyFacadeV2";
          static VERSION = 2;
        },
      ],
    };
    makeConnection(
      options,
      (conn: Connection | undefined, _ws: MockWebSocket) => {
        const client = conn?.info.getFacade?.("client");
        expect(client).not.toBe(undefined);
        expect(client?.constructor.name).toBe("ClientV2");
        expect(conn?.info.getFacade?.("allWatcher")).toBe(undefined);
        expect(conn?.info.getFacade?.("myFacade")).toBe(undefined);
        // Check properties passed to the instantiated facade.
        expect(client?._transport).toStrictEqual(conn?.transport);
        expect(client?._info).toStrictEqual(conn?.info);
        done();
      }
    );
  });
});

describe("connectAndLogin", () => {
  let ws: MockWebSocket;
  const url = "wss://1.2.3.4";
  const options = {
    bakery: makeBakery(true),
    closeCallback: jest.fn(),
    wsclass: makeWSClass((instance: MockWebSocket) => {
      ws = instance;
    }),
  };

  it("connect failure", (done) => {
    const creds = {};
    connectAndLogin(url, creds, options).catch((error) => {
      expect(error).toBe("cannot connect WebSocket: bad wolf");
      done();
    });
    // Close the WebSocket connection.
    ws.close("bad wolf");
  });

  it("login redirection error failure", (done) => {
    const creds = { user: "who", password: "tardis" };
    connectAndLogin(url, creds, options)
      .then(() => fail)
      .catch((error) => {
        expect(error.message).toBe("cannot connect to model after redirection");
        requestEqual(ws.lastRequest, {
          type: "Admin",
          request: "RedirectInfo",
          params: null,
          version: 3,
        });
        done();
      });
    ws.queueResponses(
      new Map([
        // Reply to the login request.
        [1, { error: "redirection required" }],
        // Reply to the redirectInfo request.
        [2, { response: { servers: [], "ca-cert": null } }],
      ])
    );
    // Open the WebSocket connection.
    ws.open();
  });

  it("login redirection error success", (done) => {
    // If this test is timing out then check that the setTimeout is opening the
    // model websocket.
    const creds = { user: "who", password: "tardis" };
    let modelWS: MockWebSocket;
    const options = {
      bakery: makeBakery(true),
      closeCallback: jest.fn(),
      facades: [],
      wsclass: makeWSClass(jest.fn()),
      onWSCreated: (ws: unknown) => {
        // We've mocked the websocket with our own implementation so we need to
        // override the type to what we expect.
        const instance = ws as MockWebSocket;
        // This callback is used to open the websockets and send the responses
        // as we need to call the open function after the onopen etc. methods
        // have been overridden. These overrides do not exist when the init
        // function is passed to makeWSClass().
        //
        // Two websockets get set up up. One for the controller connection, one
        // for the model.
        if (instance.url === "wss://1.2.3.4") {
          instance.queueResponses(
            new Map([
              // Reply to the login request.
              [1, { error: "redirection required" }],
              // Reply to the redirectInfo request.
              [
                2,
                {
                  response: {
                    "ca-cert": "mycert",
                    servers: [
                      [
                        {
                          value: "example.com",
                          port: 443,
                          type: "hostname",
                          scope: "public",
                        },
                        {
                          value: "1.2.3.4",
                          port: 17070,
                          type: "ipv4",
                          scope: "public",
                        },
                      ],
                    ],
                  },
                },
              ],
            ])
          );
          // Open the WebSocket connection.
          instance.open();
        } else if (instance.url === "wss://example.com:443/model//api") {
          modelWS = instance;
          modelWS.queueResponses(
            new Map([
              // Reply to the new login request.
              [1, { response: { facades: [] } }],
            ])
          );
          modelWS.open();
        }
      },
    };
    connectAndLogin(url, creds, options).then(
      (result?: { conn?: Connection; logout: Client["logout"] }) => {
        expect(result).not.toBe(null);
        expect(result?.conn).not.toBe(null);
        expect(result?.logout).not.toBe(null);
        result?.logout(jest.fn());
        // The WebSocket is now closed.
        expect(modelWS.readyState).toBe(3);
        done();
      }
    );
  });

  it("login success", (done) => {
    const creds = { user: "who", password: "tardis" };
    connectAndLogin(url, creds, options).then((result: any) => {
      expect(result).not.toBe(null);
      expect(result.conn).not.toBe(null);
      expect(result.logout).not.toBe(null);
      result.logout();
      // The WebSocket is now closed.
      expect(ws.readyState).toBe(3);
      done();
    });
    ws.queueResponses(
      new Map([
        // Reply to the login request.
        [1, { response: { facades: [] } }],
      ])
    );
    // Open the WebSocket connection.
    ws.open();
  });
});

describe("generateModelURL", () => {
  it("returns valid url", () => {
    expect(generateModelURL("1.2.3.4:123", "abc-123-4")).toBe(
      "wss://1.2.3.4:123/model/abc-123-4/api"
    );
  });
});

describe("jujuVersions", () => {
  it("returns a sorted list of versions", () => {
    expect(
      utils.jujuVersions([
        { "juju-version": "2.8.0" },
        { "juju-version": "3.1.2" },
        { "juju-version": "2.9.9" },
        { "juju-version": "2.9.1" },
      ])
    ).toEqual(["2.8.0", "2.9.1", "2.9.9", "3.1.2"]);
  });
});

describe("checkForJujuUpdate", () => {
  beforeAll(() => {
    jest.spyOn(utils, "jujuVersions").mockImplementation(() => ["2.9.10"]);
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it("returns false if no update available", () => {
    expect(checkForJujuUpdate("2.9.10")).toBe(false);
  });
  it("returns true if update available", () => {
    expect(checkForJujuUpdate("2.8.0")).toBe(true);
  });
});
