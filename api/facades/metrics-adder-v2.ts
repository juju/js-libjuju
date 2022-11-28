/**
  Juju MetricsAdder version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


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
  'charm-url': string;
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
class MetricsAdderV2 {
  static NAME: string = 'MetricsAdder';
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
    AddMetricBatches implements the MetricsAdder interface.
  */
  addMetricBatches(params: MetricBatchParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MetricsAdder',
        request: 'AddMetricBatches',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MetricsAdderV2;
