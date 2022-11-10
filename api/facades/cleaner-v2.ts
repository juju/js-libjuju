/**
  Juju Cleaner version 2.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CleanerAPI implements the API used by the cleaner worker.
*/
class CleanerV2 {
  static NAME: string = 'Cleaner';
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
    Cleanup triggers a state cleanup
  */
  cleanup(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cleaner',
        request: 'Cleanup',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCleanups watches for cleanups to be performed in state.
  */
  watchCleanups(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cleaner',
        request: 'WatchCleanups',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CleanerV2;
