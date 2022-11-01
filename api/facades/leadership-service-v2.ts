/**
  Juju LeadershipService version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ApplicationTag {
  Name: string;
}

interface ClaimLeadershipBulkParams {
  params: ClaimLeadershipParams[];
}

interface ClaimLeadershipBulkResults {
  results: ErrorResult[];
}

interface ClaimLeadershipParams {
  'application-tag': string;
  duration: number;
  'unit-tag': string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  LeadershipService implements a variant of leadership.Claimer for consumption
  over the API.
*/
class LeadershipServiceV2 {
  static NAME: string = 'LeadershipService';
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
    BlockUntilLeadershipReleased blocks the caller until leadership is
    released for the given service.
  */
  blockUntilLeadershipReleased(params: ApplicationTag): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'LeadershipService',
        request: 'BlockUntilLeadershipReleased',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ClaimLeadership makes a leadership claim with the given parameters.
  */
  claimLeadership(params: ClaimLeadershipBulkParams): Promise<ClaimLeadershipBulkResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'LeadershipService',
        request: 'ClaimLeadership',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default LeadershipServiceV2;
