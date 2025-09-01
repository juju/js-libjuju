/**
  Juju ModelConfig version 4.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0-beta7 at the git SHA 1123177894.
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

export interface ErrorResult {
  error?: Error;
}

export interface GetConstraintsResults {
  constraints: Value;
}

export interface ModelConfigResults {
  config: Record<string, ConfigValue>;
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

export interface SetModelSecretBackendArg {
  "secret-backend-name": string;
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

/**

*/
class ModelConfigV4 implements Facade {
  static NAME = "ModelConfig";
  static VERSION = 4;

  NAME = "ModelConfig";
  VERSION = 4;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  getModelConstraints(params: any): Promise<GetConstraintsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "GetModelConstraints",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  getModelSecretBackend(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "GetModelSecretBackend",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  modelGet(params: any): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelGet",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  modelSet(params: ModelSet): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelSet",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  modelUnset(params: ModelUnset): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "ModelUnset",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  sequences(params: any): Promise<ModelSequencesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "Sequences",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setModelConstraints(params: SetConstraints): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SetModelConstraints",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setModelSecretBackend(params: SetModelSecretBackendArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelConfig",
        request: "SetModelSecretBackend",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

}

export default ModelConfigV4;
