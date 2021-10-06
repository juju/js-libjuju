/**
  Juju Logger version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
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

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  LoggerAPI implements the Logger interface and is the concrete
  implementation of the api end point.
*/
class LoggerV1 {
  static NAME: string = 'Logger';
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
    LoggingConfig reports the logging configuration for the agents specified.
  */
  loggingConfig(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Logger',
        request: 'LoggingConfig',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchLoggingConfig starts a watcher to track changes to the logging config
    for the agents specified..  Unfortunately the current infrastructure makes
    watching parts of the config non-trivial, so currently any change to the
    config will cause the watcher to notify the client.
  */
  watchLoggingConfig(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Logger',
        request: 'WatchLoggingConfig',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default LoggerV1;
