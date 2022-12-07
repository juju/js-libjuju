// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import websocket from "websocket";
import * as jujulib from "../api/client.js";

import ApplicationV12 from "../api/facades/application/ApplicationV12.js";
import ClientV2 from "../api/facades/client/ClientV2.js";

const options = {
  debug: true,
  facades: [ApplicationV12, ClientV2],
  wsclass: websocket.w3cwebsocket,
};

const url =
  "wss://10.223.241.216:17070/model/7236b7b8-5458-4d3e-8a9a-1c8f1a0046b1/api";

async function connectAndDeploy() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({
      username: "admin",
      password: "ca83f25a8fd8e162641b60f7a5fd1049",
    });

    const application = conn.facades.application;
    const client = conn.facades.client;

    await client.addCharm({ url: "cs:haproxy-60" });
    const app = await application.deploy({
      applications: [
        {
          application: "h4",
          "charm-url": "cs:haproxy-60",
          series: "focal",
        },
      ],
    });
    console.log(JSON.stringify(app, null, 2));
    process.exit();
  } catch (error) {
    console.log("unable to connect and deploy:", error);
    process.exit(1);
  }
}

connectAndDeploy();
