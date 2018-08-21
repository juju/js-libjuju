// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const url = 'wss://130.211.62.123:17070/api';
const credentials = {user: 'user-admin', password: 'secret'};
const facades = [
  require('../api/facades/all-model-watcher-v2.js'),
  require('../api/facades/controller-v5.js')
];
const options = {debug: true, facades: facades, wsclass: WebSocket};


jujulib.connectAndLogin(url, credentials, options, (err, result) => {
  if (err) {
    console.log('cannot connect:', err);
    process.exit(1);
  }
  // Start watching all models.
  const controller = result.facades.controller;
  let handle;
  handle = controller.watch((err, result) => {
    if (err) {
      console.log('cannot watch models:', err);
      process.exit(1);
    }
    console.log(result.deltas);

    setTimeout(() => {
      // Stop the multi-model watcher and log out.
      handle.stop(err => {
        console.log('watcher stopped');
        result.logout();
      });
    }, 10000);
  });

});
