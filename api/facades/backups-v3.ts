/**
  Juju Backups version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface BackupsCreateArgs {
  'no-download': boolean;
  notes: string;
}

interface BackupsMetadataResult {
  checksum: string;
  'checksum-format': string;
  'controller-machine-id': string;
  'controller-machine-inst-id': string;
  'controller-uuid': string;
  filename: string;
  finished: string;
  'format-version': number;
  'ha-nodes': number;
  hostname: string;
  id: string;
  machine: string;
  model: string;
  notes: string;
  series: string;
  size: number;
  started: string;
  stored: string;
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
  API provides backup-specific API methods.
*/
class BackupsV3 {
  static NAME: string = 'Backups';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Create is the API method that requests juju to create a new backup
    of its state.
  */
  create(params: BackupsCreateArgs): Promise<BackupsMetadataResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'Create',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BackupsV3;
