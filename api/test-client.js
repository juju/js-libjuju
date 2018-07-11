// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';

const tap = require('tap');

const helpers = require('./test-helpers.js');
const jujulib = require('./client.js');


tap.test('connect', t => {
  let ws;
  const options = {
    wsclass: helpers.makeWSClass(instance => {
      ws = instance;
    })
  };

  t.test('connect failure', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, 'cannot connect WebSocket: bad wolf');
      t.equal(juju, null);
      t.end();
    });
    // Close the WebSocket connection.
    ws.close('bad wolf');
  });

  t.test('login failure', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({user: 'who', password: 'secret'}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'Login',
          params: {'auth-tag': 'who', credentials: 'secret', macaroons: []},
          version: 3
        });
        t.equal(err, 'bad wolf');
        t.equal(conn, null);
        t.end();
      });
      // Reply to the login request.
      ws.reply({error: 'bad wolf'});
    });
    // Open the WebSocket connection.
    ws.open();
  });

  t.test('connection transport success', t => {
    const options = {};
    helpers.makeConnection(t, options, (conn, ws) => {
      conn.transport.write({type: 'Test'}, (err, resp) => {
        t.equal(err, null);
        t.equal(resp.ok, true);
        t.end();
      });
      // Reply to the transport test request.
      ws.reply({'response': {ok: true}});
    });
  });

  t.test('connection transport failure', t => {
    const options = {};
    helpers.makeConnection(t, options, (conn, ws) => {
      conn.transport.write({type: 'Test'}, (err, resp) => {
        t.equal(err, 'bad wolf');
        t.deepEqual(resp, {});
        t.end();
      });
      // Reply to the transport test request.
      ws.reply({'error': 'bad wolf'});
    });
  });

  t.test('connection info', t => {
    const options = {};
    helpers.makeConnection(t, options, (conn, ws) => {
      t.equal(
        conn.info.controllerTag,
        'controller-76b9c391-12be-47fc-8406-c31f2db68ee5');
      t.equal(
        conn.info.modelTag,
        'model-c36a62d0-a17a-484e-87bf-a09d1b403627');
      t.equal(conn.info.serverVersion, '2.42.47');
      t.deepEqual(conn.info.user, {
        credentials: 'creds',
        displayName: 'who',
        identity: 'user-who@gallifrey',
        lastConnection: '2018-06-06T01:02:13Z',
        controllerAccess: 'timelord',
        modelAccess: 'admin'
      });
      t.end();
    });
  });

  t.test('connection info getFacade call', t => {
    const options = {
      facades: [
        class ClientV2 extends helpers.BaseFacade{},
        class ClientV3 extends helpers.BaseFacade{},
        class AllWatcherV0 extends helpers.BaseFacade{},
        class AllWatcherV1 extends helpers.BaseFacade{},
        class MyFacadeV1 extends helpers.BaseFacade{}
      ]
    };
    helpers.makeConnection(t, options, (conn, ws) => {
      let facade = conn.info.getFacade('client');
      t.equal(facade.constructor.name, 'ClientV3');
      facade = conn.info.getFacade('allWatcher');
      t.equal(facade.constructor.name, 'AllWatcherV0');
      facade = conn.info.getFacade('myFacade');
      t.equal(facade.constructor.name, 'MyFacadeV1');
      t.end();
    });
  });

  t.test('connection info getFacade call', t => {
    const options = {
      facades: [
        class ClientV2 extends helpers.BaseFacade{},
        class MyFacadeV2 extends helpers.BaseFacade{}
      ]
    };
    helpers.makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client;
      t.notEqual(client, undefined);
      t.equal(client.constructor.name, 'ClientV2');
      t.equal(conn.facades.allWatcher, undefined);
      t.equal(conn.facades.myFacade, undefined);
      // Check properties passed to the instantiated facade.
      t.deepEqual(client._transport, conn.transport);
      t.deepEqual(client._info, conn.info);
      t.end();
    });
  });

  t.end();
});
