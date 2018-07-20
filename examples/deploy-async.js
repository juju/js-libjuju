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
const url = 'wss://35.237.254.252:17070/model/5e764f56-c70a-4625-8556-b49c383aed69/api';

async function connectAndDeploy() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({user: 'user-admin', password: 'dfa1e626bce9f5f1d1c4b1d85768baa4'});

    const application = conn.facades.application;
    const client = conn.facades.client;
    client.addCharm({url: 'cs:haproxy-43'}, err => {
      if (err) {
        console.log('cannot add charm:', err);
        process.exit(1);
      }

      application.deploy({
        applications: [{
          application: 'h3',
          charmUrl: 'cs:haproxy-43',
          series: 'xenial'
        }]
      }, (err, result) => {
        if (err) {
          console.log('cannot deploy app:', err);
          process.exit(1);
        }
        console.log(JSON.stringify(result, null, 2));
        process.exit();
      });
    });
  } catch(error) {
    console.log('unable to connect and deploy:', error);
    process.exit(1);
  }
}

connectAndDeploy();
