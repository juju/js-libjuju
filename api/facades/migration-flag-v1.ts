/**
  Juju MigrationFlag version 1.
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

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface PhaseResult {
  error: Error;
  phase: string;
}

interface PhaseResults {
  results: PhaseResult[];
}

interface AdditionalProperties {
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
