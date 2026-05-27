/**
  Juju AllWatcher version 3.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.6.14 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AllWatcherNextResults {
  deltas: [string, string, unknown][];
}

export interface Delta {
  entity: AdditionalProperties;
  removed: boolean;
}

export interface AdditionalProperties {
  [key: string]: any;
}

class AllWatcherV3 implements Facade {
  static NAME = "AllWatcher";
  static VERSION = 3;

  NAME = "AllWatcher";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  next(params: { id: string }): Promise<AllWatcherNextResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "AllWatcher",
        request: "Next",
        version: 3,
        id: params.id,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  stop(params: { id: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "AllWatcher",
        request: "Stop",
        version: 3,
        id: params.id,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AllWatcherV3;
