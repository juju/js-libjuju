/**
  Juju Logger version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
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

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  LoggerAPI implements the Logger interface and is the concrete
  implementation of the api end point.
*/
class LoggerV1 {
  static NAME = "Logger";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Logger",
        request: "LoggingConfig",
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
        type: "Logger",
        request: "WatchLoggingConfig",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default LoggerV1;
