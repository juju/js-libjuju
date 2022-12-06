/**
  Juju CAASApplication version 1.
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
import { autoBind } from "../../utils.js";

export interface CAASUnitIntroduction {
  "agent-conf": number[];
  "unit-name": string;
}

export interface CAASUnitIntroductionArgs {
  "pod-name": string;
  "pod-uuid": string;
}

export interface CAASUnitIntroductionResult {
  error: Error;
  result: CAASUnitIntroduction;
}

export interface CAASUnitTerminationResult {
  Error: Error;
  WillRestart: boolean;
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASApplicationV1 {
  static NAME = "CAASApplication";
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
    UnitIntroduction sets the status of each given entity.
  */
  unitIntroduction(
    params: CAASUnitIntroductionArgs
  ): Promise<CAASUnitIntroductionResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplication",
        request: "UnitIntroduction",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UnitTerminating should be called by the CAASUnitTerminationWorker when
    the agent receives a signal to exit. UnitTerminating will return how
    the agent should shutdown.
  */
  unitTerminating(params: Entity): Promise<CAASUnitTerminationResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplication",
        request: "UnitTerminating",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASApplicationV1;
