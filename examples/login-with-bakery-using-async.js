// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;
const bakery = require('macaroon-bakery');
// Bakery uses btoa and MLHttpRequest.
global.btoa = require('btoa');
global.XMLHttpRequest = require('xhr2');

const jujulib = require('../api/client.js');


const options = {
    debug: true,
    facades: [require('../api/facades/model-manager-v4.js')],
    wsclass: WebSocket,
    bakery: new bakery.Bakery({
        visitPage: resp => {
            console.log('visit this URL to login:', resp.Info.VisitURL);
        }
    })
};
const url = 'wss://jimm.jujucharms.com/api';

async function loginWithBakery() {
  try {
    const juju = await jujulib.connect(url, options);
    const conn = await juju.login({});
    // List models.
    const modelManager = conn.facades.modelManager;
    const models = await modelManager.listModels({tag: conn.info.identity});
    // Connect to the first model found.
    const model = models.userModels[0].model;
    console.log('connecting to model', model.name);
    let modelURL = `wss://jimm.jujucharms.com/model/${model.uuid}/api`;

    try {
      const juju = await jujulib.connect(modelURL, options);
      await juju.login({});
    } catch (error) {
      if (!juju.isRedirectionError(error)) {
        console.log('cannot login to model:', error);
        process.exit(1);
      }
      // Redirect to the real model.
      juju.logout();

      error.servers.forEach(async srv => {
        if (srv.type === 'hostname' && srv.scope === 'public') {
          // This is a public server with a dns-name, connect to it.
          const modelURL = srv.url(model.uuid);

          try {
            const juju = await jujulib.connect(modelURL, options);
            await juju.login({});
            console.log('connected to model using', modelURL);
            process.exit(0);
          } catch (error) {
            console.log('cannot login to model:', error);
            process.exit(1);
          }
        }
      });
    }

  } catch(error) {
    console.log('unable to connect and deploy:', error);
    process.exit(1);
  }

}

loginWithBakery();
