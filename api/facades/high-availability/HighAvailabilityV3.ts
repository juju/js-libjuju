/**
  Juju HighAvailability version 3.


  NOTE: This file was generated using the Juju schema
  from Juju 4.0.1 at the git SHA 22e0b6a.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface ControllerDetails {
  "api-addresses": string[];
  "controller-id": string;
  error?: Error;
}

export interface ControllerDetailsResults {
  results: ControllerDetails[];
}

export interface ControllersChangeResult {
  error?: Error;
  result: ControllersChanges;
}

export interface ControllersChangeResults {
  results: ControllersChangeResult[];
}

export interface ControllersChanges {
  added?: string[];
  converted?: string[];
  maintained?: string[];
  removed?: string[];
}

export interface ControllersSpec {
  constraints?: Value;
  "num-controllers": number;
  placement?: string[];
}

export interface ControllersSpecs {
  specs: ControllersSpec[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface Value {
  "allocate-public-ip"?: boolean;
  arch?: string;
  container?: string;
  cores?: number;
  "cpu-power"?: number;
  "image-id"?: string;
  "instance-role"?: string;
  "instance-type"?: string;
  mem?: number;
  "root-disk"?: number;
  "root-disk-source"?: string;
  spaces?: string[];
  tags?: string[];
  "virt-type"?: string;
  zones?: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class HighAvailabilityV3 implements Facade {
  static NAME = "HighAvailability";
  static VERSION = 3;

  NAME = "HighAvailability";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  controllerDetails(params: any): Promise<ControllerDetailsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "HighAvailability",
        request: "ControllerDetails",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  enableHA(params: ControllersSpecs): Promise<ControllersChangeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "HighAvailability",
        request: "EnableHA",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default HighAvailabilityV3;
