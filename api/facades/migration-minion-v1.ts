/**
  Juju MigrationMinion version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface MinionReport {
  'migration-id': string;
  phase: string;
  success: boolean;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the API required for the model migration
  master worker.
*/
class MigrationMinionV1 {
  static NAME: string = 'MigrationMinion';
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
    Report allows a migration minion to submit whether it succeeded or
    failed for a specific migration phase.
  */
  report(params: MinionReport): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMinion',
        request: 'Report',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Watch starts watching for status updates for a migration attempt
    for the model. It will report when a migration starts and when its
    status changes (including when it finishes). An initial event will
    be fired if there has ever been a migration attempt for the model.
    
    The MigrationStatusWatcher facade must be used to receive events
    from the watcher.
  */
  watch(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMinion',
        request: 'Watch',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MigrationMinionV1;
