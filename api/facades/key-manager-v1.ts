/**
  Juju KeyManager version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ListSSHKeys {
  entities: Entities;
  mode: boolean;
}

export interface ModifyUserSSHKeys {
  'ssh-keys': string[];
  user: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  KeyManagerAPI implements the KeyUpdater interface and is the concrete
  implementation of the api end point.
*/
class KeyManagerV1 {
  static NAME: string = 'KeyManager';
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
    AddKeys adds new authorised ssh keys for the specified user.
  */
  addKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyManager',
        request: 'AddKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DeleteKeys deletes the authorised ssh keys for the specified user.
  */
  deleteKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyManager',
        request: 'DeleteKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ImportKeys imports new authorised ssh keys from the specified key ids for the specified user.
  */
  importKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyManager',
        request: 'ImportKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListKeys returns the authorised ssh keys for the specified users.
  */
  listKeys(params: ListSSHKeys): Promise<StringsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyManager',
        request: 'ListKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default KeyManagerV1;
