/**
  Juju Reboot version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
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

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface RebootActionResult {
  error: Error;
  result: string;
}

interface RebootActionResults {
  results: RebootActionResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  RebootAPI provides access to the Upgrader API facade.
*/
class RebootV2 {
  static NAME: string = 'Reboot';
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
    ClearReboot will clear the reboot flag on provided machines, if it exists.
  */
  clearReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Reboot',
        request: 'ClearReboot',
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
        type: 'Reboot',
        request: 'GetRebootAction',
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
        type: 'Reboot',
        request: 'RequestReboot',
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
  watchForRebootEvent(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Reboot',
        request: 'WatchForRebootEvent',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RebootV2;
