/**
  Juju UnitAssigner version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

export interface SetStatus {
  entities: EntityStatusArgs[];
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
  API implements the functionality for assigning units to machines.
*/
class UnitAssignerV1 implements Facade {
  static NAME = "UnitAssigner";
  static VERSION = 1;

  NAME = "UnitAssigner";
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
    AssignUnits assigns the units with the given ids to the correct machine. The
    error results are returned in the same order as the given entities.
  */
  assignUnits(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UnitAssigner",
        request: "AssignUnits",
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
        type: "UnitAssigner",
        request: "SetAgentStatus",
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
  watchUnitAssignments(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UnitAssigner",
        request: "WatchUnitAssignments",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UnitAssignerV1;
