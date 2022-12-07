/**
  Juju MetricsAdder version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface Metric {
  key: string;
  labels?: AdditionalProperties;
  time: string;
  value: string;
}

export interface MetricBatch {
  "charm-url": string;
  created: string;
  metrics: Metric[];
  uuid: string;
}

export interface MetricBatchParam {
  batch: MetricBatch;
  tag: string;
}

export interface MetricBatchParams {
  batches: MetricBatchParam[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MetricsAdderAPI implements the metrics adder interface and is the concrete
  implementation of the API end point.
*/
class MetricsAdderV2 implements Facade {
  static NAME = "MetricsAdder";
  static VERSION = 2;

  NAME = "MetricsAdder";
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
    AddMetricBatches implements the MetricsAdder interface.
  */
  addMetricBatches(params: MetricBatchParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MetricsAdder",
        request: "AddMetricBatches",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MetricsAdderV2;
