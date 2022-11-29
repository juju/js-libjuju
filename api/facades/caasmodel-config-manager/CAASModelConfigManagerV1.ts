/**
  Juju CAASModelConfigManager version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface ControllerConfigResult {
  config: AdditionalProperties;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade allows model config manager clients to watch controller config changes and fetch controller config.
*/
class CAASModelConfigManagerV1 {
  static NAME = "CAASModelConfigManager";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
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
}

export default CAASModelConfigManagerV1;
