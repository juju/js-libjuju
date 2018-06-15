// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const facades = [
  require('../api/facades/all-watcher-v1.js'),
  require('../api/facades/client-v1.js')
];
const options = {debug: true, facades: facades, wsclass: WebSocket};
const url = 'wss://35.196.223.30:17070/model/bf716a6d-97cf-47b6-8b77-80e1890c0920/api';


jujulib.connect(url, options, (err, juju) => {
  if (err) {
    console.log('cannot connect:', err);
    return;
  }

  juju.login({user: 'user-admin', password: 'secret'}, (err, conn) => {
    if (err) {
      console.log('cannot login:', err);
      return;
    }

    const client = conn.facades.client;
    const handle = client.watch((err, result) => {
      if (err) {
        console.log('cannot watch model:', err);
        return;
      }
      console.log(result);
    });

    setTimeout(() => {
      handle.stop(err => {
        console.log('watcher stopped');
      });
    }, 10000);

  });
});
