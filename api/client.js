// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

/**
  This library is the JavaScript Juju API client. Use the connect function to
  get access to the API. Provide your required facade classes in options, like:

    const facades = [
      require('../output/all-watcher-v1.js'),
      require('../output/application-v5.js'),
      require('../output/client-v1.js'),
      require('../output/pinger-v1.js')
    ];
    jujulib.connect('wss://example.com', {facades: facades}, (err, juju) => {
      if (err) {
        console.log(err);
        return;
      }
      juju.login({user: 'user-admin', password: 'aaa'}, (err, conn) => {
        if (err) {
            console.log(err);
            return;
        }
        const client = conn.facades.client;
        const handle = client.watch((err, result) => {
          if (err) {
            console.log('cannot watch model:', err);
            return;
          }
          console.log(result);
        });
        setTimeout(handle.stop, 5000);
      });
    });
*/

'use strict';

/**
  Connect to the Juju controller or model at the given URL.

  @param {String} url The WebSocket URL of the Juju controller or model.
  @param {Object} options Connections options, including:
    - facades (default=[]): the list of facade classes to include in the API
      connection object. Those classes are usually auto-generated and can be
      found in the facades directory of the project. When multiple versions of
      the same facade are included, the most recent version supported by the
      server is made available as part of the connection object;
    - debug (default=false): when enabled, all API messages are logged at debug
      level;
    - wsclass (default=W3C browser native WebSocket): the WebSocket class to use
      for opening the connection and sending/receiving messages. Server side,
      require('websocket').w3cwebsocket can be used safely, as it implements the
      W3C browser native WebSocket API;
    - adminFacadeVersion (default=3): the admin facade version;
    - closeCallback: a callback to be called with the exit code when the
      connection is closed.
  @param {Function} callback Called when the connection is made, the callback
    receives an error and a client object. If there are no errors, the client
    can be used to login and logout to Juju. See the docstring for the Client
    class for information on how to use the client.
*/
function connect(url, options={}, callback) {
  if (!options.adminFacadeVersion) {
    options.adminFacadeVersion = 3;
  }
  if (!options.closeCallback) {
    options.closeCallback = () => {};
  }
  if (!options.debug) {
    options.debug = false;
  }
  if (!options.facades) {
    options.facades = [];
  }
  if (!options.wsclass) {
    options.wsclass = window.WebSocket;
  }
  // Instantiate the WebSocket, and make the client available when the
  // connection is open.
  const ws = new options.wsclass(url);
  ws.onopen = evt => {
    callback(null, new Client(ws, options));
  };
  ws.onclose = evt => {
    callback('cannot connect WebSocket: ' + evt.reason, null);
  };
}


/**
  A Juju API client allowing for logging in and get access to facades.

  @param {Object} ws The WebSocket instance already connected to a Juju
    controller or model.
  @param {Object} options Connections options. See the connect documentation
    above for a description of available options.
*/
class Client {

  constructor(ws, options) {
    // Instantiate the transport, used for sending messages to the server.
    this._transport = new Transport(ws, options.closeCallback, options.debug);
    this._facades = options.facades;
    this._adminFacadeVersion = options.adminFacadeVersion;
  }

  /**
    Log in to Juju.

    @param {Object} credentials An object with the user and password fields for
      userpass authentication or the macaroons field for bakery authentication.
    @param {Function} callback Called when the login process completes, the
      callback receives an error and a connection object. If there are no
      errors, the connection can be used to send/receive messages to and from
      the Juju controller or model, and to get access to the available facades
      (through conn.facades). See the docstring for the Connection class for
      information on how to use the connection instance.
  */
  login(credentials, callback) {
    // TODO(frankban): support bakery auth.
    // TODO(frankban): support redirections when connecting to models.
    const req = {
      type: 'Admin',
      request: 'Login',
      params: {
        'auth-tag': credentials.user,
        credentials: credentials.password
      },
      version: this._adminFacadeVersion
    };
    this._transport.write(req, (err, resp) => {
      if (err) {
        callback(err, null);
        return;
      }
      const conn = new Connection(this._transport, this._facades, resp);
      callback(null, conn);
    });
  }

  /**
    Log out from Juju.

    @param {Function} callback Called when the logout process completes and the
      connection is closed, the callback receives the close code and optionally
      another callback. It is responsibility of the callback to call the
      provided callback if present.
  */
  logout(callback) {
    this._transport.close(callback);
  }

}


/**
  A transport providing the ability of sending and receiving WebSocket messages
  to and from Juju controllers and models.

  @param {Object} ws The WebSocket instance already connected to a Juju
    controller or model.
  @param {Function} closeCallback A callback to be called after the transport
    closes the connection. The callback receives the close code.
  @param {Boolean} debug When enabled, all API messages are logged at debug
    level.
*/
class Transport {

