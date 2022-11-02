/**
  Juju CAASApplication version 1.
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


interface CAASUnitIntroduction {
  'agent-conf': number[];
  'unit-name': string;
}

interface CAASUnitIntroductionArgs {
  'pod-name': string;
  'pod-uuid': string;
}

interface CAASUnitIntroductionResult {
  error: Error;
  result: CAASUnitIntroduction;
}

interface CAASUnitTerminationResult {
  Error: Error;
  WillRestart: boolean;
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASApplicationV1 {
  static NAME: string = 'CAASApplication';
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
    UnitIntroduction sets the status of each given entity.
  */
  unitIntroduction(params: CAASUnitIntroductionArgs): Promise<CAASUnitIntroductionResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplication',
        request: 'UnitIntroduction',
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
        type: 'CAASApplication',
        request: 'UnitTerminating',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASApplicationV1;
