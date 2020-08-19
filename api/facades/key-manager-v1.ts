/**
  Juju KeyManager version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
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

interface ListSSHKeys {
  entities: Entities;
  mode: boolean;
}

interface ModifyUserSSHKeys {
  'ssh-keys': string[];
  user: string;
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface StringsResults {
  results: StringsResult[];
}

interface AdditionalProperties {
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
