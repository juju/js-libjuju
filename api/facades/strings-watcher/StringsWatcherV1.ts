/**
  Juju StringsWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvStringsWatcher defines the API for methods on a state.StringsWatcher.
  Each client has its own current set of watchers, stored in resources.
  srvStringsWatcher notifies about changes for all entities of a given kind,
  sending the changes as a list of strings.
*/
class StringsWatcherV1 {
  static NAME = "StringsWatcher";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvStringsWatcher.
  */
  next(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "StringsWatcher",
        request: "Next",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Stop stops the watcher.
  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "StringsWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default StringsWatcherV1;
