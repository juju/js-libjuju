/**
  Juju CAASOperatorUpgrader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface KubernetesUpgradeArg {
  'agent-tag': string;
  version: Number;
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASOperatorUpgraderV1 {
  static NAME: string = 'CAASOperatorUpgrader';
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
    UpgradeOperator upgrades the operator for the specified agents.
  */
  upgradeOperator(params: KubernetesUpgradeArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperatorUpgrader',
        request: 'UpgradeOperator',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASOperatorUpgraderV1;
