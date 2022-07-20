/**
  Juju ModelUpgrader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ModelParam {
  'model-tag': string;
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface UpgradeModel {
  'agent-stream'?: string;
  'dry-run'?: boolean;
  'ignore-agent-versions'?: boolean;
  'model-tag': string;
  'to-version': Number;
}

interface AdditionalProperties {
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
  upgradeModel(params: UpgradeModel): Promise<undefined> {
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
