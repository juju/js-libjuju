/**
  Juju ApplicationScaler version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
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

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows model-manager clients to watch and rescale services.
*/
class ApplicationScalerV1 {
  static NAME: string = 'ApplicationScaler';
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
    Rescale causes any supplied services to be scaled up to their
    minimum size.
  */
  rescale(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationScaler',
        request: 'Rescale',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Watch returns a watcher that sends the names of services whose
    unit count may be below their configured minimum.
  */
  watch(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationScaler',
        request: 'Watch',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ApplicationScalerV1;
