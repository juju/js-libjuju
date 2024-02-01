/**
  Juju SecretBackends version 1.
  This facade is available on:
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddSecretBackendArg {
  SecretBackend: SecretBackend;
  "backend-type": string;
  config: AdditionalProperties;
  id?: string;
  name: string;
  "token-rotate-interval"?: number;
}

export interface AddSecretBackendArgs {
  args: AddSecretBackendArg[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ListSecretBackendsArgs {
  names: string[];
  reveal: boolean;
}

export interface ListSecretBackendsResults {
  results: SecretBackendResult[];
}

export interface RemoveSecretBackendArg {
  force?: boolean;
  name: string;
}

export interface RemoveSecretBackendArgs {
  args: RemoveSecretBackendArg[];
}

export interface SecretBackend {
  "backend-type": string;
  config: AdditionalProperties;
  name: string;
  "token-rotate-interval"?: number;
}

export interface SecretBackendResult {
  error?: Error;
  id: string;
  message?: string;
  "num-secrets": number;
  result: SecretBackend;
  status: string;
}

export interface UpdateSecretBackendArg {
  config: AdditionalProperties;
  force?: boolean;
  name: string;
  "name-change"?: string;
  reset: string[];
  "token-rotate-interval": number;
}

export interface UpdateSecretBackendArgs {
  args: UpdateSecretBackendArg[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretBackendsAPI is the server implementation for the SecretBackends facade.
*/
class SecretBackendsV1 implements Facade {
  static NAME = "SecretBackends";
  static VERSION = 1;

  NAME = "SecretBackends";
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
    AddSecretBackends adds new secret backends.
  */
  addSecretBackends(params: AddSecretBackendArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackends",
        request: "AddSecretBackends",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListSecretBackends lists available secret backends.
  */
  listSecretBackends(
    params: ListSecretBackendsArgs
  ): Promise<ListSecretBackendsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackends",
        request: "ListSecretBackends",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveSecretBackends removes secret backends.
  */
  removeSecretBackends(params: RemoveSecretBackendArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackends",
        request: "RemoveSecretBackends",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateSecretBackends updates secret backends.
  */
  updateSecretBackends(params: UpdateSecretBackendArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackends",
        request: "UpdateSecretBackends",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretBackendsV1;
