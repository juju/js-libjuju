// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import websocket from "websocket";
import * as jujulib from "../api/client.js";

import AllModelWatcherV2 from "../api/facades/all-model-watcher/AllModelWatcherV2.js";
import ControllerV9 from "../api/facades/controller/ControllerV9.js";

const url = "wss://10.223.241.216:17070/api";
const credentials = {
  username: "admin",
  password: "ca83f25a8fd8e162641b60f7a5fd1049",
};

const options = {
  debug: true,
  facades: [AllModelWatcherV2, ControllerV9],
  wsclass: websocket.w3cwebsocket,
};

async function watchAll() {
  try {
    const { conn } = await jujulib.connectAndLogin(url, credentials, options);
    const handle = conn.facades.controller.watch((err, result) => {
      if (err) {
        console.log("cannot watch models:", err);
        process.exit(1);
      }
      console.log(result.deltas);

      setTimeout(() => {
        // Stop the multi-model watcher and log out.
        handle.stop((_err) => {
          console.log("watcher stopped");
          result.logout();
        });
      }, 10000);
    });
  } catch (error) {
    console.log("cannot watch all models:", error);
    process.exit(1);
  }
}

watchAll();
