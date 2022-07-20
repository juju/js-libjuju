/**
  Juju CredentialManager version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface InvalidateCredentialArg {
  reason: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CredentialManagerV1 {
  static NAME: string = 'CredentialManager';
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
    InvalidateModelCredential marks the cloud credential for this model as invalid.
  */
  invalidateModelCredential(params: InvalidateCredentialArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CredentialManager',
        request: 'InvalidateModelCredential',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CredentialManagerV1;
