/**
  Juju KeyManager version 1.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ListSSHKeys {
  entities: Entities;
  mode: boolean;
}

export interface ModifyUserSSHKeys {
  "ssh-keys": string[];
  user: string;
}

export interface StringsResult {
  error?: Error;
  result?: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

class KeyManagerV1 implements Facade {
  static NAME = "KeyManager";
  static VERSION = 1;

  NAME = "KeyManager";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  addKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyManager",
        request: "AddKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  deleteKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyManager",
        request: "DeleteKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  importKeys(params: ModifyUserSSHKeys): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyManager",
        request: "ImportKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  listKeys(params: ListSSHKeys): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "KeyManager",
        request: "ListKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default KeyManagerV1;
