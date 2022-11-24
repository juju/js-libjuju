/**
  Juju AllModelWatcher version 4.
  This facade is available on:
    Controllers

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface AllWatcherNextResults {
  deltas: Delta[];
}

export interface Delta {
  entity: AdditionalProperties;
  removed: boolean;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SrvAllWatcher defines the API methods on a state.Multiwatcher.
  which watches any changes to the state. Each client has its own
  current set of watchers, stored in resources. It is used by both
  the AllWatcher and AllModelWatcher facades.
*/
class AllModelWatcherV4 {
  static NAME: string = 'AllModelWatcher';
  static VERSION: number = 4;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 4;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Next will return the current state of everything on the first call
    and subsequent calls will
  */
  next(): Promise<AllWatcherNextResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'AllModelWatcher',
        request: 'Next',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Stop stops the watcher.
  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'AllModelWatcher',
        request: 'Stop',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AllModelWatcherV4;
