/**
  Juju CredentialValidator version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface InvalidateCredentialArg {
  reason: string;
}

export interface ModelCredential {
  'credential-tag': string;
  exists?: boolean;
  'model-tag': string;
  valid?: boolean;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CredentialValidatorV2 {
  static NAME: string = 'CredentialValidator';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    InvalidateModelCredential marks the cloud credential for this model as invalid.
  */
  invalidateModelCredential(params: InvalidateCredentialArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CredentialValidator',
        request: 'InvalidateModelCredential',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelCredential returns cloud credential information for a  model.
  */
  modelCredential(): Promise<ModelCredential> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CredentialValidator',
        request: 'ModelCredential',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCredential returns a NotifyWatcher that observes
    changes to a given cloud credential.
  */
  watchCredential(params: Entity): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CredentialValidator',
        request: 'WatchCredential',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelCredential returns a NotifyWatcher that watches what cloud credential a model uses.
  */
  watchModelCredential(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CredentialValidator',
        request: 'WatchModelCredential',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CredentialValidatorV2;
