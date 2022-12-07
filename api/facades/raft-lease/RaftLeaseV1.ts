/**
  Juju RaftLease version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
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

export interface ErrorResults {
  results: ErrorResult[];
}

export interface LeaseOperation {
  command: string;
}

export interface LeaseOperations {
  commands: LeaseOperation[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows for modification of the underlying raft instance from a
  controller facade.
*/
class RaftLeaseV1 implements Facade {
  static NAME = "RaftLease";
  static VERSION = 1;

  NAME = "RaftLease";
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
    ApplyLease is a bulk API to allow applying lease operations to a raft
    context. If the current controller is not the leader, then a NotLeaderError
    is returned. Information about where they can locate the leader maybe
    supplied in the error message, but isn't guaranteed.
    If no information is supplied, it is expected that the client performs their
    own algorithm to locate the leader (roundrobin or listen to the apidetails
    topic).
  */
  applyLease(params: LeaseOperations): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "RaftLease",
        request: "ApplyLease",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default RaftLeaseV1;
