// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

import websocket from "websocket";
import bakery from "@canonical/macaroon-bakery";
// Bakery uses btoa and MLHttpRequest.
import btoa from "btoa";
global.btoa = btoa;
import xhr2 from "xhr2";
global.XMLHttpRequest = xhr2;

import * as jujulib from "../api/client.js";
import ClientV2 from "../api/facades/client-v2.js";

const url =
  "wss://jimm.jujucharms.com:443/model/57650e3c-815f-4540-89df-81fd5d70b7ef/api";
const credentials = {};
const options = {
  debug: true,
  facades: [ClientV2],
  wsclass: websocket.w3cwebsocket,
  bakery: new bakery.Bakery({
    visitPage: (resp) => {
      console.log("visit this URL to login:", resp.Info.VisitURL);
    },
  }),
};

async function addMachine() {
  const { conn } = await jujulib.connectAndLogin(url, credentials, options);
  const machineInfo = await conn.facades.client.addMachines({
    params: [
      {
        series: "bionic",
        jobs: ["JobHostUnits"],
      },
    ],
  });
  console.log(machineInfo);
}

addMachine();
