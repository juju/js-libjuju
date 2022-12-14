/**
  Juju KeyUpdater version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  KeyUpdaterAPI implements the KeyUpdater interface and is the concrete
  implementation of the api end point.
*/
class KeyUpdaterV1 implements Facade {
  static NAME = "KeyUpdater";
  static VERSION = 1;

  NAME = "KeyUpdater";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AuthorisedKeys reports the authorised ssh keys for the specified machines.
    The current implementation relies on global authorised keys being stored in the model config.
    This will change as new user management and authorisation functionality is added.
  */
  authorisedKeys(params: Entities): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyUpdater",
        request: "AuthorisedKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAuthorisedKeys starts a watcher to track changes to the authorised ssh keys
    for the specified machines.
    The current implementation relies on global authorised keys being stored in the model config.
    This will change as new user management and authorisation functionality is added.
  */
  watchAuthorisedKeys(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyUpdater",
        request: "WatchAuthorisedKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default KeyUpdaterV1;
