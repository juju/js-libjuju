// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

const WebSocket = require('websocket').w3cwebsocket;
const bakery = require('macaroon-bakery');
// Bakery uses btoa and MLHttpRequest.
global.btoa = require('btoa');
global.XMLHttpRequest = require('xhr2');

const jujulib = require('../api/client.js');


const url = 'wss://jimm.jujucharms.com:443/model/cebb753f-60c2-4717-8ae8-5c318ac4074c/api';
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


jujulib.connectAndLogin(url, credentials, options, (err, result) => {
  if (err) {
    console.log('cannot connect:', err);
    process.exit(1);
  }
  // Add a single bionic machine.
  const client = result.conn.facades.client;
  client.addMachine({series: 'bionic'}, (err, result) => {
    if (err) {
      console.log('cannot add machine:', err);
      process.exit(1);
    }
    console.log('machine added:', result);
  });
});
