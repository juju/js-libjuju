/**
  Juju CAASModelConfigManager version 1.
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

export interface ControllerConfigResult {
  config: AdditionalProperties;
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows model config manager clients to watch controller config changes and fetch controller config.
*/
class CAASModelConfigManagerV1 implements Facade {
  static NAME = "CAASModelConfigManager";
  static VERSION = 1;

  NAME = "CAASModelConfigManager";
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

  */
  controllerConfig(params: any): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelConfigManager",
        request: "ControllerConfig",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchControllerConfig(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelConfigManager",
        request: "WatchControllerConfig",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASModelConfigManagerV1;
