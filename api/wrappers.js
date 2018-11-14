// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

/**
  This module includes wrappers for auto-generated API facade classes.

  Wrappers are class decorators, accepting a facade class and returning a
  modified, improved version of the facade. Wrappers are useful when the
  auto-generated facade includes ugly or difficult to use calls. A wrapper can
  extend or override the method set for facades to make the resulting API more
  user friendly.

  Nothing must be done in order to activate wrappers, as they are automatically
  loaded by auto-generated modules.

  IMPORTANT: when implementing new wrappers, please expand the documentation
  present at templates/wrappers.md. Also ensure updates are consistent with the
  existing structure of that document, because its content is further processed
  when automatically generating the documentation.
*/

'use strict';

const {createAsyncHandler} = require('./transform.js');

/**
  Decorate the Admin facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapAdmin(cls) {

  /**
    RedirectInfo returns redirected host information for the model. In Juju it
    always returns an error because the Juju controller does not multiplex
    controllers.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          servers: []{
            value: string,
            type: string,
            scope: string,
            port: string
          },
          caCert: string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.redirectInfo = function(callback) {
    // This is overridden as the auto-generated version does not work with
    // current JAAS, because the servers passed to the callback do not
    // correspond to the ones declared in the API.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: 'Admin',
        request: 'RedirectInfo',
        version: this.version,
        params: {}
      };
      // Allow for js-friendly responses.
      const transform = resp => {
        const servers = [];
        resp.servers.forEach(srvs => {
          srvs.forEach(srv => {
            const server = {
              value: srv.value,
              port: srv.port,
              type: srv.type,
              scope: srv.scope,
              url: uuidOrURL => {
                let uuid = uuidOrURL;
                if (uuid.startsWith('wss://') || uuid.startsWith('ws://')) {
                  const parts = uuid.split('/');
                  uuid = parts[parts.length - 2];
                }
                return `wss://${srv.value}:${srv.port}/model/${uuid}/api`;
              }
            };
            servers.push(server);
          });
        });
        return {caCert: resp['ca-cert'], servers: servers};
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  };

  return cls;
}


/**
  Decorate the AllModelWatcher facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapAllModelWatcher(cls) {

  /**
    Ask for next watcher messages corresponding to changes in the models.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Controller.watchAllModels API call.
    @param {Function} callback Called when the next messages arrive, the
      callback receives an error and the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.next = function(watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: 'AllModelWatcher',
        request: 'Next',
        version: this.version,
        id: watcherId
      };
      // Allow for js-friendly responses.
      const transform = resp => {
        resp = resp || {};
        return {deltas: resp.deltas || []};
      };
      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  };

  /**
    Stop watching all models.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Controller.watchAllModels API call.
    @param {Function} callback Called after the watcher has been stopped, the
      callback receives an error.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.stop = function(watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: 'AllModelWatcher',
        request: 'Stop',
        version: this.version,
        id: watcherId
      };
      const handler = createAsyncHandler(callback, resolve, reject, null);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  };

  return cls;
}


/**
  Decorate the AllWatcher facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapAllWatcher(cls) {

  /**
    Ask for next watcher messages corresponding to changes in the model.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param {Function} callback Called when the next messages arrive, the
      callback receives an error and the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.next = function(watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: 'AllWatcher',
        request: 'Next',
        version: this.version,
        id: watcherId
      };
      // Allow for js-friendly responses.
      const transform = resp => {
        resp = resp || {};
        return {deltas: resp.deltas || []};
      };
      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  };

  /**
    Stop watching the model.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param {Function} callback Called after the watcher has been stopped, the
      callback receives an error.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.stop = function(watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: 'AllWatcher',
        request: 'Stop',
        version: this.version,
        id: watcherId
      };
      const handler = createAsyncHandler(callback, resolve, reject, null);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  };

  return cls;
}


/**
  Decorate the Application facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapApplication(cls) {

  /**
    Add a charm store charm to the model and then deploy the application.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          charmUrl: string,
          application: string,
          series: string,
          channel: string,
          numUnits: int,
          config: map[string]string,
          configYaml: string,
          constraints: {
            arch: string,
            container: string,
            cores: int,
            cpuPower: int,
            mem: int,
            rootDisk: int,
            tags: []string,
            instanceType: string,
            spaces: []string,
            virtType: string
          },
          placement: []{
            scope: string,
            directive: string
          },
          policy: string,
          storage: map[string]{
            pool: string,
            size: int,
            count: int
          },
          attachStorage: []string,
          endpointBindings: map[string]string,
          resources: map[string]string
        }
      The charmUrl, application and series (for multi-series charm) arguments
      are required.
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no connection
      errors, the deployment result is provided as an object like:
        {
          error: {
            message: string,
            code: string,
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.addCharmAndDeploy = function(args, callback) {
    return new Promise((resolve, reject) => {
      const handler = createAsyncHandler(callback, resolve, reject, null);
      const client = this._info.getFacade('client');
      if (!client) {
        handler('addCharmAndDeploy requires the client facade to be loaded', {});
        return;
      }
      // Add the charm.
      client.addCharm({url: args.charmUrl, channel: args.channel}, err => {
        if (err) {
          handler(err, {});
          return;
        }
        // Deploy the application.
        this.deploy({applications: [args]}, (err, result) => {
          if (err) {
            handler(err, {});
            return;
          }
          handler(null, result.results[0]);
        });
      });
    });
  };

  return cls;
}


/**
  Decorate the Client facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapClient(cls) {

  /**
    Add a new machine to the model.

    @param {Object} args Arguments fot creating a machine, like the following:
        {
          series: string,
          constraints: {
            arch: string,
            container: string,
            cores: int,
            cpuPower: int,
            mem: int,
            rootDisk: int,
            tags: []string,
            instanceType: string,
            spaces: []string,
            virtType: string
          },
          jobs: []string,
          disks: []{
            pool: string,
            size: int,
            count: int
          },
          placement: {
            scope: string,
            directive: string
          },
          parentId: string,
          containerType: string,
          instanceId: string,
          nonce: string,
          hardwareCharacteristics: {
            arch: string,
            mem: int,
            rootDisk: int,
            cpuCores: int,
            cpuPower: int,
            tags: []string,
            availabilityZone: string
          },
          addresses: []{
            value: string,
            type: string,
            scope: string,
            spaceName: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          machine: string,
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.addMachine = function(args, callback) {
    return new Promise((resolve, reject) => {
      const handler = createAsyncHandler(callback, resolve, reject, null);
      if (!args.jobs) {
        args.jobs = ['JobHostUnits'];
      }
      this.addMachines({params: [args]}, (err, result) => {
        if (!callback) {
          return;
        }
        if (err) {
          handler(err, {});
          return;
        }
        handler(null, result.machines[0]);
      });
    });
  };

  /**
    Watch changes in the current model, and call the provided callback every
    time changes arrive.

    This method requires the AllWatcher facade to be loaded and available to the
    client.

    @param {Function} callback Called every time changes arrive from Juju, the
      callback receives an error and a the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @returns {Object} A handle that can be used to stop watching, via its stop
      method which can be provided a callback receiving an error.
  */
 cls.prototype.watch = function(callback) {
  if (!callback) {
    callback = () => {};
  }
  // Check that the AllWatcher facade is loaded, as we will use it.
  const allWatcher = this._info.getFacade('allWatcher');
  if (!allWatcher) {
    callback('watch requires the allWatcher facade to be loaded', {});
    return;
  }
  let watcherId;
  // Define a function to repeatedly ask for next changes.
  const next = callback => {
    if (!watcherId) {
      return;
    }
    allWatcher.next(watcherId, (err, result) => {
      callback(err, result);
      next(callback);
    });
  };
  // Start watching.
  this.watchAll((err, result) => {
    if (err) {
      callback(err, {});
      return;
    }
    watcherId = result.watcherId;
    next(callback);
  });
  // Return the handle allowing for stopping the watcher.
  return {
    stop: callback => {
      if (watcherId === undefined) {
        callback('watcher is not running', {});
        return;
      }
      allWatcher.stop(watcherId, callback);
      watcherId = undefined;
    }
  };
};

  return cls;
}


