/**
  Juju RelationStatusWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface RelationLifeSuspendedStatusChange {
  key: string;
  life: string;
  suspended: boolean;
  'suspended-reason': string;
}

interface RelationLifeSuspendedStatusWatchResult {
  changes: RelationLifeSuspendedStatusChange[];
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvRelationStatusWatcher defines the API wrapping a state.RelationStatusWatcher.
*/
class RelationStatusWatcherV1 {
  static NAME: string = 'RelationStatusWatcher';
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
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvRelationStatusWatcher.
  */
  next(): Promise<RelationLifeSuspendedStatusWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RelationStatusWatcher',
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
        type: 'RelationStatusWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RelationStatusWatcherV1;
