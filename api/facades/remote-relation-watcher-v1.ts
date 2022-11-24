/**
  Juju RemoteRelationWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface RemoteRelationChangeEvent {
  'application-settings'?: AdditionalProperties;
  'application-token': string;
  'bakery-version'?: number;
  'changed-units'?: RemoteRelationUnitChange[];
  'departed-units'?: number[];
  'force-cleanup'?: boolean;
  life: string;
  macaroons?: Macaroon[];
  'relation-token': string;
  suspended?: boolean;
  'suspended-reason'?: string;
  'unit-count': number;
}

export interface RemoteRelationUnitChange {
  settings?: AdditionalProperties;
  'unit-id': number;
}

export interface RemoteRelationWatchResult {
  changes: RemoteRelationChangeEvent;
  error?: Error;
  'watcher-id': string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvRemoteRelationWatcher defines the API wrapping a
  state.RelationUnitsWatcher but serving the events it emits as
  fully-expanded params.RemoteRelationChangeEvents so they can be
  used across model/controller boundaries.
*/
class RemoteRelationWatcherV1 {
  static NAME: string = 'RemoteRelationWatcher';
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

  */
  next(): Promise<RemoteRelationWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RemoteRelationWatcher',
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
        type: 'RemoteRelationWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RemoteRelationWatcherV1;
