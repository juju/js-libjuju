/**
  Juju ModelSummaryWatcher version 1.
  This facade is available on:
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface ModelAbstract {
  admins?: string[];
  annotations?: Record<string, string>;
  cloud?: string;
  controller?: string;
  credential?: string;
  messages?: ModelSummaryMessage[];
  name?: string;
  region?: string;
  removed?: boolean;
  size?: ModelSummarySize;
  status?: string;
  uuid: string;
}

export interface ModelSummaryMessage {
  agent: string;
  message: string;
}

export interface ModelSummarySize {
  applications?: number;
  containers?: number;
  machines?: number;
  relations?: number;
  units?: number;
}

export interface SummaryWatcherNextResults {
  models: ModelAbstract[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SrvModelSummaryWatcher defines the API methods on a ModelSummaryWatcher.
*/
class ModelSummaryWatcherV1 implements Facade {
  static NAME = "ModelSummaryWatcher";
  static VERSION = 1;

  NAME = "ModelSummaryWatcher";
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
    Next will return the current state of everything on the first call
    and subsequent calls will return just those model summaries that have
    changed.
  */
  next(params: any): Promise<SummaryWatcherNextResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelSummaryWatcher",
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
        type: "ModelSummaryWatcher",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelSummaryWatcherV1;
