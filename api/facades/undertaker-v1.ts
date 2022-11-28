/**
  Juju Undertaker version 1.
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

export interface ModelConfigResult {
  config: AdditionalProperties;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface UndertakerModelInfo {
  'destroy-timeout'?: number;
  'force-destroyed'?: boolean;
  'global-name': string;
  'is-system': boolean;
  life: string;
  name: string;
  uuid: string;
}

export interface UndertakerModelInfoResult {
  error?: Error;
  result: UndertakerModelInfo;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UndertakerAPI implements the API used by the model undertaker worker.
*/
class UndertakerV1 {
  static NAME: string = 'Undertaker';
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
    ModelConfig returns the model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'ModelConfig',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelInfo returns information on the model needed by the undertaker worker.
  */
  modelInfo(): Promise<UndertakerModelInfoResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'ModelInfo',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProcessDyingModel checks if a dying model has any machines or applications.
    If there are none, the model's life is changed from dying to dead.
  */
  processDyingModel(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'ProcessDyingModel',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveModel removes any records of this model from Juju.
  */
  removeModel(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'RemoveModel',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus sets the status of each given entity.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'SetStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelResources creates watchers for changes to the lifecycle of an
    model's machines and applications and storage.
  */
  watchModelResources(): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Undertaker',
        request: 'WatchModelResources',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UndertakerV1;
