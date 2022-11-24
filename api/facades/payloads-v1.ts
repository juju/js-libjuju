/**
  Juju Payloads version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Payload {
  class: string;
  id: string;
  labels: string[];
  machine: string;
  status: string;
  type: string;
  unit: string;
}

export interface PayloadListArgs {
  patterns: string[];
}

export interface PayloadListResults {
  results: Payload[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API serves payload-specific API methods.
*/
class PayloadsV1 {
  static NAME: string = 'Payloads';
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
    List builds the list of payloads being tracked for
    the given unit and IDs. If no IDs are provided then all tracked
    payloads for the unit are returned.
  */
  list(params: PayloadListArgs): Promise<PayloadListResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Payloads',
        request: 'List',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default PayloadsV1;
