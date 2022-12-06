/**
  Juju ExternalControllerUpdater version 1.
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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ExternalControllerInfo {
  addrs: string[];
  "ca-cert": string;
  "controller-alias": string;
  "controller-tag": string;
}

export interface ExternalControllerInfoResult {
  error: Error;
  result: ExternalControllerInfo;
}

export interface ExternalControllerInfoResults {
  results: ExternalControllerInfoResult[];
}

export interface SetExternalControllerInfoParams {
  info: ExternalControllerInfo;
}

export interface SetExternalControllersInfoParams {
  controllers: SetExternalControllerInfoParams[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ExternalControllerUpdaterAPI provides access to the CrossModelRelations API facade.
*/
class ExternalControllerUpdaterV1 {
  static NAME = "ExternalControllerUpdater";
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
    ExternalControllerInfo returns the info for the specified external controllers.
  */
  externalControllerInfo(
    params: Entities
  ): Promise<ExternalControllerInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ExternalControllerUpdater",
        request: "ExternalControllerInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetExternalControllerInfo saves the info for the specified external controllers.
  */
  setExternalControllerInfo(
    params: SetExternalControllersInfoParams
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ExternalControllerUpdater",
        request: "SetExternalControllerInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchExternalControllers watches for the addition and removal of external
    controller records to the local controller's database.
  */
  watchExternalControllers(params: any): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ExternalControllerUpdater",
        request: "WatchExternalControllers",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ExternalControllerUpdaterV1;
