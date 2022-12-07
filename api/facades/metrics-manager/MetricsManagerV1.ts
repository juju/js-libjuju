/**
  Juju MetricsManager version 1.
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MetricsManagerAPI implements the metrics manager interface and is the concrete
  implementation of the api end point.
*/
class MetricsManagerV1 implements Facade {
  static NAME = "MetricsManager";
  static VERSION = 1;

  NAME = "MetricsManager";
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
    AddJujuMachineMetrics adds a metric that counts the number of
    non-container machines in the current model.
  */
  addJujuMachineMetrics(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MetricsManager",
        request: "AddJujuMachineMetrics",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CleanupOldMetrics removes old metrics from the collection.
    The single arg params is expected to contain and model uuid.
    Even though the call will delete all metrics across models
    it serves to validate that the connection has access to at least one model.
  */
  cleanupOldMetrics(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MetricsManager",
        request: "CleanupOldMetrics",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SendMetrics will send any unsent metrics onto the metric collection service.
  */
  sendMetrics(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MetricsManager",
        request: "SendMetrics",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MetricsManagerV1;
