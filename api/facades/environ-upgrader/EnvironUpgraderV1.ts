/**
  Juju EnvironUpgrader version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
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

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

export interface IntResult {
  error?: Error;
  result: number;
}

export interface IntResults {
  results: IntResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface SetModelEnvironVersion {
  "model-tag": string;
  version: number;
}

export interface SetModelEnvironVersions {
  models: SetModelEnvironVersion[];
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class EnvironUpgraderV1 implements Facade {
  static NAME = "EnvironUpgrader";
  static VERSION = 1;

  NAME = "EnvironUpgrader";
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
    ModelEnvironVersion returns the current version of the environ corresponding
    to each specified model.
  */
  modelEnvironVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "EnvironUpgrader",
        request: "ModelEnvironVersion",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelTargetEnvironVersion returns the target version of the environ
    corresponding to each specified model. The target version is the
    environ provider's version.
  */
  modelTargetEnvironVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "EnvironUpgrader",
        request: "ModelTargetEnvironVersion",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetModelEnvironVersion sets the current version of the environ corresponding
    to each specified model.
  */
  setModelEnvironVersion(
    params: SetModelEnvironVersions
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "EnvironUpgrader",
        request: "SetModelEnvironVersion",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetModelStatus sets the status of each given model.
  */
  setModelStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "EnvironUpgrader",
        request: "SetModelStatus",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelEnvironVersion watches for changes to the environ version of the
    specified models.

    NOTE(axw) this is currently implemented in terms of state.Model.Watch, so
    the client may be notified of changes unrelated to the environ version.
  */
  watchModelEnvironVersion(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "EnvironUpgrader",
        request: "WatchModelEnvironVersion",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default EnvironUpgraderV1;
