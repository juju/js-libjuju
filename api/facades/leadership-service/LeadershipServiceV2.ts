/**
  Juju LeadershipService version 2.
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
import { autoBind } from "../../utils.js";

export interface ApplicationTag {
  Name: string;
}

export interface ClaimLeadershipBulkParams {
  params: ClaimLeadershipParams[];
}

export interface ClaimLeadershipBulkResults {
  results: ErrorResult[];
}

export interface ClaimLeadershipParams {
  "application-tag": string;
  duration: number;
  "unit-tag": string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  LeadershipService implements a variant of leadership.Claimer for consumption
  over the API.
*/
class LeadershipServiceV2 {
  static NAME = "LeadershipService";
  static VERSION = 2;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "LeadershipService",
        request: "BlockUntilLeadershipReleased",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ClaimLeadership makes a leadership claim with the given parameters.
  */
  claimLeadership(
    params: ClaimLeadershipBulkParams
  ): Promise<ClaimLeadershipBulkResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "LeadershipService",
        request: "ClaimLeadership",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default LeadershipServiceV2;
