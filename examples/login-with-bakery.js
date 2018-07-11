// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

// Allow connecting endpoints using self-signed certs.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const WebSocket = require('websocket').w3cwebsocket;
const bakery = require('../../bakeryjs/index.js');
// Bakery uses btoa and MLHttpRequest.
global.btoa = require('btoa');
global.XMLHttpRequest = require('xhr2')

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


jujulib.connect(url, options, (err, juju) => {
  if (err) {
    console.log('cannot connect to controller:', err);
    process.exit(1);
  }
  juju.login({}, (err, conn) => {
    if (err) {
      console.log('cannot login to controller:', err);
      process.exit(1);
    }
    console.log('logged in to controller');

    // List models.
    const modelManager = conn.facades.modelManager;
    modelManager.listModels({tag: conn.info.identity}, (err, result) => {
      if (err) {
        console.log('cannot list models:', err);
        process.exit(1);
      }

      // Connect to the first model found.
      const model = result.userModels[0].model;
      console.log('connecting to model', model.name);
      let modelURL = `wss://jimm.jujucharms.com/model/${model.uuid}/api`;
      jujulib.connect(modelURL, options, (err, juju) => {
        if (err) {
          console.log('cannot connect to model:', err);
          process.exit(1);
        }
        juju.login({}, (err, conn) => {
          if (err) {
            if (!juju.isRedirectionError(err)) {
              console.log('cannot login to model:', err);
              process.exit(1);
            }
            // Redirect to the real model.
            juju.logout();

            err.servers.forEach(srv => {
              if (srv.type === 'hostname' && srv.scope === 'public') {
                // This is a public server with a dns-name, connect to it.
                const modelURL = srv.url(model.uuid);
                jujulib.connect(modelURL, options, (err, juju) => {
                  if (err) {
                    console.log('cannot connect to model:', err);
                    process.exit(1);
                  }
                  juju.login({}, (err, conn) => {
                    if (err) {
                      console.log('cannot login to model:', err);
                      process.exit(1);
                    }
                    console.log('connected to model using', modelURL);
                    process.exit(0);
                  });
                });
              }
            })
          }
          console.log('logged in to model without redirection');
        });
      });
    });
  });
});
