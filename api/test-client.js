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

  t.test('supports supplying callback to login', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.equal(juju instanceof jujulib.Client, true);
      t.end();
    });
    ws.open();
  });

  t.test('returns promise, supports no callback', t => {
    const prom = jujulib.connect('wss://1.2.3.4', options)
      .then(juju =>
        t.test('check', t => {
          t.equal(juju instanceof jujulib.Client, true);
          t.end();
        }));
    ws.open();
    return prom;
  });

  t.test('returns promise, handles failure to connect', t => {
    const reject = t.rejects(jujulib.connect('wss://1.2.3.4', options), null, 'cannot connect WebSocket: nope');
    ws.close('nope');
    return reject;
  });

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

  t.test('login redirection error failure', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'RedirectInfo',
          params: {},
          version: 3
        });
        t.equal(err, 'bad wolf');
        t.equal(conn, null);
        t.end();
      });
      // Reply to the login request.
      ws.reply({error: 'redirection required'});
      // Reply to the redirectInfo request.
      ws.reply({error: 'bad wolf'});
    });
    // Open the WebSocket connection.
    ws.open();
  });

  t.test('login redirection error success', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'RedirectInfo',
          params: {},
          version: 3
        });
        t.equal(juju.isRedirectionError(err), true);
        t.equal(err.caCert, 'mycert');
        t.equal(err.servers.length, 2);
        t.equal(err.servers[0].value, '1.2.3.4');
        t.equal(err.servers[0].port, 17070);
        t.equal(err.servers[0].type, 'ipv4');
        t.equal(err.servers[0].scope, 'global');
        t.equal(
          err.servers[0].url('srv1-uuid'),
          'wss://1.2.3.4:17070/model/srv1-uuid/api');
        t.equal(
          err.servers[0].url('wss://4.3.2.1:443/model/uuid-in-url/api'),
          'wss://1.2.3.4:17070/model/uuid-in-url/api');
        t.equal(err.servers[1].value, 'example.com');
        t.equal(err.servers[1].port, 443);
        t.equal(err.servers[1].type, 'hostname');
        t.equal(err.servers[1].scope, 'global');
        t.equal(
          err.servers[1].url('ws://4.3.2.1:443/model/another/api'),
          'wss://example.com:443/model/another/api');
        t.equal(
          err.servers[1].url('srv2-uuid'),
          'wss://example.com:443/model/srv2-uuid/api');
        t.equal(conn, null);
        t.end();
      });
      // Reply to the login request.
      ws.reply({error: 'redirection required'});
      // Reply to the redirectInfo request.
      ws.reply({response: {
        'ca-cert': 'mycert',
        'servers': [[{
          value: '1.2.3.4',
          port: 17070,
          type: 'ipv4',
          scope: 'global'
        }, {
          value: 'example.com',
          port: 443,
          type: 'hostname',
          scope: 'global'
        }]]
      }});
    });
    // Open the WebSocket connection.
    ws.open();
  });

  t.test('login discharge required no bakery', t => {
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'Login',
          params: {macaroons: []},
          version: 3
        });
        t.equal(
          err,
          'macaroon discharge is required but no bakery instance provided');
        t.equal(conn, null);
        t.end();
      });
      // Reply to the login request with a discharge required response.
      ws.reply({response: {'discharge-required': 'macaroon'}});
    });
    // Open the WebSocket connection.
    ws.open();
  });

  t.test('login discharge required failure', t => {
    const options = {
      bakery: helpers.makeBakery(false),
      wsclass: helpers.makeWSClass(instance => {
        ws = instance;
      })
    };
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({macaroons: ['m']}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'Login',
          params: {macaroons: [['m']]},
          version: 3
        });
        t.equal(err, 'macaroon discharge failed: bad wolf');
        t.equal(conn, null);
        t.end();
      });
      // Reply to the login request with a discharge required response.
      ws.reply({response: {'discharge-required': 'macaroon'}});
    });
    // Open the WebSocket connection.
    ws.open();
  });

  t.test('login discharge required success', t => {
    const options = {
      bakery: helpers.makeBakery(true),
      wsclass: helpers.makeWSClass(instance => {
        ws = instance;
      })
    };
    jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
      t.equal(err, null);
      t.notEqual(juju, null);
      juju.login({macaroons: ['m']}, (err, conn) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'Admin',
          request: 'Login',
          params: {macaroons: [['m1', 'm2']]},
          version: 3
        });
        t.equal(err, null);
        t.notEqual(conn, null);
        t.end();
      });
      // Reply to the login request with a discharge required response.
      ws.reply({response: {'discharge-required': 'macaroon'}});
      // Reply to the retried login request properly.
      ws.reply({response: {}});
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


