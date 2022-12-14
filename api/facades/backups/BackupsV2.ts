/**
  Juju Backups version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BackupsCreateArgs {
  "keep-copy": boolean;
  "no-download": boolean;
  notes: string;
}

export interface BackupsInfoArgs {
  id: string;
}

export interface BackupsListArgs {
  [key: string]: AdditionalProperties;
}

export interface BackupsListResult {
  list: BackupsMetadataResult[];
}

export interface BackupsMetadataResult {
  "ca-cert": string;
  "ca-private-key": string;
  checksum: string;
  "checksum-format": string;
  "controller-machine-id": string;
  "controller-machine-inst-id": string;
  "controller-uuid": string;
  filename: string;
  finished: string;
  "format-version": number;
  "ha-nodes": number;
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

export interface BackupsRemoveArgs {
  ids: string[];
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

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface RestoreArgs {
  "backup-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv2 serves backup-specific API methods for version 2.
*/
class BackupsV2 implements Facade {
  static NAME = "Backups";
  static VERSION = 2;

  NAME = "Backups";
  VERSION = 2;

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
  create(params: BackupsCreateArgs): Promise<BackupsMetadataResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Backups",
        request: "Create",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FinishRestore implements the server side of Backups.FinishRestore.
  */
  finishRestore(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Backups",
        request: "FinishRestore",
        version: 2,
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
        type: "Backups",
        request: "Info",
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
        type: "Backups",
        request: "List",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PrepareRestore implements the server side of Backups.PrepareRestore.
  */
  prepareRestore(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Backups",
        request: "PrepareRestore",
        version: 2,
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
        type: "Backups",
        request: "Remove",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Restore implements the server side of Backups.Restore.
  */
  restore(params: RestoreArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Backups",
        request: "Restore",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default BackupsV2;
