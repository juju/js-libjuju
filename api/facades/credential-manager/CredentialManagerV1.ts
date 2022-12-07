/**
  Juju CredentialManager version 1.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
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

export interface InvalidateCredentialArg {
  reason: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CredentialManagerV1 implements Facade {
  static NAME = "CredentialManager";
  static VERSION = 1;

  NAME = "CredentialManager";
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
    InvalidateModelCredential marks the cloud credential for this model as invalid.
  */
  invalidateModelCredential(
    params: InvalidateCredentialArg
  ): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CredentialManager",
        request: "InvalidateModelCredential",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CredentialManagerV1;
