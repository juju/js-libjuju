// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

"use strict"

import { test } from "tap"

import { BaseFacade, makeConnection, requestEqual } from "./test-helpers.js"
import {
  wrapAllModelWatcher,
  wrapAllWatcher,
  wrapClient,
  wrapController,
} from "../../dist/api/helpers.js"

test("wrapAllModelWatcher", (t) => {
  class AllModelWatcherV1 extends BaseFacade {}
  const options = { facades: [wrapAllModelWatcher(AllModelWatcherV1)] }

  t.test("next success", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allModelWatcher = conn.facades.allModelWatcher
      const watcherId = 42
      allModelWatcher.next(watcherId, (err, result) => {
        requestEqual(t, ws.lastRequest, {
          type: "AllModelWatcher",
          request: "Next",
          version: 1,
        })
        t.equal(ws.lastRequest.id, watcherId)
        t.equal(err, null)
        t.deepEqual(result, {
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        })
        t.end()
      })
      // Reply to the next request.
      ws.reply({
        response: {
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      })
    })
  })

  t.test("next failure", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allModelWatcher = conn.facades.allModelWatcher
      const watcherId = 42
      allModelWatcher.next(watcherId, (err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.test("stop success", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allModelWatcher = conn.facades.allModelWatcher
      const watcherId = 42
      allModelWatcher.stop(watcherId, (err, result) => {
        requestEqual(t, ws.lastRequest, {
          type: "AllModelWatcher",
          request: "Stop",
          version: 1,
        })
        t.equal(ws.lastRequest.id, watcherId)
        t.equal(err, null)
        t.deepEqual(result, {})
        t.end()
      })
      // Reply to the next request.
      ws.reply({ response: {} })
    })
  })

  t.test("stop failure", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allModelWatcher = conn.facades.allModelWatcher
      const watcherId = 42
      allModelWatcher.stop(watcherId, (err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.end()
})

test("wrapAllWatcher", (t) => {
  class AllWatcherV0 extends BaseFacade {}
  const options = { facades: [wrapAllWatcher(AllWatcherV0)] }

  t.test("next success", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher
      const watcherId = 42
      allWatcher.next(watcherId, (err, result) => {
        requestEqual(t, ws.lastRequest, {
          type: "AllWatcher",
          request: "Next",
          version: 0,
        })
        t.equal(ws.lastRequest.id, watcherId)
        t.equal(err, null)
        t.deepEqual(result, {
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        })
        t.end()
      })
      // Reply to the next request.
      ws.reply({
        response: {
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      })
    })
  })

  t.test("next failure", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher
      const watcherId = 42
      allWatcher.next(watcherId, (err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.test("stop success", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher
      const watcherId = 42
      allWatcher.stop(watcherId, (err, result) => {
        requestEqual(t, ws.lastRequest, {
          type: "AllWatcher",
          request: "Stop",
          version: 0,
        })
        t.equal(ws.lastRequest.id, watcherId)
        t.equal(err, null)
        t.deepEqual(result, {})
        t.end()
      })
      // Reply to the next request.
      ws.reply({ response: {} })
    })
  })

  t.test("stop failure", (t) => {
    makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher
      const watcherId = 42
      allWatcher.stop(watcherId, (err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.end()
})

test("wrapClient", (t) => {
  t.test("watch success", (t) => {
    class ClientV3 extends BaseFacade {
      watchAll(callback) {
        callback(null, { watcherId: 47 })
      }
    }
    class AllWatcherV0 extends BaseFacade {}
    const options = {
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      let callCount = 0
      client.watch((err, result) => {
        t.equal(err, null)
        callCount += 1
        switch (callCount) {
          case 1:
            t.deepEqual(result, {
              deltas: [
                ["app", "remove", { name: "app1" }],
                ["machine", "change", { name: "machine2" }],
              ],
            })
            break
          case 2:
            t.deepEqual(result, {
              deltas: [["app", "change", { name: "app2" }]],
            })
            t.end()
            break
        }
      })
      // Reply to next requests.
      ws.reply({
        response: {
          deltas: [
            ["app", "remove", { name: "app1" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      })
      ws.reply({
        response: {
          deltas: [["app", "change", { name: "app2" }]],
        },
      })
    })
  })

  t.test("watch failure allWatcher not found", (t) => {
    class ClientV3 extends BaseFacade {}
    const options = { facades: [wrapClient(ClientV3)] }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.watch((err, result) => {
        t.equal(err, "watch requires the allWatcher facade to be loaded")
        t.deepEqual(result, {})
        // Only the login request has been made, no other requests.
        t.deepEqual(ws.requests.length, 1)
        t.end()
      })
    })
  })

  t.test("watch failure on initial watch request", (t) => {
    class ClientV3 extends BaseFacade {
      watchAll(callback) {
        callback("bad wolf", {})
      }
    }
    class AllWatcherV0 extends BaseFacade {}
    const options = {
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.watch((err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, {})
        t.end()
      })
    })
  })

  t.test("watch failure on next request", (t) => {
    class ClientV3 extends BaseFacade {
      watchAll(callback) {
        callback(null, { watcherId: 47 })
      }
    }
    class AllWatcherV0 extends BaseFacade {}
    const options = {
      facades: [wrapClient(ClientV3), wrapAllWatcher(AllWatcherV0)],
    }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.watch((err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.test("addMachine success", (t) => {
    let gotArgs = null
    class ClientV3 extends BaseFacade {
      addMachines(args, callback) {
        gotArgs = args
        callback(null, { machines: [{ machine: 42 }] })
      }
    }
    const options = { facades: [wrapClient(ClientV3)] }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.addMachine(
        {
          arch: "amd64",
          constraints: { cores: 8 },
          jobs: ["job1", "job2"],
          parentId: 2,
          series: "bionic",
        },
        (err, result) => {
          t.equal(err, null)
          t.deepEqual(result, { machine: 42 })
          t.deepEqual(gotArgs, {
            params: [
              {
                arch: "amd64",
                constraints: { cores: 8 },
                jobs: ["job1", "job2"],
                parentId: 2,
                series: "bionic",
              },
            ],
          })
          t.end()
        }
      )
    })
  })

  t.test("addMachine success without jobs", (t) => {
    let gotArgs = null
    class ClientV3 extends BaseFacade {
      addMachines(args, callback) {
        gotArgs = args
        callback(null, { machines: [{ machine: 42 }] })
      }
    }
    const options = { facades: [wrapClient(ClientV3)] }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.addMachine({ series: "cosmic" }, (err, result) => {
        t.deepEqual(gotArgs, {
          params: [
            {
              jobs: ["JobHostUnits"],
              series: "cosmic",
            },
          ],
        })
        t.end()
      })
    })
  })

  t.test("addMachine failure", (t) => {
    class ClientV3 extends BaseFacade {
      addMachines(args, callback) {
        callback("bad wolf", {})
      }
    }
    const options = { facades: [wrapClient(ClientV3)] }
    makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client
      client.addMachine({ series: "bionic" }, (err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
    })
  })

  t.end()
})

test("wrapController", (t) => {
  t.test("watch success", (t) => {
    class ControllerV4 extends BaseFacade {
      watchAllModels(callback) {
        callback(null, { watcherId: 47 })
      }
    }
    class AllModelWatcherV1 extends BaseFacade {}
    const options = {
      facades: [
        wrapController(ControllerV4),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    }
    makeConnection(t, options, (conn, ws) => {
      const controller = conn.facades.controller
      let callCount = 0
      controller.watch((err, result) => {
        t.equal(err, null)
        callCount += 1
        switch (callCount) {
          case 1:
            t.deepEqual(result, {
              deltas: [
                ["model", "change", { name: "default" }],
                ["machine", "change", { name: "machine2" }],
              ],
            })
            break
          case 2:
            t.deepEqual(result, {
              deltas: [["app", "change", { name: "app2" }]],
            })
            t.end()
            break
        }
      })
      // Reply to next requests.
      ws.reply({
        response: {
          deltas: [
            ["model", "change", { name: "default" }],
            ["machine", "change", { name: "machine2" }],
          ],
        },
      })
      ws.reply({
        response: {
          deltas: [["app", "change", { name: "app2" }]],
        },
      })
    })
  })

  t.test("watch failure allWatcher not found", (t) => {
    class ControllerV4 extends BaseFacade {}
    const options = { facades: [wrapController(ControllerV4)] }
    makeConnection(t, options, (conn, ws) => {
      const controller = conn.facades.controller
      controller.watch((err, result) => {
        t.equal(err, "watch requires the allModelWatcher facade to be loaded")
        t.deepEqual(result, {})
        // Only the login request has been made, no other requests.
        t.deepEqual(ws.requests.length, 1)
        t.end()
      })
    })
  })

  t.test("watch failure on initial watch request", (t) => {
    class ControllerV4 extends BaseFacade {
      watchAllModels(callback) {
        callback("bad wolf", {})
      }
    }
    class AllModelWatcherV1 extends BaseFacade {}
    const options = {
      facades: [
        wrapController(ControllerV4),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    }
    makeConnection(t, options, (conn, ws) => {
      const controller = conn.facades.controller
      controller.watch((err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, {})
        t.end()
      })
    })
  })

  t.test("watch failure on next request", (t) => {
    class ControllerV5 extends BaseFacade {
      watchAllModels(callback) {
        callback(null, { watcherId: 47 })
      }
    }
    class AllModelWatcherV1 extends BaseFacade {}
    const options = {
      facades: [
        wrapController(ControllerV5),
        wrapAllModelWatcher(AllModelWatcherV1),
      ],
    }
    makeConnection(t, options, (conn, ws) => {
      const controller = conn.facades.controller
      controller.watch((err, result) => {
        t.equal(err, "bad wolf")
        t.deepEqual(result, null)
        t.end()
      })
      // Reply to the next request.
      ws.reply({ error: "bad wolf" })
    })
  })

  t.end()
})
