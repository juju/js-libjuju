// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import websocket from "websocket";
import * as jujulib from "../api/client.js";

import AllWatcherV1 from "../api/facades/all-watcher/AllWatcherV1.js";
import ClientV2 from "../api/facades/client/ClientV2.js";

const url =
  "wss://10.223.241.216:17070/model/7236b7b8-5458-4d3e-8a9a-1c8f1a0046b1/api";
const options = {
  debug: true,
  facades: [AllWatcherV1, ClientV2],
  wsclass: websocket.w3cwebsocket,
};

async function watch() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({
      username: "admin",
      password: "ca83f25a8fd8e162641b60f7a5fd1049",
    });
    const handle = conn.facades.client.watch((err, result) => {
      if (err) {
        console.log("cannot watch model:", err);
        process.exit(1);
      }
      console.log(result);
    });
    setTimeout(() => {
      handle.stop((_err) => {
        console.log("watcher stopped");
      });
    }, 10000);
  } catch (error) {
    console.log("cannot connect:", error);
    process.exit(1);
  }
}

watch();
