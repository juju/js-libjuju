/**
  Juju MachineActions version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Action {
  'execution-group'?: string;
  name: string;
  parallel?: boolean;
  parameters?: AdditionalProperties;
  receiver: string;
  tag: string;
}

export interface ActionExecutionResult {
  'action-tag': string;
  message?: string;
  results?: AdditionalProperties;
  status: string;
}

export interface ActionExecutionResults {
  results: ActionExecutionResult[];
}

export interface ActionMessage {
  message: string;
  timestamp: string;
}

export interface ActionResult {
  action: Action;
  completed: string;
  enqueued: string;
  error: Error;
  log: ActionMessage[];
  message: string;
  output: AdditionalProperties;
  started: string;
  status: string;
}

export interface ActionResults {
  results: ActionResult[];
}

export interface ActionsByReceiver {
  actions: ActionResult[];
  error: Error;
  receiver: string;
}

export interface ActionsByReceivers {
  actions: ActionsByReceiver[];
}

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
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the machineactions interface and is the concrete
  implementation of the api end point.
*/
class MachineActionsV1 {
  static NAME: string = 'MachineActions';
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
    Actions returns the Actions by Tags passed and ensures that the machine asking
    for them is the machine that has the actions
  */
  actions(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineActions',
        request: 'Actions',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    BeginActions marks the actions represented by the passed in Tags as running.
  */
  beginActions(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineActions',
        request: 'BeginActions',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FinishActions saves the result of a completed Action
  */
  finishActions(params: ActionExecutionResults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineActions',
        request: 'FinishActions',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RunningActions lists the actions running for the entities passed in.
    If we end up needing more than ListRunning at some point we could follow/abstract
    what's done in the client actions package.
  */
  runningActions(params: Entities): Promise<ActionsByReceivers> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineActions',
        request: 'RunningActions',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchActionNotifications returns a StringsWatcher for observing
    incoming action calls to a machine.
  */
  watchActionNotifications(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineActions',
        request: 'WatchActionNotifications',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MachineActionsV1;
