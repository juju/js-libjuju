/**
  Juju AllWatcher version 3.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
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
  /**
    Next will return the current state of everything on the first call
    and subsequent calls will
  */
  next(id: number): Promise<AllWatcherNextResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest & { id: number } = {
        type: "AllWatcher",
        request: "Next",
        version: 3,
        id,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Stop stops the watcher.
  */
  stop(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest & { id: number } = {
        type: "AllWatcher",
        request: "Stop",
        version: 3,
        id,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AllWatcherV3;
