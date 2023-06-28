/**
  Juju RemoteRelationWatcher version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface RemoteRelationChangeEvent {
  "application-settings"?: AdditionalProperties;
  "application-token": string;
  "bakery-version"?: number;
  "changed-units"?: RemoteRelationUnitChange[];
  "departed-units"?: number[];
  "force-cleanup"?: boolean;
  life: string;
  macaroons?: Macaroon[];
  "relation-token": string;
  suspended?: boolean;
  "suspended-reason"?: string;
  "unit-count": number;
}

export interface RemoteRelationUnitChange {
  settings?: AdditionalProperties;
  "unit-id": number;
}

export interface RemoteRelationWatchResult {
  changes: RemoteRelationChangeEvent;
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvRemoteRelationWatcher defines the API wrapping a
  state.RelationUnitsWatcher but serving the events it emits as
  fully-expanded params.RemoteRelationChangeEvents so they can be
  used across model/controller boundaries.
*/
class RemoteRelationWatcherV1 implements Facade {
  static NAME = "RemoteRelationWatcher";
  static VERSION = 1;

  NAME = "RemoteRelationWatcher";
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

  */
  next(params: any): Promise<RemoteRelationWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "RemoteRelationWatcher",
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
        type: "RemoteRelationWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default RemoteRelationWatcherV1;
