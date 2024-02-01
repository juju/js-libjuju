/**
  Juju StatusHistory version 2.
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

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ModelConfigResult {
  config: AdditionalProperties;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface StatusHistoryPruneArgs {
  "max-history-mb": number;
  "max-history-time": number;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the concrete implementation of the Pruner endpoint.
*/
class StatusHistoryV2 implements Facade {
  static NAME = "StatusHistory";
  static VERSION = 2;

  NAME = "StatusHistory";
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
    ModelConfig returns the current model's configuration.
  */
  modelConfig(params: any): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "StatusHistory",
        request: "ModelConfig",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Prune endpoint removes status history entries until
    only the ones newer than now - p.MaxHistoryTime remain and
    the history is smaller than p.MaxHistoryMB.
  */
  prune(params: StatusHistoryPruneArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "StatusHistory",
        request: "Prune",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchForModelConfigChanges returns a NotifyWatcher that observes
    changes to the model configuration.
    Note that although the NotifyWatchResult contains an Error field,
    it's not used because we are only returning a single watcher,
    so we use the regular error return.
  */
  watchForModelConfigChanges(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "StatusHistory",
        request: "WatchForModelConfigChanges",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default StatusHistoryV2;
