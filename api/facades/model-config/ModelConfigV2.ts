/**
  Juju ModelConfig version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
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

export interface StringResult {
  error?: Error;
  result: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelConfigAPIV2 is currently the latest.
*/
class ModelConfigV2 {
  static NAME = "ModelConfig";
  static VERSION = 2;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
  modelGet(params: any): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelGet",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelSet implements the server-side part of the
    set-model-config CLI command.
  */
  modelSet(params: ModelSet): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelSet",
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
  modelUnset(params: ModelUnset): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelUnset",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SLALevel returns the current sla level for the model.
  */
  sLALevel(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SLALevel",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Sequences returns the model's sequence names and next values.
  */
  sequences(params: any): Promise<ModelSequencesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "Sequences",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetSLALevel sets the sla level on the model.
  */
  setSLALevel(params: ModelSLA): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SetSLALevel",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelConfigV2;
