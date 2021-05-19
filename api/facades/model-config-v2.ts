/**
  Juju ModelConfig version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ModelConfigResults {
  config: AdditionalProperties;
}

interface ModelSLA {
  ModelSLAInfo: ModelSLAInfo;
  creds: number[];
  level: string;
  owner: string;
}

interface ModelSLAInfo {
  level: string;
  owner: string;
}

interface ModelSequencesResult {
  sequences: AdditionalProperties;
}

interface ModelSet {
  config: AdditionalProperties;
}

interface ModelUnset {
  keys: string[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelConfigAPIV2 is currently the latest.
*/
class ModelConfigV2 {
  static NAME: string = 'ModelConfig';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ModelGet implements the server-side part of the
    model-config CLI command.
  */
  modelGet(): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'ModelGet',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelSet implements the server-side part of the
    set-model-config CLI command.
  */
  modelSet(params: ModelSet): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'ModelSet',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUnset implements the server-side part of the
    set-model-config CLI command.
  */
  modelUnset(params: ModelUnset): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'ModelUnset',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SLALevel returns the current sla level for the model.
  */
  sLALevel(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'SLALevel',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Sequences returns the model's sequence names and next values.
  */
  sequences(): Promise<ModelSequencesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'Sequences',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetSLALevel sets the sla level on the model.
  */
  setSLALevel(params: ModelSLA): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'SetSLALevel',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelConfigV2;
