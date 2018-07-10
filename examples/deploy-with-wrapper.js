// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;

const jujulib = require('../api/client.js');


const facades = [
  require('../api/facades/application-v5.js'),
  require('../api/facades/client-v1.js')
];
const options = {debug: true, facades: facades, wsclass: WebSocket};
const url = 'wss://35.240.22.136:17070/model/7ff7e1c9-f733-4eba-8d29-6c0946dc21d0/api';


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

    const application = conn.facades.application;
    application.addCharmAndDeploy({
      application: 'ha',
      charmUrl: 'cs:haproxy-43',
      series: 'xenial'
    }, (err, result) => {
      if (err) {
        console.log('cannot deploy app:', err);
        return;
      }
      console.log(result);
    });
  });
});
