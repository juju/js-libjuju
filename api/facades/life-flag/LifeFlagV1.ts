/**
  Juju LifeFlag version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
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

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class LifeFlagV1 {
  static NAME = "LifeFlag";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    Life returns the life status of every supplied entity, where available.
  */
  life(params: Entities): Promise<LifeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "LifeFlag",
        request: "Life",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Watch starts an NotifyWatcher for each given entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "LifeFlag",
        request: "Watch",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default LifeFlagV1;
