/**
  Juju MeterStatus version 2.
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

interface MeterStatusResult {
  code: string;
  error?: Error;
  info: string;
}

interface MeterStatusResults {
  results: MeterStatusResult[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface SetUnitStateArg {
  'charm-state'?: AdditionalProperties;
  'meter-status-state'?: string;
  'relation-state'?: AdditionalProperties;
  'storage-state'?: string;
  tag: string;
  'uniter-state'?: string;
}

interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

interface UnitStateResult {
  'charm-state': AdditionalProperties;
  error: Error;
  'meter-status-state': string;
  'relation-state': AdditionalProperties;
  'storage-state': string;
  'uniter-state': string;
}

interface UnitStateResults {
  results: UnitStateResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  MeterStatusAPI implements the MeterStatus interface and is the concrete
  implementation of the API endpoint. Additionally, it embeds
  common.UnitStateAPI to allow meter status workers to access their
  controller-backed internal state.
*/
class MeterStatusV2 {
  static NAME: string = 'MeterStatus';
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
    GetMeterStatus returns meter status information for each unit.
  */
  getMeterStatus(params: Entities): Promise<MeterStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MeterStatus',
        request: 'GetMeterStatus',
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
        type: 'MeterStatus',
        request: 'SetState',
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
        type: 'MeterStatus',
        request: 'State',
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
        type: 'MeterStatus',
        request: 'WatchMeterStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MeterStatusV2;
