/**
  Juju RaftLease version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
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

interface ErrorResults {
  results: ErrorResult[];
}

interface LeaseOperation {
  command: string;
}

interface LeaseOperations {
  commands: LeaseOperation[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows for modification of the underlying raft instance from a
  controller facade.
*/
class RaftLeaseV1 {
  static NAME: string = 'RaftLease';
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
        type: 'RaftLease',
        request: 'ApplyLease',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RaftLeaseV1;
