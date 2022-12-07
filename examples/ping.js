// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import websocket from "websocket";
import * as jujulib from "../api/client.js";
import { pingForever } from "../api/helpers.js";

import PingerV1 from "../api/facades/pinger/PingerV1.js";

const url =
  "wss://10.223.241.216:17070/model/7236b7b8-5458-4d3e-8a9a-1c8f1a0046b1/api";

const facades = [PingerV1];
const options = {
  debug: true,
  facades: facades,
  wsclass: websocket.w3cwebsocket,
};

async function ping() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({
      username: "admin",
      password: "ca83f25a8fd8e162641b60f7a5fd1049",
    });
    const stopFn = pingForever(conn.facades.pinger, 1000, (resp) => {
      if (resp.error) {
        console.log("cannot ping:", resp.error);
        process.exit(1);
      }
      console.log("pong");
    });

    setTimeout(stopFn, 5000);
  } catch (error) {
    console.log("cannot connect:", error);
    process.exit(1);
  }
}

ping();
