// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const url = 'wss://130.211.62.123:17070/model/ae6e92c5-cce7-4943-8913-72514a485ea8/api';
const facades = [require('../api/facades/pinger-v1.js')];
const options = {debug: true, facades: facades, wsclass: WebSocket};


jujulib.connect(url, options, (err, juju) => {
  if (err) {
    console.log('cannot connect:', err);
    process.exit(1);
  }

  juju.login({user: 'user-admin', password: 'secret'}, (err, conn) => {
    if (err) {
      console.log('cannot login:', err);
      process.exit(1);
    }

    const pinger = conn.facades.pinger;
    const handle = pinger.pingForever(1000, err => {
      if (err) {
        console.log('cannot ping:', err);
        process.exit(1);
      }
      console.log('pong');
    });
    setTimeout(handle.stop, 5000);
  });
});
