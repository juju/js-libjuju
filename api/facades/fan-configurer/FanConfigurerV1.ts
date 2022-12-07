/**
  Juju FanConfigurer version 1.
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
class FanConfigurerV1 implements Facade {
  static NAME = "FanConfigurer";
  static VERSION = 1;

  NAME = "FanConfigurer";
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
    FanConfig returns current FAN configuration.
  */
  fanConfig(params: any): Promise<FanConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FanConfigurer",
        request: "FanConfig",
        version: 1,
        params: params,
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
  watchForFanConfigChanges(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FanConfigurer",
        request: "WatchForFanConfigChanges",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default FanConfigurerV1;
