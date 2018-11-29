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
  makeConnectionWithResponse(t, options, {}, callback);
}

/**
  Create a Juju connection with the given options and provide it to the given
  callback. When logging in, the simulated server side automatically returns
  the appropriate response.

  @param {Object} t The test object.
  @param {Object} options The connect options.
  @param {Object} loginResponse The response to be returned during the juju
    login over the websocket. The object value provided here will be merged with
    the default response allowing you to provide custom values for top level keys
    like 'facades'.
  @param {Function} callback Called when the connection is ready passing the
    connection itself and the WebSocket instance.
*/
function makeConnectionWithResponse(t, options, loginResponse, callback) {
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
    replyToLogin(ws, loginResponse);
  });
  // Open the WebSocket connection.
  ws.open();
}

/**
  Call `reply` on the supplied websocket instance passing it the defaultLoginResponse
  merged with the supplied loginResponse, if any.
  @param {Object} ws The mock WebSocket instance to reply on.
  @param {Object} loginResponse The response to be returned during the juju
    login over the websocket. The object value provided here will be merged with
    the default response allowing you to provide custom values for top level keys
    like 'facades'.
*/
function replyToLogin(ws, loginResponse) {
  const mergedLoginResponse = Object.assign(defaultLoginResponse, loginResponse);
  ws.reply({response: mergedLoginResponse});
}


const defaultLoginResponse = {
  'controller-tag': 'controller-76b9c391-12be-47fc-8406-c31f2db68ee5',
  'model-tag': 'model-c36a62d0-a17a-484e-87bf-a09d1b403627',
  'server-version': '2.42.47',
  'user-info': {
    credentials: 'creds',
    'display-name': 'who',
    identity: 'user-who@gallifrey',
    'last-connection': '2018-06-06T01:02:13Z',
    'controller-access': 'timelord',
    'model-access': 'admin'
  },
  facades: [{
    name: 'AllModelWatcher', versions: [1]
  }, {
    name: 'AllWatcher', versions: [0]
  }, {
    name: 'Application', versions: [7]
  }, {
    name: 'Client', versions: [2, 3]
  }, {
    name: 'Controller', versions: [3, 4, 5]
  }, {
    name: 'MyFacade', versions: [1, 7]
  }]
};


/**
  Define a base class for test facades.
*/
class BaseFacade {
  constructor(transport, info) {
    this._transport = transport,
    this._info = info;
    // This is JavaScript: implicit type conversion for the win.
    this.version = +this.constructor.name.slice(-1);
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
    this.responses = [];
    this._queuedResponses = new Map();

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
    this.readyState = 3;
    this.onclose({reason: reason});
  }

  message(msg) {
    this.onmessage({data: msg});
  }

  send(msg) {
    this.lastRequest = JSON.parse(msg);
    this.requests.push(this.lastRequest);
    this._autoReply(this.lastRequest['request-id']);
  }

  _autoReply(requestId) {
    if (this._queuedResponses.has(requestId)) {
      const response = this._queuedResponses.get(requestId);
      response['request-id'] = requestId;
      this.reply(response);
    }
  }

  /**
    Reply to requests from the WebSocket.
    @param {Object} resp - The response for the request in a JSON.stringify-able
      format.
  */
  reply(resp) {
    if (resp['request-id'] === undefined) {
      if (this.lastRequest === null) {
        throw new Error('cannot reply as no requests were received');
      }
      resp['request-id'] = this.lastRequest['request-id'];
    }
    this.responses.push(resp);
    this.onmessage({data: JSON.stringify(resp)});
  }

  /**
    Queue up a number of response values for upcoming requests.
    @param {Map} responses - The response values as a map where the Id is the
      request-id and the value is the response value. The response value does
      not need to include the `request-id` key.
  */
  queueResponses(responses) {
    this._queuedResponses = responses;
  }
};


/**
  Create and return a mock bakery instance.

  @param {Boolean} succeeding Whether the simulated discharge succeeds.
  @returns {Object} The mock bakery instance.
*/
function makeBakery(succeeding) {
  return {
    discharge: (macaroon, onSuccess, onFailure) => {
      if (succeeding) {
        onSuccess(['m1', 'm2']);
        return;
      }
      onFailure('bad wolf');
    }
  };
}


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
  BaseFacade,
  makeBakery,
  makeConnection,
  makeConnectionWithResponse,
  makeWSClass,
  requestEqual,
  replyToLogin
};
