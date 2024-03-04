// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

/**
  This module contains versions of some hard to use api facade methods for
  convenience purposes.
*/

import type { Callback, CallbackError } from "../generator/interfaces";
import type PingerV1 from "./facades/pinger/PingerV1.js";
import { createAsyncHandler } from "./utils.js";

/**
  Decorate the Admin facade class.

  @param cls The auto-generated class.
  @returns The decorated class.
*/
function wrapAdmin(cls: any): object {
  /**
    RedirectInfo returns redirected host information for the model. In Juju it
    always returns an error because the Juju controller does not multiplex
    controllers.

    @param callback Called when the response from Juju is available,
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

      const transform = (resp: { [x: string]: any; servers: any[] }) => {
        // Flatten response to make it easier to work with.
        const servers: any = [];
        resp.servers.forEach((srvs: any) => {
          srvs.forEach((srv: any) => {
            const server = {
              value: srv.value,
              port: srv.port,
              type: srv.type,
              scope: srv.scope,
              url: (uuidOrURL: string) => {
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

      const handler = createAsyncHandler(undefined, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler.resolve, handler.reject);
    });
  };

  return cls;
}

/**
  Decorate the AllModelWatcher facade class.

  @param cls The auto-generated class.
  @returns The decorated class.
*/
function wrapAllModelWatcher(cls: any) {
  /**
    Ask for next watcher messages corresponding to changes in the models.

    @param watcherId The id of the currently used watcher. The id is
      retrieved by calling the Controller.watchAllModels API call.
    @param callback Called when the next messages arrive, the
      callback receives an error and the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @return Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.next = function (
    watcherId: string,
    callback: Callback<any>
  ): Promise<any> {
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
      const transform = (resp: any) => {
        resp = resp || {};
        return { deltas: resp.deltas || [] };
      };
      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler.resolve, handler.reject);
    });
  };

  /**
    Stop watching all models.

    @param watcherId The id of the currently used watcher. The id is
      retrieved by calling the Controller.watchAllModels API call.
    @param callback Called after the watcher has been stopped, the
      callback receives an error.
    @return Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.stop = function (
    watcherId: string,
    callback: Callback<any>
  ): Promise<any> {
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
      const handler = createAsyncHandler(callback, resolve, reject);
      // Send the request to the server.
      this._transport.write(req, handler.resolve, handler.reject);
    });
  };

  return cls;
}

/**
  Decorate the AllWatcher facade class.

  @param cls The auto-generated class.
  @returns The decorated class.
*/
function wrapAllWatcher(cls: any) {
  /**
    Ask for next watcher messages corresponding to changes in the model.

    @param watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param callback Called when the next messages arrive, the
      callback receives an error and the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @return Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.next = function (
    watcherId: string,
    callback: Callback<any>
  ): Promise<any> {
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
      const transform = (resp: any) => {
        resp = resp || {};
        return { deltas: resp.deltas || [] };
      };
      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler.resolve, handler.reject);
    });
  };

  /**
    Stop watching the model.

    @param watcherId The id of the currently used watcher. The id is
      retrieved by calling the Client.watchAll API call.
    @param callback Called after the watcher has been stopped, the
      callback receives an error.
    @return Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  cls.prototype.stop = function (
    watcherId: string,
    callback: Callback<any>
  ): Promise<any> {
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
      const handler = createAsyncHandler(callback, resolve, reject);
      // Send the request to the server.
      this._transport.write(req, handler.resolve, handler.reject);
    });
  };

  return cls;
}

/**
  Decorate the Client facade class.

  @param cls The auto-generated class.
  @returns The decorated class.
*/
function wrapClient(cls: any) {
  /**
    Watch changes in the current model, and call the provided callback every
    time changes arrive.

    This method requires the AllWatcher facade to be loaded and available to the
    client.

    @param callback Called every time changes arrive from Juju, the
      callback receives an error and a the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @returns A handle that can be used to stop watching, via its stop
      method which can be provided a callback receiving an error.
  */
  cls.prototype.watch = function (callback: Callback<any>): object | undefined {
    if (!callback) {
      callback = (_error: CallbackError, _result?: any) => {};
    }
    // Check that the AllWatcher facade is loaded, as we will use it.
    const allWatcher = this._info.getFacade("allWatcher");
    if (!allWatcher) {
      callback(new Error("watch requires the allWatcher facade to be loaded"));
      return;
    }
    let watcherId: any;
    // Define a function to repeatedly ask for next changes.
    const next = (callback: Callback<any>) => {
      if (!watcherId) {
        return;
      }
      allWatcher.next(watcherId, (error: CallbackError, result: any) => {
        callback(error, result);
        next(callback);
      });
    };
    // Start watching.
    this.watchAll((error: CallbackError, result: any) => {
      if (error) {
        callback(error);
        return;
      }
      watcherId = result.watcherId;
      next(callback);
    });
    // Return the handle allowing for stopping the watcher.
    return {
      stop: (callback: Callback<any>) => {
        if (watcherId === undefined) {
          callback(new Error("watcher is not running"));
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

  @param cls The auto-generated class.
  @returns The decorated class.
*/
function wrapController(cls: any) {
  /**
    Watch changes in the all models on this controller, and call the provided
    callback every time changes arrive.

    This method requires the AllModelWatcher facade to be loaded and available
    to the client.

    @param callback Called every time changes arrive from Juju, the
      callback receives an error and a the changes. If there are no errors,
      changes are provided as an object like the following:
        {
          deltas: []anything
        }
    @returns A handle that can be used to stop watching, via its stop
      method which can be provided a callback receiving an error.
  */
  cls.prototype.watch = function (callback: Callback<any>): object | undefined {
    if (!callback) {
      callback = (_error: CallbackError, _result?: any) => {};
    }
    // Check that the AllModelWatcher facade is loaded, as we will use it.
    const allModelWatcher: any = this._info.getFacade("allModelWatcher");
    if (!allModelWatcher) {
      callback(
        new Error("watch requires the allModelWatcher facade to be loaded")
      );
      return;
    }
    let watcherId: any;
    // Define a function to repeatedly ask for next changes.
    const next = (callback: Callback<any>) => {
      if (!watcherId) {
        return;
      }
      allModelWatcher.next(watcherId, (error: CallbackError, result: any) => {
        callback(error, result);
        next(callback);
      });
    };
    // Start watching.
    this.watchAllModels((error: CallbackError, result: any) => {
      if (error) {
        callback(error);
        return;
      }
      watcherId = result.watcherId;
      next(callback);
    });
    // Return the handle allowing for stopping the watcher.
    return {
      stop: (callback: Callback<any>) => {
        if (watcherId === undefined) {
          callback(new Error("watcher is not running"));
          return;
        }
        allModelWatcher.stop(watcherId, callback);
        watcherId = undefined;
      },
    };
  };

  return cls;
}

type StopFunction = () => void;
/**
  Ping repeatedly using the Pinger facade.

  @param PingerFacade - An instance of the Pinger facade.
  @param interval - How often would you like to ping? (ms).
  @param callback - The callback that gets called after each ping.
  @returns A function to call to stop the pinger.
*/
export function pingForever(
  PingerFacade: PingerV1,
  interval: number,
  callback: Callback<any>
): StopFunction {
  const timer = setInterval(async () => {
    const resp = await PingerFacade.ping(null);
    if (callback) {
      callback(resp);
    }
  }, interval);
  return () => {
    clearInterval(timer);
  };
}

export {
  wrapAdmin,
  wrapAllModelWatcher,
  wrapAllWatcher,
  wrapClient,
  wrapController,
};
