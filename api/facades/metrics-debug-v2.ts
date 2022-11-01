/**
  Juju MetricsDebug version 2.
  This facade is available on:
    Models

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

interface EntityMetrics {
  error: Error;
  metrics: MetricResult[];
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

interface MeterStatusParam {
  code: string;
  info?: string;
  tag: string;
}

interface MeterStatusParams {
  statues: MeterStatusParam[];
}

interface MetricResult {
  key: string;
  labels: AdditionalProperties;
  time: string;
  unit: string;
  value: string;
}

interface MetricResults {
  results: EntityMetrics[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  MetricsDebugAPI implements the metricsdebug interface and is the concrete
  implementation of the api end point.
*/
class MetricsDebugV2 {
  static NAME: string = 'MetricsDebug';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    GetMetrics returns all metrics stored by the state server.
  */
  getMetrics(params: Entities): Promise<MetricResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MetricsDebug',
        request: 'GetMetrics',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetMeterStatus sets meter statuses for entities.
  */
  setMeterStatus(params: MeterStatusParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MetricsDebug',
        request: 'SetMeterStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MetricsDebugV2;
