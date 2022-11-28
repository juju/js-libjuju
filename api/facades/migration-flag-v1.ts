/**
  Juju MigrationFlag version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface PhaseResult {
  error: Error;
  phase: string;
}

export interface PhaseResults {
  results: PhaseResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade lets clients watch and get models' migration phases.
*/
class MigrationFlagV1 {
  static NAME: string = 'MigrationFlag';
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
    Phase returns the current migration phase or an error for every
    supplied entity.
  */
  phase(params: Entities): Promise<PhaseResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationFlag',
        request: 'Phase',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Watch returns an id for use with the NotifyWatcher facade, or an
    error, for every supplied entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationFlag',
        request: 'Watch',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MigrationFlagV1;
