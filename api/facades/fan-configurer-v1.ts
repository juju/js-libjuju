/**
  Juju FanConfigurer version 1.
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


export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface FanConfigEntry {
  overlay: string;
  underlay: string;
}

export interface FanConfigResult {
  fans: FanConfigEntry[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class FanConfigurerV1 {
  static NAME: string = 'FanConfigurer';
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
    FanConfig returns current FAN configuration.
  */
  fanConfig(): Promise<FanConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'FanConfigurer',
        request: 'FanConfig',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForFanConfigChanges returns a NotifyWatcher that observes
    changes to the FAN configuration.
    so we use the regular error return.
    TODO(wpk) 2017-09-21 We should use Model directly, and watch only for FanConfig changes.
  */
  watchForFanConfigChanges(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'FanConfigurer',
        request: 'WatchForFanConfigChanges',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default FanConfigurerV1;
