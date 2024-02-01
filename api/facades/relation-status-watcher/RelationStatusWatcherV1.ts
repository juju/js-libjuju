/**
  Juju RelationStatusWatcher version 1.
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

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface RelationLifeSuspendedStatusChange {
  key: string;
  life: string;
  suspended: boolean;
  "suspended-reason": string;
}

export interface RelationLifeSuspendedStatusWatchResult {
  changes: RelationLifeSuspendedStatusChange[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvRelationStatusWatcher defines the API wrapping a state.RelationStatusWatcher.
*/
class RelationStatusWatcherV1 implements Facade {
  static NAME = "RelationStatusWatcher";
  static VERSION = 1;

  NAME = "RelationStatusWatcher";
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
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvRelationStatusWatcher.
  */
  next(params: any): Promise<RelationLifeSuspendedStatusWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "RelationStatusWatcher",
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
        type: "RelationStatusWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default RelationStatusWatcherV1;
