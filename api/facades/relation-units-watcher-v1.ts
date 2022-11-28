/**
  Juju RelationUnitsWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface RelationUnitsChange {
  'app-changed'?: AdditionalProperties;
  changed: AdditionalProperties;
  departed?: string[];
}

export interface RelationUnitsWatchResult {
  changes: RelationUnitsChange;
  error?: Error;
  'watcher-id': string;
}

export interface UnitSettings {
  version: number;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvRelationUnitsWatcher defines the API wrapping a state.RelationUnitsWatcher.
  It notifies about units entering and leaving the scope of a RelationUnit,
  and changes to the settings of those units known to have entered.
*/
class RelationUnitsWatcherV1 {
  static NAME: string = 'RelationUnitsWatcher';
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
    or the Watch call that created the srvRelationUnitsWatcher.
  */
  next(): Promise<RelationUnitsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RelationUnitsWatcher',
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
        type: 'RelationUnitsWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RelationUnitsWatcherV1;
