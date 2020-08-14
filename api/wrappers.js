// Copyright 2020 Canonical Ltd.
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

"use strict";

import { createAsyncHandler } from "./transform.js";

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
  */
  cls.prototype.redirectInfo = function () {
    // This is overridden as the auto-generated version does not work with
    // current JAAS, because the servers passed to the callback do not
    // correspond to the ones declared in the API.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: "Admin",
        request: "RedirectInfo",
        version: this.version,
        params: {},
      };

      const transform = (resp) => {
        // Flatten response to make it easier to work with.
        const servers = [];
        resp.servers.forEach((srvs) => {
          srvs.forEach((srv) => {
            const server = {
              value: srv.value,
              port: srv.port,
              type: srv.type,
              scope: srv.scope,
              url: (uuidOrURL) => {
                let uuid = uuidOrURL;
                if (uuid.startsWith("wss://") || uuid.startsWith("ws://")) {
                  const parts = uuid.split("/");
                  uuid = parts[parts.length - 2];
                }
                return `wss://${srv.value}:${srv.port}/model/${uuid}/api`;
              },
            };
            servers.push(server);
          });
        });
        return { "ca-cert": resp["ca-cert"], servers };
      };

      const handler = createAsyncHandler(null, resolve, reject, transform);
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
  cls.prototype.next = function (watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: "AllModelWatcher",
        request: "Next",
        version: this.version,
        id: watcherId,
      };
      // Allow for js-friendly responses.
      const transform = (resp) => {
        resp = resp || {};
        return { deltas: resp.deltas || [] };
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
  cls.prototype.stop = function (watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: "AllModelWatcher",
        request: "Stop",
        version: this.version,
        id: watcherId,
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
  cls.prototype.next = function (watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: "AllWatcher",
        request: "Next",
        version: this.version,
        id: watcherId,
      };
      // Allow for js-friendly responses.
      const transform = (resp) => {
        resp = resp || {};
        return { deltas: resp.deltas || [] };
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
  cls.prototype.stop = function (watcherId, callback) {
    // This method is overridden as the auto-generated one does not include the
    // watcherId parameter, as a result of the peculiarity of the call, which
    // does not assume the id to be in parameters, but as a top level field.
    return new Promise((resolve, reject) => {
      // Prepare the request to the Juju API.
      const req = {
        type: "AllWatcher",
        request: "Stop",
        version: this.version,
        id: watcherId,
      };
      const handler = createAsyncHandler(callback, resolve, reject, null);
      // Send the request to the server.
      this._transport.write(req, handler);
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
  cls.prototype.watch = function (callback) {
    if (!callback) {
      callback = () => {};
    }
    // Check that the AllWatcher facade is loaded, as we will use it.
    const allWatcher = this._info.getFacade("allWatcher");
    if (!allWatcher) {
      callback("watch requires the allWatcher facade to be loaded", {});
      return;
    }
    let watcherId;
    // Define a function to repeatedly ask for next changes.
    const next = (callback) => {
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
      stop: (callback) => {
        if (watcherId === undefined) {
          callback("watcher is not running", {});
          return;
        }
        allWatcher.stop(watcherId, callback);
        watcherId = undefined;
      },
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
  cls.prototype.watch = function (callback) {
    if (!callback) {
      callback = () => {};
    }
    // Check that the AllModelWatcher facade is loaded, as we will use it.
    const allModelWatcher = this._info.getFacade("allModelWatcher");
    if (!allModelWatcher) {
      callback("watch requires the allModelWatcher facade to be loaded", {});
      return;
    }
    let watcherId;
    // Define a function to repeatedly ask for next changes.
    const next = (callback) => {
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
      stop: (callback) => {
        if (watcherId === undefined) {
          callback("watcher is not running", {});
          return;
        }
        allModelWatcher.stop(watcherId, callback);
        watcherId = undefined;
      },
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
  cls.prototype.pingForever = function (interval, callback) {
    const timer = setInterval(() => {
      this.ping((err) => {
        if (callback) {
          callback(err);
        }
      });
    }, interval);
    return {
      stop: function () {
        clearInterval(timer);
      },
    };
  };

  return cls;
}

export {
  wrapAdmin,
  wrapAllModelWatcher,
  wrapAllWatcher,
  wrapClient,
  wrapController,
  wrapPinger,
};
