/**
  Juju SecretsRevisionWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2-rc1 at the git SHA 3a098707a1.
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

export interface SecretRevisionChange {
  revision: number;
  uri: string;
}

export interface SecretRevisionWatchResult {
  changes: SecretRevisionChange[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvSecretsRevisionWatcher defines the API wrapping a SecretsRevisionWatcher.
*/
class SecretsRevisionWatcherV1 implements Facade {
  static NAME = "SecretsRevisionWatcher";
  static VERSION = 1;

  NAME = "SecretsRevisionWatcher";
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
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvSecretRotationWatcher.
  */
  next(params: any): Promise<SecretRevisionWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsRevisionWatcher",
        request: "Next",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    Stop stops the watcher.
  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsRevisionWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

}

export default SecretsRevisionWatcherV1;
