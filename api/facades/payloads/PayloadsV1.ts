/**
  Juju Payloads version 1.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

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
  static NAME = "Payloads";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Payloads",
        request: "List",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default PayloadsV1;
