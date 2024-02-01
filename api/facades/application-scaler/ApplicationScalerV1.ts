/**
  Juju ApplicationScaler version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows model-manager clients to watch and rescale services.
*/
class ApplicationScalerV1 implements Facade {
  static NAME = "ApplicationScaler";
  static VERSION = 1;

  NAME = "ApplicationScaler";
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
    Rescale causes any supplied services to be scaled up to their
    minimum size.
  */
  rescale(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationScaler",
        request: "Rescale",
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
  watch(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationScaler",
        request: "Watch",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ApplicationScalerV1;
