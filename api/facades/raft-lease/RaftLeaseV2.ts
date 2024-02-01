/**
  Juju RaftLease version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface LeaseOperationCommand {
  duration?: number;
  holder?: string;
  lease?: string;
  "model-uuid"?: string;
  namespace?: string;
  "new-time"?: string;
  "old-time"?: string;
  operation: string;
  "pin-entity"?: string;
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
class RaftLeaseV2 implements Facade {
  static NAME = "RaftLease";
  static VERSION = 2;

  NAME = "RaftLease";
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

  */
  applyLease(params: LeaseOperationsV2): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "RaftLease",
        request: "ApplyLease",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default RaftLeaseV2;
