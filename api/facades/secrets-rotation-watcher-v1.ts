/**
  Juju SecretsRotationWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface SecretRotationChange {
  'last-rotate-time': string;
  'rotate-interval': number;
  'secret-id': number;
  url: string;
}

interface SecretRotationWatchResult {
  changes: SecretRotationChange[];
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvSecretRotationWatcher defines the API wrapping a SecretsRotationWatcher.
*/
class SecretsRotationWatcherV1 {
  static NAME: string = 'SecretsRotationWatcher';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
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
  next(): Promise<SecretRotationWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsRotationWatcher',
        request: 'Next',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Stop stops the watcher.
  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsRotationWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SecretsRotationWatcherV1;
