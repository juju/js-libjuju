/**
  Juju UnitAssigner version 1.
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

interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the functionality for assigning units to machines.
*/
class UnitAssignerV1 {
  static NAME: string = 'UnitAssigner';
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
    AssignUnits assigns the units with the given ids to the correct machine. The
     error results are returned in the same order as the given entities.
  */
  assignUnits(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UnitAssigner',
        request: 'AssignUnits',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetAgentStatus will set status for agents of Units passed in args, if one
    of the args is not an Unit it will fail.
  */
  setAgentStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UnitAssigner',
        request: 'SetAgentStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnitAssignments returns a strings watcher that is notified when new unit
    assignments are added to the db.
  */
  watchUnitAssignments(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UnitAssigner',
        request: 'WatchUnitAssignments',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UnitAssignerV1;
