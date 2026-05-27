/**
  Juju ModelUpgrader version 1.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
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
  "target-version": string;
}

export interface UpgradeModelResult {
  "chosen-version": string;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

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
