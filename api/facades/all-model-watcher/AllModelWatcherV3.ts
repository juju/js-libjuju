/**
  Juju AllModelWatcher version 3.
  This facade is available on:
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface AllWatcherNextResults {
  deltas: Delta[];
}

export interface Delta {
  entity: AdditionalProperties;
  removed: boolean;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SrvAllWatcher defines the API methods on a state.Multiwatcher.
  which watches any changes to the state. Each client has its own
  current set of watchers, stored in resources. It is used by both
  the AllWatcher and AllModelWatcher facades.
*/
class AllModelWatcherV3 {
  static NAME = "AllModelWatcher";
  static VERSION = 3;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    Next will return the current state of everything on the first call
    and subsequent calls will
  */
  next(params: any): Promise<AllWatcherNextResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "AllModelWatcher",
        request: "Next",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Stop stops the watcher.
  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "AllModelWatcher",
        request: "Stop",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AllModelWatcherV3;
