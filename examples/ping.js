// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const facades = [
  require('../api/facades/pinger-v1.js')
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

    const pinger = conn.facades.pinger;
    const handle = pinger.pingForever(1000, err => {
      if (err) {
        console.log('cannot ping:', err);
        return;
      }
      console.log('pong');
    });
    setTimeout(handle.stop, 5000);
  });
});