tap.test('connectAndLogin', t => {
  let ws;
  const url = 'wss://1.2.3.4';
  const options = {
    wsclass: helpers.makeWSClass(instance => {
      ws = instance;
    })
  };

  t.test('connect failure', t => {
    const creds = {};
    jujulib.connectAndLogin(url, creds, options, (err, conn, logout) => {
      t.equal(err, 'cannot connect WebSocket: bad wolf');
      t.equal(conn, null);
      t.equal(logout, null);
      t.end();
    });
    // Close the WebSocket connection.
    ws.close('bad wolf');
  });

  t.test('login failure', t => {
    const creds = {user: 'who', password: 'tardis'};
    jujulib.connectAndLogin(url, creds, options, (err, conn, logout) => {
      helpers.requestEqual(t, ws.lastRequest, {
        type: 'Admin',
        request: 'Login',
        params: {'auth-tag': 'who', credentials: 'tardis', macaroons: []},
        version: 3
      });
      t.equal(err, 'bad wolf');
      t.equal(conn, null);
      t.equal(logout, null);
      t.end();
    });
    // Open the WebSocket connection.
    ws.open();
    // Reply to the login request.
    ws.reply({error: 'bad wolf'});
  });

  t.test('login redirection error failure', t => {
    const creds = {user: 'who', password: 'tardis'};
    jujulib.connectAndLogin(url, creds, options, (err, conn, logout) => {
      helpers.requestEqual(t, ws.lastRequest, {
        type: 'Admin',
        request: 'RedirectInfo',
        params: {},
        version: 3
      });
      t.equal(err, 'bad wolf');
      t.equal(conn, null);
      t.equal(logout, null);
      t.end();
    });
    // Open the WebSocket connection.
    ws.open();
    // Reply to the login request.
    ws.reply({error: 'redirection required'});
    // Reply to the redirectInfo request.
    ws.reply({error: 'bad wolf'});
  });

  t.test('login redirection error success', t => {
    const creds = {user: 'who', password: 'tardis'};
    jujulib.connectAndLogin(url, creds, options, (err, conn, logout) => {
      t.equal(err, null);
      t.notEqual(conn, null);
      t.notEqual(logout, null);
      logout();
      // The WebSocket is now closed.
      t.equal(ws.readyState, 3);
      t.end();
    });
    // Open the WebSocket connection.
    ws.open();
    // Reply to the login request.
    ws.reply({error: 'redirection required'});
    // Reply to the redirectInfo request.
    ws.reply({response: {
      'ca-cert': 'mycert',
      'servers': [[{
        value: '1.2.3.4',
        port: 17070,
        type: 'ipv4',
        scope: 'public'
      }, {
        value: 'example.com',
        port: 443,
        type: 'hostname',
        scope: 'public'
      }]]
    }});
    // Open the new WebSocket connection.
    ws.open();
    // Reply to the new login request.
    ws.reply({});
  });

  t.test('login success', t => {
    const creds = {user: 'who', password: 'tardis'};
    jujulib.connectAndLogin(url, creds, options, (err, conn, logout) => {
      t.equal(err, null);
      t.notEqual(conn, null);
      t.notEqual(logout, null);
      logout();
      // The WebSocket is now closed.
      t.equal(ws.readyState, 3);
      t.end();
    });
    // Open the WebSocket connection.
    ws.open();
    // Reply to the login request.
    ws.reply({});
  });

  t.end();
});
