/**
  Juju AllWatcher version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AllWatcherNextResults {
  deltas: Delta[];
}

interface Delta {
  entity: AdditionalProperties;
  removed: boolean;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  SrvAllWatcher defines the API methods on a state.Multiwatcher.
  which watches any changes to the state. Each client has its own
  current set of watchers, stored in resources. It is used by both
  the AllWatcher and AllModelWatcher facades.
*/
class AllWatcherV2 {
  static NAME: string = 'AllWatcher';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
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
        type: 'AllWatcher',
        request: 'Next',
        version: 2,
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
        type: 'AllWatcher',
        request: 'Stop',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AllWatcherV2;
