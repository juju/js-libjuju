// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';


const jujulib = require('./client.js');


/**
  Create a Juju connection with the given options and provide it to the given
  callback.

  @param {Object} t The test object.
  @param {Object} options The connect options.
  @param {Function} callback Called when the connection is ready passing the
    connection itself and the WebSocket instance.
*/
function makeConnection(t, options, callback) {
  let ws;
  options.wsclass = makeWSClass(instance => {
    ws = instance;
  });
  jujulib.connect('wss://1.2.3.4', options, (err, juju) => {
    t.equal(err, null, 'err');
    t.notEqual(juju, null, 'juju');
    juju.login({user: 'who', password: 'secret'}, (err, conn) => {
      t.equal(err, null, 'login err');
      t.notEqual(conn, null, 'conn');
      callback(conn, ws);
    });
    // Reply to the login request.
    ws.reply({response: loginResponse});
  });
  // Open the WebSocket connection.
  ws.open();
}


const loginResponse = {
  'controller-tag': 'controller-76b9c391-12be-47fc-8406-c31f2db68ee5',
  'model-tag': 'model-c36a62d0-a17a-484e-87bf-a09d1b403627',
  'server-version': '2.42.47',
  'user-info': {
     'display-name': 'who',
     identity: 'user-who@gallifrey',
     'last-connection': '2018-06-06T01:02:13Z',
     'controller-access': 'timelord',
     'model-access': 'admin'
  },
  facades: [{
    name: 'FacadeA', versions: [2, 3]
  }, {
    name: 'FacadeB', versions: [0]
  }, {
    name: 'FacadeC', versions: [1, 7]
  }]
};


/**
  Define a base class for test facades.
*/
class BaseFacade {
  constructor(transport, info) {
    this.transport = transport,
    this.info = info;
  }
}


/**
  Create and return a WebSocket class for testing that executes the given
  init function passing the instance once available.

  @param {Function} init A function receiving the WebSocket instance.
*/
function makeWSClass(init) {
  return WebSocket.bind(null, init);
}


/**
  Implement the WebSocket W3C browser API for testing.
*/
class WebSocket {

  constructor(init, url) {
    this.url = url;
    this.readyState = 0;
    this.requests = [];

    this.lastRequest = null;
    init(this);
  }

  onopen() {}
  onclose() {}
  onmessage() {}

  open() {
    this.readyState = 1;
    this.onopen();
  }

  close(reason) {
    this.onclose({reason: reason});
  }

  message(msg) {
    this.onmessage({data: msg});
  }

  send(msg) {
    this.lastRequest = JSON.parse(msg);
    this.requests.push(this.lastRequest);
  }

  reply(resp) {
    if (this.lastRequest === null) {
      throw new Error('cannot reply as no requests were received');
    }
    resp['request-id'] = this.lastRequest['request-id'];
    this.onmessage({data: JSON.stringify(resp)});
  }

};


/**
  Check that the two requests equal.

  @param {Object} t The test object.
  @param {Object} got and want The obtained and expected requests.
*/
function requestEqual(t, got, want) {
  t.notEqual(got['request-id'], null, 'requestEqual request-id');
  t.equal(got.type, want.type, 'requestEqual type');
  t.equal(got.request, want.request, 'requestEqual request');
  t.deepEqual(got.params, want.params, 'requestEqual params');
  t.equal(got.version, want.version, 'requestEqual version');
}


module.exports = {
  BaseFacade: BaseFacade,
  makeConnection: makeConnection,
  makeWSClass: makeWSClass,
  requestEqual: requestEqual
};
