/**
  Juju ModelUpgrader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

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

export interface ModelParam {
  'model-tag': string;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface UpgradeModelParams {
  'agent-stream'?: string;
  'dry-run'?: boolean;
  'ignore-agent-versions'?: boolean;
  'model-tag': string;
  'target-version': Number;
}

export interface UpgradeModelResult {
  'chosen-version': Number;
  error?: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelUpgraderAPI implements the model upgrader interface and is
  the concrete implementation of the api end point.
*/
class ModelUpgraderV1 {
  static NAME: string = 'ModelUpgrader';
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
    AbortModelUpgrade aborts and archives the model upgrade
    synchronisation record, if any.
  */
  abortModelUpgrade(params: ModelParam): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelUpgrader',
        request: 'AbortModelUpgrade',
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
        type: 'ModelUpgrader',
        request: 'UpgradeModel',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelUpgraderV1;
