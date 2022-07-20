/**
  Juju HighAvailability version 2.
  This facade is available on:
    Controllers
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ControllersChangeResult {
  error?: Error;
  result: ControllersChanges;
}

interface ControllersChangeResults {
  results: ControllersChangeResult[];
}

interface ControllersChanges {
  added: string[];
  converted: string[];
  maintained: string[];
  removed: string[];
}

interface ControllersSpec {
  constraints?: Value;
  'num-controllers': number;
  placement?: string[];
  series?: string;
}

interface ControllersSpecs {
  specs: ControllersSpec[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-role': string;
  'instance-type': string;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  spaces: string[];
  tags: string[];
  'virt-type': string;
  zones: string[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  HighAvailabilityAPI implements the HighAvailability interface and is the concrete
  implementation of the api end point.
*/
class HighAvailabilityV2 {
  static NAME: string = 'HighAvailability';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    EnableHA adds controller machines as necessary to ensure the
    controller has the number of machines specified.
  */
  enableHA(params: ControllersSpecs): Promise<ControllersChangeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'HighAvailability',
        request: 'EnableHA',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default HighAvailabilityV2;
