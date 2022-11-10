/**
  Juju RaftLease version 2.
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

export interface LeaseOperationCommand {
  duration?: number;
  holder?: string;
  lease?: string;
  'model-uuid'?: string;
  namespace?: string;
  'new-time'?: string;
  'old-time'?: string;
  operation: string;
  'pin-entity'?: string;
  version: number;
}

export interface LeaseOperationsV2 {
  commands: LeaseOperationCommand[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class RaftLeaseV2 {
  static NAME: string = 'RaftLease';
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

  */
  applyLease(params: LeaseOperationsV2): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RaftLease',
        request: 'ApplyLease',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RaftLeaseV2;
