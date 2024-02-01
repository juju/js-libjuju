/**
  Juju Reboot version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface RebootActionResult {
  error?: Error;
  result?: string;
}

export interface RebootActionResults {
  results?: RebootActionResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  RebootAPI provides access to the Upgrader API facade.
*/
class RebootV2 implements Facade {
  static NAME = "Reboot";
  static VERSION = 2;

  NAME = "Reboot";
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
    ClearReboot will clear the reboot flag on provided machines, if it exists.
  */
  clearReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Reboot",
        request: "ClearReboot",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetRebootAction returns the action a machine agent should take.
    If a reboot flag is set on the machine, then that machine is
    expected to reboot (params.ShouldReboot).
    a reboot flag set on the machine parent or grandparent, will
    cause the machine to shutdown (params.ShouldShutdown).
    If no reboot flag is set, the machine should do nothing (params.ShouldDoNothing).
  */
  getRebootAction(params: Entities): Promise<RebootActionResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Reboot",
        request: "GetRebootAction",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RequestReboot sets the reboot flag on the provided machines
  */
  requestReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Reboot",
        request: "RequestReboot",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchForRebootEvent starts a watcher to track if there is a new
    reboot request on the machines ID or any of its parents (in case we are a container).
  */
  watchForRebootEvent(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Reboot",
        request: "WatchForRebootEvent",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default RebootV2;
