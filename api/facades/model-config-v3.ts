/**
  Juju ModelConfig version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface GetConstraintsResults {
  constraints: Value;
}

export interface ModelConfigResults {
  config: AdditionalProperties;
}

export interface ModelSLA {
  ModelSLAInfo: ModelSLAInfo;
  creds: number[];
  level: string;
  owner: string;
}

export interface ModelSLAInfo {
  level: string;
  owner: string;
}

export interface ModelSequencesResult {
  sequences: AdditionalProperties;
}

export interface ModelSet {
  config: AdditionalProperties;
}

export interface ModelUnset {
  keys: string[];
}

export interface SetConstraints {
  application: string;
  constraints: Value;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-role': string;
  'instance-type': string;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  spaces: string[];
  tags: string[];
  'virt-type': string;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelConfigAPIV3 is currently the latest.
*/
class ModelConfigV3 {
  static NAME: string = 'ModelConfig';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    GetModelConstraints returns the constraints for the model.
  */
  getModelConstraints(): Promise<GetConstraintsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'GetModelConstraints',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
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
        version: 3,
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
        version: 3,
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
        version: 3,
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
        version: 3,
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
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelConstraints sets the constraints for the model.
  */
  setModelConstraints(params: SetConstraints): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelConfig',
        request: 'SetModelConstraints',
        version: 3,
        params: params,
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
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelConfigV3;
