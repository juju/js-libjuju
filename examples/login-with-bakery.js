// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import websocket from "websocket";
import bakery from "macaroon-bakery";
// Bakery uses btoa and MLHttpRequest.
import btoa from "btoa";
global.btoa = btoa;
import xhr2 from "xhr2";
global.XMLHttpRequest = xhr2;

import * as jujulib from "../api/client.js";
import modelManagerv8 from "../api/facades/model-manager-v8.js";

const options = {
  debug: true,
  facades: [modelManagerv8],
  wsclass: websocket.w3cwebsocket,
  bakery: new bakery.Bakery({
    visitPage: (resp) => {
      console.log("visit this URL to login:", resp.Info.VisitURL);
    },
  }),
};
const url = "wss://jimm.jujucharms.com/api";

async function loginWithBakery() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({});
    // List models.
    const modelManager = conn.facades.modelManager;
    const models = await modelManager.listModels({ tag: conn.info.identity });
    // Connect to the first model found.
    const model = models["user-models"][0].model;
    console.log("connecting to model", model.name);
    let modelURL = `wss://jimm.jujucharms.com/model/${model.uuid}/api`;

    try {
      const juju = await jujulib.connect(modelURL, options);
      await juju.login({});
    } catch (error) {
      if (!juju.isRedirectionError(error)) {
        console.log("cannot login to model:", error);
        process.exit(1);
      }
      // Redirect to the real model.
      juju.logout();

      error.servers.forEach(async (srv) => {
        if (srv.type === "hostname" && srv.scope === "public") {
          // This is a public server with a dns-name, connect to it.
          const modelURL = srv.url(model.uuid);

          try {
            const juju = await jujulib.connect(modelURL, options);
            await juju.login({});
            console.log("connected to model using", modelURL);
            process.exit(0);
          } catch (error) {
            console.log("cannot login to model:", error);
            process.exit(1);
          }
        }
      });
    }
  } catch (error) {
    console.log("unable to connect:", error);
    process.exit(1);
  }
}

loginWithBakery();
