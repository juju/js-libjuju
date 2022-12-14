/**
  Juju Backups version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BackupsCreateArgs {
  "no-download": boolean;
  notes: string;
}

export interface BackupsMetadataResult {
  base: string;
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
  size: number;
  started: string;
  stored: string;
  version: Number;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides backup-specific API methods.
*/
class BackupsV3 implements Facade {
  static NAME = "Backups";
  static VERSION = 3;

  NAME = "Backups";
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
    Create is the API method that requests juju to create a new backup
    of its state.
  */
  create(params: BackupsCreateArgs): Promise<BackupsMetadataResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Backups",
        request: "Create",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default BackupsV3;
