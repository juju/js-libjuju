/**
  Juju MeterStatus version 2.
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

export interface MeterStatusResult {
  code: string;
  error?: Error;
  info: string;
}

export interface MeterStatusResults {
  results: MeterStatusResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface SetUnitStateArg {
  "charm-state"?: AdditionalProperties;
  "meter-status-state"?: string;
  "relation-state"?: AdditionalProperties;
  "secret-state"?: string;
  "storage-state"?: string;
  tag: string;
  "uniter-state"?: string;
}

export interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

export interface UnitStateResult {
  "charm-state": AdditionalProperties;
  error: Error;
  "meter-status-state": string;
  "relation-state": AdditionalProperties;
  "secret-state": string;
  "storage-state": string;
  "uniter-state": string;
}

export interface UnitStateResults {
  results: UnitStateResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MeterStatusAPI implements the MeterStatus interface and is the concrete
  implementation of the API endpoint. Additionally, it embeds
  common.UnitStateAPI to allow meter status workers to access their
  controller-backed internal state.
*/
class MeterStatusV2 implements Facade {
  static NAME = "MeterStatus";
  static VERSION = 2;

  NAME = "MeterStatus";
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
    GetMeterStatus returns meter status information for each unit.
  */
  getMeterStatus(params: Entities): Promise<MeterStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MeterStatus",
        request: "GetMeterStatus",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetState sets the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  setState(params: SetUnitStateArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MeterStatus",
        request: "SetState",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    State returns the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  state(params: Entities): Promise<UnitStateResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MeterStatus",
        request: "State",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchMeterStatus returns a NotifyWatcher for observing changes
    to each unit's meter status.
  */
  watchMeterStatus(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MeterStatus",
        request: "WatchMeterStatus",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MeterStatusV2;
