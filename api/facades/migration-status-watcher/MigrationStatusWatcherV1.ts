/**
  Juju MigrationStatusWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface MigrationStatus {
  attempt: number;
  "migration-id": string;
  phase: string;
  "source-api-addrs": string[];
  "source-ca-cert": string;
  "target-api-addrs": string[];
  "target-ca-cert": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class MigrationStatusWatcherV1 implements Facade {
  static NAME = "MigrationStatusWatcher";
  static VERSION = 1;

  NAME = "MigrationStatusWatcher";
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
    Next returns when the status for a model migration for the
    associated model changes. The current details for the active
    migration are returned.
  */
  next(params: any): Promise<MigrationStatus> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationStatusWatcher",
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
        type: "MigrationStatusWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MigrationStatusWatcherV1;