/**
  Decorate the Controller facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapController(cls) {

  /**
    Watch changes in the all models on this controller, and call the provided
    callback every time changes arrive.

    This method requires the AllModelWatcher facade to be loaded and available
    to the client.

    @param {Function} callback Called every time changes arrive from Juju, the
      callback receives an error and a the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @returns {Object} A handle that can be used to stop watching, via its stop
      method which can be provided a callback receiving an error.
  */
  cls.prototype.watch = function(callback) {
    if (!callback) {
      callback = () => {};
    }
    // Check that the AllModelWatcher facade is loaded, as we will use it.
    const allModelWatcher = this._info.getFacade('allModelWatcher');
    if (!allModelWatcher) {
      callback('watch requires the allModelWatcher facade to be loaded', {});
      return;
    }
    let watcherId;
    // Define a function to repeatedly ask for next changes.
    const next = callback => {
      if (!watcherId) {
        return;
      }
      allModelWatcher.next(watcherId, (err, result) => {
        callback(err, result);
        next(callback);
      });
    };
    // Start watching.
    this.watchAllModels((err, result) => {
      if (err) {
        callback(err, {});
        return;
      }
      watcherId = result.watcherId;
      next(callback);
    });
    // Return the handle allowing for stopping the watcher.
    return {
      stop: callback => {
        if (watcherId === undefined) {
          callback('watcher is not running', {});
          return;
        }
        allModelWatcher.stop(watcherId, callback);
        watcherId = undefined;
      }
    };
  };

  return cls;
}


/**
  Decorate the Pinger facade class.

  @param {Object} cls The auto-generated class.
  @returns {Object} The decorated class.
*/
function wrapPinger(cls) {

  /**
    Start pinging repeatedly with the give interval.

    This can be useful for preventing proxies to close a connection to Juju due
    to inactivity.

    @param {Integer} interval Milliseconds between pings.
    @param {Function} callback Called every time a pong is received from the
      server, the callback receives an error.
    @returns {Object} A handle that can be used to stop pinging via its stop
      method.
  */
  cls.prototype.pingForever = function(interval, callback) {
    const timer = setInterval(() => {
      this.ping(err => {
        if (callback) {
          callback(err);
        }
      });
    }, interval);
    return {
      stop: function() {
        clearInterval(timer);
      }
    };
  };

  return cls;
}


module.exports = {
  wrapAdmin,
  wrapAllModelWatcher,
  wrapAllWatcher,
  wrapApplication,
  wrapClient,
  wrapController,
  wrapPinger
};
