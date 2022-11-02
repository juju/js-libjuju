/**
  Juju SecretsTriggerWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface SecretTriggerChange {
  'next-trigger-time': string;
  revision?: number;
  uri: string;
}

interface SecretTriggerWatchResult {
  changes: SecretTriggerChange[];
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvSecretTriggerWatcher defines the API wrapping a SecretsTriggerWatcher.
*/
class SecretsTriggerWatcherV1 {
  static NAME: string = 'SecretsTriggerWatcher';
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
  next(): Promise<SecretTriggerWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsTriggerWatcher',
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
        type: 'SecretsTriggerWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SecretsTriggerWatcherV1;
