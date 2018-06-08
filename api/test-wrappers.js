// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';


const tap = require('tap');

const helpers = require('./test-helpers.js');
const wrappers = require('./wrappers.js');


tap.test('wrapAllWatcher', t => {
  class AllWatcherV0 extends helpers.BaseFacade{};
  const options = {facades: [wrappers.wrapAllWatcher(AllWatcherV0)]};

  t.test('next success', t => {
    helpers.makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher;
      const watcherId = 42;
      allWatcher.next(watcherId, (err, result) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'AllWatcher',
          request: 'Next',
          version: 0
        });
        t.equal(ws.lastRequest.id, watcherId);
        t.equal(err, null);
        t.deepEqual(result, {
          'deltas': [{
            entity: {name: 'app1'}, removed: true
          }, {
            entity: {name: 'machine2'}, removed: false
          }]
        });
        t.end();
      });
      // Reply to the next request.
      ws.reply({response: {
        deltas: [{
          entity: {name: 'app1'}, removed: true
        }, {
          entity: {name: 'machine2'}, removed: false
        }]
      }});
    });
  });

  t.test('next failure', t => {
    helpers.makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher;
      const watcherId = 42;
      allWatcher.next(watcherId, (err, result) => {
        t.equal(err, 'bad wolf');
        t.deepEqual(result, {});
        t.end();
      });
      // Reply to the next request.
      ws.reply({error: 'bad wolf'});
    });
  });

  t.test('stop success', t => {
    helpers.makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher;
      const watcherId = 42;
      allWatcher.stop(watcherId, (err, result) => {
        helpers.requestEqual(t, ws.lastRequest, {
          type: 'AllWatcher',
          request: 'Stop',
          version: 0
        });
        t.equal(ws.lastRequest.id, watcherId);
        t.equal(err, null);
        t.deepEqual(result, {});
        t.end();
      });
      // Reply to the next request.
      ws.reply({response: {}});
    });
  });

  t.test('stop failure', t => {
    helpers.makeConnection(t, options, (conn, ws) => {
      const allWatcher = conn.facades.allWatcher;
      const watcherId = 42;
      allWatcher.stop(watcherId, (err, result) => {
        t.equal(err, 'bad wolf');
        t.deepEqual(result, {});
        t.end();
      });
      // Reply to the next request.
      ws.reply({error: 'bad wolf'});
    });
  });

  t.end();
});


tap.test('wrapClient', t => {

  t.test('watch success', t => {
    class ClientV3 extends helpers.BaseFacade{
      watchAll(callback) {
        callback(null, {watcherId: 47});
      }
    };
    class AllWatcherV0 extends helpers.BaseFacade{};
    const options = {facades: [
      wrappers.wrapClient(ClientV3),
      wrappers.wrapAllWatcher(AllWatcherV0)
    ]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client;
      let callCount = 0;
      client.watch((err, result) => {
        t.equal(err, null);
        callCount += 1;
        switch(callCount) {
          case 1:
            t.deepEqual(result, {
              'deltas': [{
                entity: {name: 'app1'}, removed: true
              }, {
                entity: {name: 'machine2'}, removed: false
              }]
            });
            break;
          case 2:
            t.deepEqual(result, {
              'deltas': [{
                entity: {name: 'app2'}, removed: false
              }]
            });
            t.end();
            break;
        }
      });
      // Reply to next requests.
      ws.reply({response: {
        deltas: [{
          entity: {name: 'app1'}, removed: true
        }, {
          entity: {name: 'machine2'}, removed: false
        }]
      }});
      ws.reply({response: {
        deltas: [{
          entity: {name: 'app2'}, removed: false
        }]
      }});
    });
  });

  t.test('watch failure allWatcher not found', t => {
    class ClientV3 extends helpers.BaseFacade{};
    const options = {facades: [
      wrappers.wrapClient(ClientV3),
    ]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client;
      client.watch((err, result) => {
        // helpers.requestEqual(t, ws.lastRequest, {
        //   type: 'AllWatcher',
        //   request: 'Next',
        //   version: 0
        // });
        // t.equal(ws.lastRequest.id, watcherId);
        t.equal(err, 'watch requires the allWatcher facade to be loaded');
        t.deepEqual(result, {});
        // Only the login request has been made, no other requests.
        t.deepEqual(ws.requests.length, 1);
        t.end();
      });
    });
  });

  t.test('watch failure on initial watch request', t => {
    class ClientV3 extends helpers.BaseFacade{
      watchAll(callback) {
        callback('bad wolf', {});
      }
    };
    class AllWatcherV0 extends helpers.BaseFacade{};
    const options = {facades: [
      wrappers.wrapClient(ClientV3),
      wrappers.wrapAllWatcher(AllWatcherV0)
    ]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client;
      client.watch((err, result) => {
        t.equal(err, 'bad wolf');
        t.deepEqual(result, {});
        t.end();
      });
    });
  });

  t.test('watch failure on next request', t => {
    class ClientV3 extends helpers.BaseFacade{
      watchAll(callback) {
        callback(null, {watcherId: 47});
      }
    };
    class AllWatcherV0 extends helpers.BaseFacade{};
    const options = {facades: [
      wrappers.wrapClient(ClientV3),
      wrappers.wrapAllWatcher(AllWatcherV0)
    ]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const client = conn.facades.client;
      client.watch((err, result) => {
        t.equal(err, 'bad wolf');
        t.deepEqual(result, {});
        t.end();
      });
      // Reply to the next request.
      ws.reply({error: 'bad wolf'});
    });
  });

  t.end();
});


tap.test('wrapPinger', t => {

  t.test('pingForever success', t => {
    class MyFacadeV7 extends helpers.BaseFacade{
      ping(callback) {
        callback(null, {});
      }
    };
    const options = {facades: [wrappers.wrapPinger(MyFacadeV7)]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const pinger = conn.facades.myFacade;
      const interval = 50;
      let callCount = 0;
      const handle = pinger.pingForever(interval, err => {
        callCount += 1;
        t.equal(err, null);
      });
      setTimeout(() => {
        handle.stop();
        t.equal(callCount, 4);
        t.end();
        // Add more milliseconds for making sure the request is received.
      }, interval*4+(interval-1));
    });
  });

  t.test('pingForever failure', t => {
    class MyFacadeV7 extends helpers.BaseFacade{
      ping(callback) {
        callback('bad wolf', {});
      }
    };
    const options = {facades: [wrappers.wrapPinger(MyFacadeV7)]};
    helpers.makeConnection(t, options, (conn, ws) => {
      const pinger = conn.facades.myFacade;
      const interval = 50;
      let callCount = 0;
      const handle = pinger.pingForever(interval, err => {
        callCount += 1;
        t.equal(err, 'bad wolf');
      });
      setTimeout(() => {
        handle.stop();
        t.equal(callCount, 1);
        t.end();
        // Add more milliseconds for making sure the request is received.
      }, interval+(interval-1));
    });
  });

  t.end();
});
