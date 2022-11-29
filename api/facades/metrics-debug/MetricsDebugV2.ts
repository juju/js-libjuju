/**
  Juju MetricsDebug version 2.
  This facade is available on:
    Models

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

export interface EntityMetrics {
  error: Error;
  metrics: MetricResult[];
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

export interface MeterStatusParam {
  code: string;
  info?: string;
  tag: string;
}

export interface MeterStatusParams {
  statues: MeterStatusParam[];
}

export interface MetricResult {
  key: string;
  labels: AdditionalProperties;
  time: string;
  unit: string;
  value: string;
}

export interface MetricResults {
  results: EntityMetrics[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MetricsDebugAPI implements the metricsdebug interface and is the concrete
  implementation of the api end point.
*/
class MetricsDebugV2 {
  static NAME = "MetricsDebug";
  static VERSION = 2;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "MetricsDebug",
        request: "GetMetrics",
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
        type: "MetricsDebug",
        request: "SetMeterStatus",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MetricsDebugV2;
