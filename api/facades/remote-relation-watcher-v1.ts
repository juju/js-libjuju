/**
  Juju RemoteRelationWatcher version 1.
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

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface RemoteRelationChangeEvent {
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

interface RemoteRelationUnitChange {
  settings?: AdditionalProperties;
  'unit-id': number;
}

interface RemoteRelationWatchResult {
  changes: RemoteRelationChangeEvent;
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
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
