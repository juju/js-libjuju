/**
  Juju Singular version 2.
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

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

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

export interface SingularClaim {
  "claimant-tag": string;
  duration: number;
  "entity-tag": string;
}

export interface SingularClaims {
  claims: SingularClaim[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows controller machines to request exclusive rights to administer
  some specific model or controller for a limited time.
*/
class SingularV2 implements Facade {
  static NAME = "Singular";
  static VERSION = 2;

  NAME = "Singular";
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
    Claim makes the supplied singular-controller lease requests. (In practice,
    any requests not for the connection's model or controller, or not on behalf
    of the connected ModelManager machine, will be rejected.)
  */
  claim(params: SingularClaims): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Singular",
        request: "Claim",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Wait waits for the singular-controller lease to expire for all supplied
    entities. (In practice, any requests that do not refer to the connection's
    model or controller will be rejected.)
  */
  wait(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Singular",
        request: "Wait",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SingularV2;
