/**
  Juju Undertaker version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface ModelConfigResult {
  config: AdditionalProperties;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface UndertakerModelInfo {
  'destroy-timeout'?: number;
  'force-destroyed'?: boolean;
  'global-name': string;
  'is-system': boolean;
  life: string;
  name: string;
  uuid: string;
}

interface UndertakerModelInfoResult {
  error?: Error;
  result: UndertakerModelInfo;
}

interface AdditionalProperties {
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
