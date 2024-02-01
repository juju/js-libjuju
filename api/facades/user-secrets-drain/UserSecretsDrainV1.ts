/**
  Juju UserSecretsDrain version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AccessInfo {
  role: string;
  "scope-tag": string;
  "target-tag": string;
}

export interface ChangeSecretBackendArg {
  content?: SecretContentParams;
  revision: number;
  uri: string;
}

export interface ChangeSecretBackendArgs {
  args: ChangeSecretBackendArg[];
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

export interface GetSecretContentArg {
  label?: string;
  peek?: boolean;
  refresh?: boolean;
  uri: string;
}

export interface GetSecretContentArgs {
  args: GetSecretContentArg[];
}

export interface ListSecretResult {
  access?: AccessInfo[];
  "create-time": string;
  description?: string;
  label?: string;
  "latest-expire-time"?: string;
  "latest-revision": number;
  "next-rotate-time"?: string;
  "owner-tag": string;
  revisions: SecretRevision[];
  "rotate-policy"?: string;
  "update-time": string;
  uri: string;
  value?: SecretValueResult;
  version: number;
}

export interface ListSecretResults {
  results: ListSecretResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface SecretBackendArgs {
  "backend-ids": string[];
  "for-drain": boolean;
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

export interface SecretBackendConfigResults {
  "active-id": string;
  results?: Record<string, SecretBackendConfigResult>;
}

export interface SecretContentParams {
  data?: Record<string, string>;
  "value-ref"?: SecretValueRef;
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

export interface SecretRevision {
  "backend-name"?: string;
  "create-time"?: string;
  "expire-time"?: string;
  revision: number;
  "update-time"?: string;
  "value-ref"?: SecretValueRef;
}

export interface SecretRevisionArg {
  "pending-delete": boolean;
  revisions: number[];
  uri: string;
}

export interface SecretValueRef {
  "backend-id": string;
  "revision-id": string;
}

export interface SecretValueResult {
  data?: Record<string, string>;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsDrainAPI is the implementation for the SecretsDrain facade.
*/
class UserSecretsDrainV1 implements Facade {
  static NAME = "UserSecretsDrain";
  static VERSION = 1;

  NAME = "UserSecretsDrain";
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
    ChangeSecretBackend updates the backend for the specified secret after migration done.
  */
  changeSecretBackend(params: ChangeSecretBackendArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "ChangeSecretBackend",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretBackendConfigs gets the config needed to create a client to secret backends for the drain worker.
  */
  getSecretBackendConfigs(
    params: SecretBackendArgs
  ): Promise<SecretBackendConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "GetSecretBackendConfigs",
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
    params: GetSecretContentArgs
  ): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "GetSecretContentInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretRevisionContentInfo returns the secret values for the specified secret revisions.
  */
  getSecretRevisionContentInfo(
    params: SecretRevisionArg
  ): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "GetSecretRevisionContentInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretsToDrain returns metadata for the secrets that need to be drained.
  */
  getSecretsToDrain(params: any): Promise<ListSecretResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "GetSecretsToDrain",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchSecretBackendChanged sets up a watcher to notify of changes to the secret backend.
  */
  watchSecretBackendChanged(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsDrain",
        request: "WatchSecretBackendChanged",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UserSecretsDrainV1;
