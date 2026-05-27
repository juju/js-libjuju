/**
  Juju ModelConfig version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.6.14 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
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

export interface GetConstraintsResults {
  constraints: Value;
}

export interface ModelConfigResults {
  config: Record<string, ConfigValue>;
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
  sequences: Record<string, number>;
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
  "allocate-public-ip"?: boolean;
  arch?: string;
  container?: string;
  cores?: number;
  "cpu-power"?: number;
  "image-id"?: string;
  "instance-role"?: string;
  "instance-type"?: string;
  mem?: number;
  "root-disk"?: number;
  "root-disk-source"?: string;
  spaces?: string[];
  tags?: string[];
  "virt-type"?: string;
  zones?: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

class ModelConfigV3 implements Facade {
  static NAME = "ModelConfig";
  static VERSION = 3;

  NAME = "ModelConfig";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  getModelConstraints(params: any): Promise<GetConstraintsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "GetModelConstraints",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  modelGet(params: any): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelGet",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  modelSet(params: ModelSet): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelSet",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  modelUnset(params: ModelUnset): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelUnset",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  sLALevel(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SLALevel",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  sequences(params: any): Promise<ModelSequencesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "Sequences",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  setModelConstraints(params: SetConstraints): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SetModelConstraints",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  setSLALevel(params: ModelSLA): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SetSLALevel",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelConfigV3;
