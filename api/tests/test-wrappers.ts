// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

"use strict";

import { BaseFacade, makeConnection, requestEqual } from "./helpers";
import {
  wrapAllModelWatcher,
  wrapAllWatcher,
  wrapClient,
  wrapController,
} from "../helpers";
import { Callback, CallbackError } from "../../generator/interfaces";

describe("wrapAllModelWatcher", () => {
  class AllModelWatcherV1 extends BaseFacade {
    static NAME = "AllModelWatcher";
    static VERSION = 1;

    next(
      _id: number,
      _callback: (error: CallbackError, result?: Response) => void
    ) {}
    stop(
      _id: number,
      _callback: (error: CallbackError, result?: Response) => void
    ) {}
  }
  const options = {
    closeCallback: jest.fn(),
    facades: [wrapAllModelWatcher(AllModelWatcherV1)],
  };

  it("next success", (done) => {
    makeConnection(options, (conn, ws) => {
      const allModelWatcher = conn?.info.getFacade?.(
        "allModelWatcher"
      ) as AllModelWatcherV1;
      const watcherId = 42;
      allModelWatcher?.next(watcherId, (_error, result) => {
        requestEqual(ws.lastRequest, {
          type: "AllModelWatcher",
          request: "Next",
          version: 1,
        });
        expect(ws.lastRequest?.["id"]).toBe(watcherId);
        expect(result).toStrictEqual({
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        });
      });
      // Reply to the next request.
      ws.reply({
        response: {
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      });
      done();
    });
  });

  it("next failure", (done) => {
    makeConnection(options, (conn, ws) => {
      const allModelWatcher = conn?.info.getFacade?.(
        "allModelWatcher"
      ) as AllModelWatcherV1;
      const watcherId = 42;
      allModelWatcher?.next(watcherId, (err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });

  it("stop success", (done) => {
    makeConnection(options, (conn, ws) => {
      const allModelWatcher = conn?.info.getFacade?.(
        "allModelWatcher"
      ) as AllModelWatcherV1;
      const watcherId = 42;
      allModelWatcher?.stop(watcherId, (_error, result) => {
        requestEqual(ws.lastRequest, {
          type: "AllModelWatcher",
          request: "Stop",
          version: 1,
        });
        expect(ws.lastRequest?.["id"]).toBe(watcherId);
        expect(result).toStrictEqual({});
      });
      // Reply to the next request.
      ws.reply({ response: {} });
      done();
    });
  });

  it("stop failure", (done) => {
    makeConnection(options, (conn, ws) => {
      const allModelWatcher = conn?.info.getFacade?.(
        "allModelWatcher"
      ) as AllModelWatcherV1;
      const watcherId = 42;
      allModelWatcher?.stop(watcherId, (err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });
});

describe("wrapAllWatcher", () => {
  class AllWatcherV0 extends BaseFacade {
    static NAME = "AllWatcher";
    static VERSION = 0;

    next(
      _id: number,
      _callback: (error: CallbackError, result?: Response) => void
    ) {}
    stop(
      _id: number,
      _callback: (error: CallbackError, result?: Response) => void
    ) {}
  }
  const options = {
    closeCallback: jest.fn(),
    facades: [wrapAllWatcher(AllWatcherV0)],
  };

  it("next success", (done) => {
    makeConnection(options, (conn, ws) => {
      const allWatcher = conn?.info.getFacade?.("allWatcher") as AllWatcherV0;
      const watcherId = 42;
      allWatcher?.next(watcherId, (_error, result) => {
        requestEqual(ws.lastRequest, {
          type: "AllWatcher",
          request: "Next",
          version: 0,
        });
        expect(ws.lastRequest?.["id"]).toBe(watcherId);
        expect(result).toStrictEqual({
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        });
      });
      // Reply to the next request.
      ws.reply({
        response: {
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      });
      done();
    });
  });

  it("next failure", (done) => {
    makeConnection(options, (conn, ws) => {
      const allWatcher = conn?.info.getFacade?.("allWatcher") as AllWatcherV0;
      const watcherId = 42;
      allWatcher?.next(watcherId, (err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });

  it("stop success", (done) => {
    makeConnection(options, (conn, ws) => {
      const allWatcher = conn?.info.getFacade?.("allWatcher") as AllWatcherV0;
      const watcherId = 42;
      allWatcher.stop(watcherId, (_error, result) => {
        requestEqual(ws.lastRequest, {
          type: "AllWatcher",
          request: "Stop",
          version: 0,
        });
        expect(ws.lastRequest?.["id"]).toBe(watcherId);
        expect(result).toStrictEqual({});
      });
      // Reply to the next request.
      ws.reply({ response: {} });
      done();
    });
  });

  it("stop failure", (done) => {
    makeConnection(options, (conn, ws) => {
      const allWatcher = conn?.info.getFacade?.("allWatcher") as AllWatcherV0;
      const watcherId = 42;
      allWatcher.stop(watcherId, (err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });
});

describe("wrapClient", () => {
  it("watch success", (done) => {
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;

      watchAll(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }

      watch(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
    }
    class AllWatcherV0 extends BaseFacade {
      static NAME = "AllWatcher";
      static VERSION = 0;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    };
    makeConnection(options, (conn, ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      let callCount = 0;
      client?.watch((_error, result) => {
        callCount += 1;
        switch (callCount) {
          case 1:
            expect(result).toStrictEqual({
              deltas: [
                ["app", "remove", { name: "app1" }],
                ["machine", "change", { name: "machine2" }],
              ],
            });
            break;
          case 2:
            expect(result).toStrictEqual({
              deltas: [["app", "change", { name: "app2" }]],
            });
            break;
        }
      });
      // Reply to next requests.
      ws.reply({
        response: {
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      });
      ws.reply({
        response: {
          deltas: [["app", "change", { name: "app2" }]],
        },
      });
      done();
    });
  });

  it("watch failure allWatcher not found", (done) => {
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;

      watch(_callback: (result: Response | CallbackError) => void) {}
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3)],
    };
    makeConnection(options, (conn, ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.watch((err) => {
        expect(err).toStrictEqual(
          new Error("watch requires the allWatcher facade to be loaded")
        );
        // Only the login request has been made, no other requests.
        expect(ws.requests.length).toBe(1);
      });
      done();
    });
  });

  it("watch failure on initial watch request", (done) => {
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;
      watchAll(callback: Callback<Record<string, number>>) {
        callback(new Error("bad wolf"), {});
      }
      watch(callback: Callback<Record<string, number>>) {
        callback(new Error("bad wolf"), {});
      }
    }
    class AllWatcherV0 extends BaseFacade {
      static NAME = "AllWatcher";
      static VERSION = 0;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    };
    makeConnection(options, (conn, _ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.watch((err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      done();
    });
  });

  it("watch failure on next request", (done) => {
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;
      watchAll(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
      watch(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
    }
    class AllWatcherV0 extends BaseFacade {
      static NAME = "AllWatcher";
      static VERSION = 0;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    };
    makeConnection(options, (conn, ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.watch((err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });

  it("addMachine success", (done) => {
    let gotArgs: unknown = null;
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;
      addMachines(
        args: unknown,
        callback: Callback<{ machines: { machine: number }[] }>
      ) {
        gotArgs = args;
        callback(null, { machines: [{ machine: 42 }] });
      }
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3)],
    };
    makeConnection(options, (conn, _ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.addMachines(
        {
          arch: "amd64",
          constraints: { cores: 8 },
          jobs: ["job1", "job2"],
          parentId: 2,
          series: "bionic",
        },
        (err, result) => {
          expect(err).toBe(null);
          expect(result).toStrictEqual({ machines: [{ machine: 42 }] });
          expect(gotArgs).toStrictEqual({
            arch: "amd64",
            constraints: { cores: 8 },
            jobs: ["job1", "job2"],
            parentId: 2,
            series: "bionic",
          });
        }
      );
      done();
    });
  });

  it("addMachine success without jobs", (done) => {
    let gotArgs: unknown | null = null;
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;
      addMachines(
        args: unknown,
        callback: Callback<{ machines: { machine: number }[] }>
      ) {
        gotArgs = args;
        callback(null, { machines: [{ machine: 42 }] });
      }
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3)],
    };
    makeConnection(options, (conn, _ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.addMachines({ series: "cosmic" }, (_err, _result) => {
        expect(gotArgs).toStrictEqual({
          series: "cosmic",
        });
      });
      done();
    });
  });

  it("addMachine failure", (done) => {
    class ClientV3 extends BaseFacade {
      static NAME = "Client";
      static VERSION = 3;
      addMachines(args: unknown, callback: Callback<Record<string, void>>) {
        callback(new Error("bad wolf"), {});
      }
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapClient(ClientV3)],
    };
    makeConnection(options, (conn, _ws) => {
      const client = conn?.info.getFacade?.("client") as ClientV3;
      client.addMachines({ series: "bionic" }, (err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      done();
    });
  });
});

describe("wrapController", () => {
  it("watch success", (done) => {
    class ControllerV4 extends BaseFacade {
      static NAME = "Controller";
      static VERSION = 4;
      watchAllModels(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
      watch(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
    }
    class AllModelWatcherV1 extends BaseFacade {
      static NAME = "AllModelWatcher";
      static VERSION = 1;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [
        wrapController(ControllerV4),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    };
    makeConnection(options, (conn, ws) => {
      const controller = conn?.info.getFacade?.("controller") as ControllerV4;
      let callCount = 0;
      controller?.watch((_error, result) => {
        callCount += 1;
        switch (callCount) {
          case 1:
            expect(result).toStrictEqual({
              deltas: [
                ["model", "change", { name: "default" }],
                ["machine", "change", { name: "machine2" }],
              ],
            });
            break;
          case 2:
            expect(result).toStrictEqual({
              deltas: [["app", "change", { name: "app2" }]],
            });
            break;
        }
      });
      // Reply to next requests.
      ws.reply({
        response: {
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      });
      ws.reply({
        response: {
          deltas: [["app", "change", { name: "app2" }]],
        },
      });
      done();
    });
  });

  it("watch failure allWatcher not found", (done) => {
    class ControllerV4 extends BaseFacade {
      static NAME = "Controller";
      static VERSION = 4;

      watch(_callback: Callback<CallbackError>) {}
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [wrapController(ControllerV4)],
    };
    makeConnection(options, (conn, ws) => {
      const controller = conn?.info.getFacade?.("controller") as ControllerV4;
      controller.watch((err) => {
        expect(err).toStrictEqual(
          new Error("watch requires the allModelWatcher facade to be loaded")
        );
        // Only the login request has been made, no other requests.
        expect(ws.requests.length).toBe(1);
      });
      done();
    });
  });

  it("watch failure on initial watch request", (done) => {
    class ControllerV4 extends BaseFacade {
      static NAME = "Controller";
      static VERSION = 4;
      watchAllModels(callback: Callback<Record<string, number>>) {
        callback(new Error("bad wolf"), {});
      }
      watch(callback: Callback<Record<string, number>>) {
        callback(new Error("bad wolf"), {});
      }
    }
    class AllModelWatcherV1 extends BaseFacade {
      static NAME = "AllModelWatcher";
      static VERSION = 1;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [
        wrapController(ControllerV4),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    };
    makeConnection(options, (conn, _ws) => {
      const controller = conn?.info.getFacade?.("controller") as ControllerV4;
      controller.watch((err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      done();
    });
  });

  it("watch failure on next request", (done) => {
    class ControllerV5 extends BaseFacade {
      static NAME = "Controller";
      static VERSION = 5;
      watchAllModels(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
      watch(callback: Callback<Record<string, number>>) {
        callback(null, { watcherId: 47 });
      }
    }
    class AllModelWatcherV1 extends BaseFacade {
      static NAME = "AllModelWatcher";
      static VERSION = 1;
    }
    const options = {
      closeCallback: jest.fn(),
      facades: [
        wrapController(ControllerV5),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    };
    makeConnection(options, (conn, ws) => {
      const controller = conn?.info.getFacade?.("controller") as ControllerV5;
      controller.watch((err) => {
        expect(err).toStrictEqual(new Error("bad wolf"));
      });
      // Reply to the next request.
      ws.reply({ error: "bad wolf" });
      done();
    });
  });
});
