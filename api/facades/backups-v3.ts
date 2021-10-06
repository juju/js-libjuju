/**
  Juju Backups version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface BackupsCreateArgs {
  'keep-copy': boolean;
  'no-download': boolean;
  notes: string;
}

interface BackupsInfoArgs {
  id: string;
}

interface BackupsListArgs {
  [key: string]: AdditionalProperties;
}

interface BackupsListResult {
  list: BackupsMetadataResult[];
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

interface BackupsRemoveArgs {
  ids: string[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
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
  
  /**
    Info provides the implementation of the API method.
  */
  info(params: BackupsInfoArgs): Promise<BackupsMetadataResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'Info',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    List provides the implementation of the API method.
  */
  list(params: BackupsListArgs): Promise<BackupsListResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'List',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Remove deletes the backups defined by ID from the database.
  */
  remove(params: BackupsRemoveArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'Remove',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BackupsV3;
