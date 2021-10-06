/**
  Juju FanConfigurer version 1.
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


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface FanConfigEntry {
  overlay: string;
  underlay: string;
}

interface FanConfigResult {
  fans: FanConfigEntry[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface AdditionalProperties {
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
