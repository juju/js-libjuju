/**
  Juju MigrationStatusWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface MigrationStatus {
  attempt: number;
  'migration-id': string;
  phase: string;
  'source-api-addrs': string[];
  'source-ca-cert': string;
  'target-api-addrs': string[];
  'target-ca-cert': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class MigrationStatusWatcherV1 {
  static NAME: string = 'MigrationStatusWatcher';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Next returns when the status for a model migration for the
    associated model changes. The current details for the active
    migration are returned.
  */
  next(): Promise<MigrationStatus> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationStatusWatcher',
        request: 'Next',
        version: 1,
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
        type: 'MigrationStatusWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MigrationStatusWatcherV1;
