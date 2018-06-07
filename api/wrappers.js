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
*/

'use strict';


/**
  Decorate the AllWatcher facade class.

  @param {Object} cls The auto-generated class.
  @return {Object} The decorated class.
*/
function wrapAllWatcher(cls) {

  /**
    Ask for next watcher messages corresponding to changes in the model.

    This method is overridden as the auto-generated one does not include the
    watcherId parameter, as a result of the peculiarity of the call, which does
    not assume the id to be in parameters, but as a top level field.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param {Function} callback: a callback called when the next messages arrive.
      The callback receives an error and the changes. If there are no errors, 
      changes are provided as an object like the following:
        {
          deltas: []{
            entity: {
              
            } (required),
            removed: boolean (required)
          } (required)
        }
  */
  cls.prototype.next = function(watcherId, callback) {
    // Prepare the request to the Juju API.
    const req = {
      type: 'AllWatcher',
      request: 'Next',
      version: 1,
      id: watcherId
    };
    // Send the request to the server.
    this._transport.write(req, (err, resp) => {
      if (!callback) {
        return;
      }
      if (err) {
        callback(err, {});
        return;
      }
      // Handle the response.
      const result = {};
      resp = resp || {};
      result.deltas = [];
      resp['deltas'] = resp['deltas'] || [];
      for (let i = 0; i < resp['deltas'].length; i++) {
        result.deltas[i] = {};
        resp['deltas'][i] = resp['deltas'][i] || {};
        result.deltas[i].entity = {};
        resp['deltas'][i]['entity'] = resp['deltas'][i]['entity'] || {};
        result.deltas[i].removed = resp['deltas'][i]['removed'];
      }
      callback(null, result);
    });
  };

  /**
    Stop watching the model.

    This method is overridden as the auto-generated one does not include the
    watcherId parameter, as a result of the peculiarity of the call, which does
    not assume the id to be in parameters, but as a top level field.

    @param {String} watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param {Function} callback: a callback called after the watcher has been 
      stopped. The callback receives an error.
  */
  cls.prototype.stop = function(watcherId, callback) {
    // Prepare the request to the Juju API.
    const req = {
      type: 'AllWatcher',
      request: 'Stop',
      version: 1,
      id: watcherId
    };
    // Send the request to the server.
    this._transport.write(req, (err, resp) => {
      if (!callback) {
        return;
      }
      callback(err, {});
    });
  };
  return cls;
}


/**
  Decorate the Client facade class.

  @param {Object} cls The auto-generated class.
  @return {Object} The decorated class.
*/
function wrapClient(cls) {

  /**
    Watch changes in the current model, and call the provided callback every 
    time changes arrive.

    This method requires the AllWatcher facade to be loaded and available to the
    client.

    @param {Function} callback: a callback called every time changes arrive from
      Juju. The callback receives an error and a the changes. If there are no 
      errors, changes are provided as an object like the following:
        {
          deltas: []{
            entity: {
              
            } (required),
            removed: boolean (required)
          } (required)
        }
    @return {Object} and handle that can be used to stop watching, via its stop
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
  Decorate the Pinger facade class.

  @param {Object} cls The auto-generated class.
  @return {Object} The decorated class.
*/
function wrapPinger(cls) {

  /**
    Start pinging repeatedly with the give interval.

    This can be useful for preventing proxies to close a connection to Juju due
    to inactivity.

    @param {Integer} interval Milliseconds between pings.
    @param {Function} callback: a callback called every time a pong is received
      from the server. The callback receives an error.
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
  wrapAllWatcher: wrapAllWatcher,
  wrapClient: wrapClient,
  wrapPinger: wrapPinger
};
