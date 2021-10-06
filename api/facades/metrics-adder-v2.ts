/**
  Juju MetricsAdder version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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

interface Metric {
  key: string;
  labels?: AdditionalProperties;
  time: string;
  value: string;
}

interface MetricBatch {
  'charm-url': string;
  created: string;
  metrics: Metric[];
  uuid: string;
}

interface MetricBatchParam {
  batch: MetricBatch;
  tag: string;
}

interface MetricBatchParams {
  batches: MetricBatchParam[];
}

interface AdditionalProperties {
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
