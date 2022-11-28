/**
  Juju LogForwarding version 1.
  This facade is available on:
    Controller-machine-agent

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

export interface LogForwardingGetLastSentParams {
  ids: LogForwardingID[];
}

export interface LogForwardingGetLastSentResult {
  err: Error;
  'record-id': number;
  'record-timestamp': number;
}

export interface LogForwardingGetLastSentResults {
  results: LogForwardingGetLastSentResult[];
}

export interface LogForwardingID {
  model: string;
  sink: string;
}

export interface LogForwardingSetLastSentParam {
  LogForwardingID: LogForwardingID;
  model: string;
  'record-id': number;
  'record-timestamp': number;
  sink: string;
}

export interface LogForwardingSetLastSentParams {
  params: LogForwardingSetLastSentParam[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  LogForwardingAPI is the concrete implementation of the api end point.
*/
class LogForwardingV1 {
  static NAME: string = 'LogForwarding';
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
    GetLastSent is a bulk call that gets the log forwarding "last sent"
    record ID for each requested target.
  */
  getLastSent(params: LogForwardingGetLastSentParams): Promise<LogForwardingGetLastSentResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'LogForwarding',
        request: 'GetLastSent',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetLastSent is a bulk call that sets the log forwarding "last sent"
    record ID for each requested target.
  */
  setLastSent(params: LogForwardingSetLastSentParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'LogForwarding',
        request: 'SetLastSent',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default LogForwardingV1;
