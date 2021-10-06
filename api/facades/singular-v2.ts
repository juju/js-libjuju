/**
  Juju Singular version 2.
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


interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

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

interface SingularClaim {
  'claimant-tag': string;
  duration: number;
  'entity-tag': string;
}

interface SingularClaims {
  claims: SingularClaim[];
}

interface AdditionalProperties {
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
