/**
  Juju EnvironUpgrader version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface IntResult {
  error?: Error;
  result: number;
}

export interface IntResults {
  results: IntResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface SetModelEnvironVersion {
  'model-tag': string;
  version: number;
}

export interface SetModelEnvironVersions {
  models: SetModelEnvironVersion[];
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class EnvironUpgraderV1 {
  static NAME: string = 'EnvironUpgrader';
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
    ModelEnvironVersion returns the current version of the environ corresponding
    to each specified model.
  */
  modelEnvironVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EnvironUpgrader',
        request: 'ModelEnvironVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelTargetEnvironVersion returns the target version of the environ
    corresponding to each specified model. The target version is the
    environ provider's version.
  */
  modelTargetEnvironVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EnvironUpgrader',
        request: 'ModelTargetEnvironVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelEnvironVersion sets the current version of the environ corresponding
    to each specified model.
  */
  setModelEnvironVersion(params: SetModelEnvironVersions): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EnvironUpgrader',
        request: 'SetModelEnvironVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelStatus sets the status of each given model.
  */
  setModelStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EnvironUpgrader',
        request: 'SetModelStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelEnvironVersion watches for changes to the environ version of the
    specified models.
    
    NOTE(axw) this is currently implemented in terms of state.Model.Watch, so
    the client may be notified of changes unrelated to the environ version.
  */
  watchModelEnvironVersion(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'EnvironUpgrader',
        request: 'WatchModelEnvironVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default EnvironUpgraderV1;
