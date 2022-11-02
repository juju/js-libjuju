/**
  Juju MetricsManager version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  MetricsManagerAPI implements the metrics manager interface and is the concrete
  implementation of the api end point.
*/
class MetricsManagerV1 {
  static NAME: string = 'MetricsManager';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AddJujuMachineMetrics adds a metric that counts the number of
    non-container machines in the current model.
  */
  addJujuMachineMetrics(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MetricsManager',
        request: 'AddJujuMachineMetrics',
        version: 1,
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
        type: 'MetricsManager',
        request: 'CleanupOldMetrics',
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
        type: 'MetricsManager',
        request: 'SendMetrics',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MetricsManagerV1;
