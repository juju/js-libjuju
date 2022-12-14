/**
  Juju ModelUpgrader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

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

export interface ModelParam {
  "model-tag": string;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface UpgradeModelParams {
  "agent-stream"?: string;
  "dry-run"?: boolean;
  "ignore-agent-versions"?: boolean;
  "model-tag": string;
  "target-version": Number;
}

export interface UpgradeModelResult {
  "chosen-version": Number;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelUpgraderAPI implements the model upgrader interface and is
  the concrete implementation of the api end point.
*/
class ModelUpgraderV1 implements Facade {
  static NAME = "ModelUpgrader";
  static VERSION = 1;

  NAME = "ModelUpgrader";
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
    AbortModelUpgrade aborts and archives the model upgrade
    synchronisation record, if any.
  */
  abortModelUpgrade(params: ModelParam): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelUpgrader",
        request: "AbortModelUpgrade",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpgradeModel upgrades a model.
  */
  upgradeModel(params: UpgradeModelParams): Promise<UpgradeModelResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelUpgrader",
        request: "UpgradeModel",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelUpgraderV1;
