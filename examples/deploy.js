// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const url = 'wss://130.211.62.123:17070/model/ae6e92c5-cce7-4943-8913-72514a485ea8/api';
const facades = [
  require('../api/facades/application-v5.js'),
  require('../api/facades/client-v1.js')
];
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

    const application = conn.facades.application;
    const client = conn.facades.client;
    client.addCharm({url: 'cs:haproxy-43'}, err => {
      if (err) {
        console.log('cannot add charm:', err);
        process.exit(1);
      }

      application.deploy({
        applications: [{
          application: 'ha',
          charmUrl: 'cs:haproxy-43',
          series: 'xenial'
        }]
      }, (err, result) => {
        if (err) {
          console.log('cannot deploy app:', err);
          process.exit(1);
        }
        console.log(result);
      });
    });
  });
});
