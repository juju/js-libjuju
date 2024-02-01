/**
  Juju UpgradeSteps version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface SetUnitStateArg {
  "charm-state"?: Record<string, string>;
  "meter-status-state"?: string;
  "relation-state"?: Record<string, string>;
  "secret-state"?: string;
  "storage-state"?: string;
  tag: string;
  "uniter-state"?: string;
}

export interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UpgradeStepsAPI implements version 2 of the Upgrade Steps API,
  which adds WriteUniterState.
*/
class UpgradeStepsV2 implements Facade {
  static NAME = "UpgradeSteps";
  static VERSION = 2;

  NAME = "UpgradeSteps";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    ResetKVMMachineModificationStatusIdle sets the modification status
    of a kvm machine to idle if it is in an error state before upgrade.
    Related to lp:1829393.
  */
  resetKVMMachineModificationStatusIdle(params: Entity): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UpgradeSteps",
        request: "ResetKVMMachineModificationStatusIdle",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WriteAgentState writes the agent state for the set of units provided. This
    call presently deals with the state for the unit agent.
  */
  writeAgentState(params: SetUnitStateArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UpgradeSteps",
        request: "WriteAgentState",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UpgradeStepsV2;
