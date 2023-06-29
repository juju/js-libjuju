/**
  Juju SecretBackendsManager version 1.
  This facade is available on:
    Controller-machine-agent

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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface RotateSecretBackendArgs {
  "backend-ids": string[];
}

export interface SecretBackendRotateChange {
  "backend-name": string;
  id: string;
  "next-trigger-time": string;
}

export interface SecretBackendRotateWatchResult {
  changes: SecretBackendRotateChange[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretBackendsManagerAPI is the implementation for the SecretsManager facade.
*/
class SecretBackendsManagerV1 implements Facade {
  static NAME = "SecretBackendsManager";
  static VERSION = 1;

  NAME = "SecretBackendsManager";
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
    RotateBackendTokens rotates the tokens for the specified backends.
  */
  rotateBackendTokens(params: RotateSecretBackendArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackendsManager",
        request: "RotateBackendTokens",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchSecretBackendsRotateChanges sets up a watcher to notify of changes to secret backend rotations.
  */
  watchSecretBackendsRotateChanges(
    params: any
  ): Promise<SecretBackendRotateWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretBackendsManager",
        request: "WatchSecretBackendsRotateChanges",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretBackendsManagerV1;
