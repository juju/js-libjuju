/**
  Juju CrossModelSecrets version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface GetRemoteSecretAccessArg {
  "application-token": string;
  "unit-id": number;
  uri: string;
}

export interface GetRemoteSecretAccessArgs {
  relations: GetRemoteSecretAccessArg[];
}

export interface GetRemoteSecretContentArg {
  "application-token": string;
  "bakery-version"?: number;
  macaroons?: Macaroon[];
  peek?: boolean;
  refresh?: boolean;
  revision?: number;
  "unit-id": number;
  uri: string;
}

export interface GetRemoteSecretContentArgs {
  relations: GetRemoteSecretContentArg[];
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface SecretBackendConfig {
  params?: AdditionalProperties;
  type: string;
}

export interface SecretBackendConfigResult {
  config?: SecretBackendConfig;
  draining: boolean;
  "model-controller": string;
  "model-name": string;
  "model-uuid": string;
}

export interface SecretContentParams {
  data: Record<string, string>;
  "value-ref": SecretValueRef;
}

export interface SecretContentResult {
  "backend-config"?: SecretBackendConfigResult;
  content: SecretContentParams;
  error?: Error;
  "latest-revision"?: number;
}

export interface SecretContentResults {
  results: SecretContentResult[];
}

export interface SecretValueRef {
  "backend-id": string;
  "revision-id": string;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CrossModelSecretsAPI provides access to the CrossModelSecrets API facade.
*/
class CrossModelSecretsV1 implements Facade {
  static NAME = "CrossModelSecrets";
  static VERSION = 1;

  NAME = "CrossModelSecrets";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    GetSecretAccessScope returns the tokens for the access scope of the specified secrets and consumers.
  */
  getSecretAccessScope(
    params: GetRemoteSecretAccessArgs
  ): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CrossModelSecrets",
        request: "GetSecretAccessScope",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretContentInfo returns the secret values for the specified secrets.
  */
  getSecretContentInfo(
    params: GetRemoteSecretContentArgs
  ): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CrossModelSecrets",
        request: "GetSecretContentInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CrossModelSecretsV1;
