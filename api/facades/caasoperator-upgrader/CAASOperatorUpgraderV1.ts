/**
  Juju CAASOperatorUpgrader version 1.
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

export interface ErrorResult {
  error: Error;
}

export interface KubernetesUpgradeArg {
  "agent-tag": string;
  version: Number;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASOperatorUpgraderV1 implements Facade {
  static NAME = "CAASOperatorUpgrader";
  static VERSION = 1;

  NAME = "CAASOperatorUpgrader";
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
    UpgradeOperator upgrades the operator for the specified agents.
  */
  upgradeOperator(params: KubernetesUpgradeArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorUpgrader",
        request: "UpgradeOperator",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASOperatorUpgraderV1;
