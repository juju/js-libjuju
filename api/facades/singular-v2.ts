/**
  Juju Singular version 2.
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
  'claimant-tag': string;
  duration: number;
  'entity-tag': string;
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
class SingularV2 {
  static NAME: string = 'Singular';
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
    Claim makes the supplied singular-controller lease requests. (In practice,
    any requests not for the connection's model or controller, or not on behalf
    of the connected ModelManager machine, will be rejected.)
  */
  claim(params: SingularClaims): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Singular',
        request: 'Claim',
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
        type: 'Singular',
        request: 'Wait',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SingularV2;
