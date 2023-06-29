/**
  Juju SecretsDrain version 1.
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
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ListSecretResult {
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

export interface SecretContentParams {
  data: Record<string, string>;
  "value-ref": SecretValueRef;
}

export interface SecretRevision {
  "backend-name"?: string;
  "create-time"?: string;
  "expire-time"?: string;
  revision: number;
  "update-time"?: string;
  "value-ref"?: SecretValueRef;
}

export interface SecretValueRef {
  "backend-id": string;
  "revision-id": string;
}

export interface SecretValueResult {
  data: Record<string, string>;
  error: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsDrainAPI is the implementation for the SecretsDrain facade.
*/
class SecretsDrainV1 implements Facade {
  static NAME = "SecretsDrain";
  static VERSION = 1;

  NAME = "SecretsDrain";
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
        type: "SecretsDrain",
        request: "ChangeSecretBackend",
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
        type: "SecretsDrain",
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
        type: "SecretsDrain",
        request: "WatchSecretBackendChanged",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretsDrainV1;
