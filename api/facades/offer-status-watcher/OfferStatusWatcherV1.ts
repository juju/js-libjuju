/**
  Juju OfferStatusWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface OfferStatusChange {
  "offer-name": string;
  status: EntityStatus;
}

export interface OfferStatusWatchResult {
  changes: OfferStatusChange[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvOfferStatusWatcher defines the API wrapping a crossmodelrelations.OfferStatusWatcher.
*/
class OfferStatusWatcherV1 implements Facade {
  static NAME = "OfferStatusWatcher";
  static VERSION = 1;

  NAME = "OfferStatusWatcher";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvOfferStatusWatcher.
  */
  next(params: any): Promise<OfferStatusWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "OfferStatusWatcher",
        request: "Next",
        version: 1,
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
        type: "OfferStatusWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default OfferStatusWatcherV1;
