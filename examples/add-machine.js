// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

const WebSocket = require('websocket').w3cwebsocket;
const bakery = require('macaroon-bakery');
// Bakery uses btoa and MLHttpRequest.
global.btoa = require('btoa');
global.XMLHttpRequest = require('xhr2')

const jujulib = require('../api/client.js');


const url = 'wss://jimm.jujucharms.com:443/model/9f367e7c-8601-4d55-85e3-0fd8d7867287/api';
const credentials = {};
const options = {
  debug: true,
  facades: [require('../api/facades/client-v1.js')],
  wsclass: WebSocket,
  bakery: new bakery.Bakery({
    visitPage: resp => {
      console.log('visit this URL to login:', resp.Info.VisitURL);
    }
  })
};


jujulib.connectAndLogin(url, credentials, options, (err, conn, logout) => {
  if (err) {
    console.log('cannot connect:', err);
    process.exit(1);
  }
  // Add a single bionic machine.
  const client = conn.facades.client;
  client.addMachine({series: 'bionic'}, (err, result) => {
    if (err) {
      console.log('cannot add machine:', err);
      process.exit(1);
    }
    console.log('machine added:', result);
  });
});
