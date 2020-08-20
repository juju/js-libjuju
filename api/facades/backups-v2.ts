/**
  Juju Backups version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
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
  'ca-cert': string;
  'ca-private-key': string;
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

interface RestoreArgs {
  'backup-id': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv2 serves backup-specific API methods for version 2.
*/
class BackupsV2 {
  static NAME: string = 'Backups';
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

  */
  create(params: BackupsCreateArgs): Promise<BackupsMetadataResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'Create',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FinishRestore implements the server side of Backups.FinishRestore.
  */
  finishRestore(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'FinishRestore',
        version: 2,
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
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PrepareRestore implements the server side of Backups.PrepareRestore.
  */
  prepareRestore(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'PrepareRestore',
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Restore implements the server side of Backups.Restore.
  */
  restore(params: RestoreArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Backups',
        request: 'Restore',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BackupsV2;
