/**
  Juju UserSecretsManager version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3.2 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface DeleteSecretArg {
  label: string;
  revisions?: number[];
  uri: string;
}

export interface DeleteSecretArgs {
  args: DeleteSecretArg[];
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

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UserSecretsManager is the implementation for the usersecrets facade.
*/
class UserSecretsManagerV1 implements Facade {
  static NAME = "UserSecretsManager";
  static VERSION = 1;

  NAME = "UserSecretsManager";
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
    DeleteRevisions deletes the specified revisions of the specified secret.
  */
  deleteRevisions(params: DeleteSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsManager",
        request: "DeleteRevisions",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchRevisionsToPrune returns a watcher for notifying when:
      - a secret revision owned by the model no longer
        has any consumers and should be pruned.
  */
  watchRevisionsToPrune(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserSecretsManager",
        request: "WatchRevisionsToPrune",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UserSecretsManagerV1;
