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
const url = 'wss://35.227.35.32:17070/model/e713ebfd-158d-437c-80ed-c9c31e7d1bcf/api';

async function connectAndDeploy() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({user: 'user-admin', password: 'secret'});

    const application = conn.facades.application;
    const client = conn.facades.client;

    await client.addCharm({url: 'cs:haproxy-43'});
    const app = await application.deploy({
      applications: [{
        application: 'h4',
        charmUrl: 'cs:haproxy-43',
        series: 'xenial'
      }]
    });
    console.log(JSON.stringify(app, null, 2));
    process.exit();
  } catch(error) {
    console.log('unable to connect and deploy:', error);
    process.exit(1);
  }
}

connectAndDeploy();
