/**
  Juju MigrationMinion version 1.
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
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface MinionReport {
  "migration-id": string;
  phase: string;
  success: boolean;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the API required for the model migration
  master worker.
*/
class MigrationMinionV1 implements Facade {
  static NAME = "MigrationMinion";
  static VERSION = 1;

  NAME = "MigrationMinion";
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
    Report allows a migration minion to submit whether it succeeded or
    failed for a specific migration phase.
  */
  report(params: MinionReport): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMinion",
        request: "Report",
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
  watch(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMinion",
        request: "Watch",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MigrationMinionV1;
