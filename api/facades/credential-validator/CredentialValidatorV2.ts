/**
  Juju CredentialValidator version 2.
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
  "credential-tag": string;
  exists?: boolean;
  "model-tag": string;
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
class CredentialValidatorV2 implements Facade {
  static NAME = "CredentialValidator";
  static VERSION = 2;

  NAME = "CredentialValidator";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    InvalidateModelCredential marks the cloud credential for this model as invalid.
  */
  invalidateModelCredential(
    params: InvalidateCredentialArg
  ): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CredentialValidator",
        request: "InvalidateModelCredential",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelCredential returns cloud credential information for a  model.
  */
  modelCredential(params: any): Promise<ModelCredential> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CredentialValidator",
        request: "ModelCredential",
        version: 2,
        params: params,
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
        type: "CredentialValidator",
        request: "WatchCredential",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelCredential returns a NotifyWatcher that watches what cloud credential a model uses.
  */
  watchModelCredential(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CredentialValidator",
        request: "WatchModelCredential",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CredentialValidatorV2;