  constructor(ws, closeCallback, debug) {
    this._ws = ws;
    this._counter = 0;
    this._callbacks = {};
    this._closeCallback = closeCallback;
    this._debug = debug;
    ws.onmessage = evt => {
      if (this._debug) {
        console.debug('<--', evt.data);
      }
      this._handle(evt.data);
    };
    ws.onclose = evt => {
      if (this._debug) {
        console.debug('close:', evt.code, evt.reason);
      }
      this._closeCallback(evt.code);
    };
  }

  /**
    Send a message to Juju.

    @param {Object} req A Juju API request, typically in the form of an object
      like {type: 'Client', request: 'DoSomething', version: 1, params: {}}. The
      request must not be already serialized and must not include the request
      id, as those are responsibilities of the transport.
    @param {Function} callback Called when the response to the given request is
      ready, the callback receives an error and the response result from Juju.
  */
  write(req, callback) {
    // Check that the connection is ready and sane.
    const state = this._ws.readyState;
    if (state !== 1) {
      const reqStr = JSON.stringify(req);
      if (callback) {
        callback(
          `cannot send request ${reqStr}: ` +
          `connection state ${state} is not open`);
      }
      return;
    }
    // Include the current request id in the request.
    this._counter += 1;
    req['request-id'] = this._counter;
    this._callbacks[this._counter] = callback;
    const msg = JSON.stringify(req);
    if (this._debug) {
      console.debug('-->', msg);
    }
    // Send the request to Juju.
    this._ws.send(msg);
  }

  /**
    Close the transport, and therefore the connection.

    @param {Function} callback Called after the transport is closed, the
      callback receives the close code and optionally another callback. It is
      responsibility of the callback to call the provided callback if present.
  */
  close(callback) {
    const closeCallback = this._closeCallback;
    this._closeCallback = code => {
      callback(code, closeCallback);
    };
    this._ws.close();
  }

  /**
    Handle responses arriving from Juju.

    @param {String} data: the raw response from Juju, usually as a JSON encoded
      string.
  */
  _handle(data) {
    const resp = JSON.parse(data);
    const id = resp['request-id'];
    const callback = this._callbacks[id];
    delete this._callbacks[id];
    if (callback) {
      callback.call(this, resp.error || null, resp.response || {});
    }
  }

}


/**
  A connection to a Juju controller or model. This is the object users use to
  perform Juju API calls, as it provides access to all available facades
  (conn.facades), to a transport connected to Juju (conn.transport) and to
  information about the connected Juju server (conn.info).

  @param {Object} transport The Transport instance used to communicate with
    Juju. The transport is available exposed to users via the transport property
    of the connection instance. See the Transport docstring for information on
    how to use the transport (typically calling transport.write).
  @param {Object} facades The facade classes provided in the facades property of
    the options provided to the connect function. When the connection is
    instantiated, the matching available facades as declared by Juju are
    instantiated and access to them is provided via the facades property of the
    connection.
  @param {Object} loginResp The response to the Juju login request. The response
    includes information about the Juju server and available facades. This info
    is made available via the info property of the connection instance.
*/
class Connection {

  constructor(transport, facades, loginResp) {
    // Store the transport used for sending messages to Juju.
    this.transport = transport;

    // Populate info.
    const userInfo = loginResp['user-info'] || {};
    this.info = {
      controllerTag: loginResp['controller-tag'] || '',
      modelTag: loginResp['model-tag'] || '',
      serverVersion: loginResp['server-version'] || '',

      user: {
        displayName: userInfo['display-name'] || '',
        identity: userInfo['identity'] || '',
        lastConnection: userInfo['last-connection'] || '',
        // TODO(frankban): expose an ACL object using access info, so that
        // it's more user friendly.
        controllerAccess: userInfo['controller-access'] || '',
        modelAccess: userInfo['model-access'] || ''
      },

      getFacade: name => {
        return this.facades[name];
      }
    };

    // Handle facades.
    const respFacades = loginResp.facades || [];
    const registered = facades.reduce((previous, current) => {
      previous[current.name] = current;
      return previous;
    }, {});
    this.facades = respFacades.reduce((previous, current) => {
      for (let i = current.versions.length-1; i >= 0; i--) {
        const className = current.name + 'V' + current.versions[i];
        const facadeClass = registered[className];
        if (facadeClass) {
          const facadeName = uncapitalize(current.name);
          previous[facadeName] = new facadeClass(this.transport, this.info);
          return previous;
        }
      }
      return previous;
    }, {});
  }

}


/**
  Convert ThisString to thisString.

  @param {String} string A StringLikeThis.
  @return {String} A stringLikeThis.
*/
function uncapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


module.exports = {connect: connect};
