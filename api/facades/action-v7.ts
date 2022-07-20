/**
  Juju Action version 7.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Action {
  'execution-group'?: string;
  name: string;
  parallel?: boolean;
  parameters?: AdditionalProperties;
  receiver: string;
  tag: string;
}

interface ActionMessage {
  message: string;
  timestamp: string;
}

interface ActionResult {
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

interface ActionResults {
  results: ActionResult[];
}

interface ActionSpec {
  description: string;
  params: AdditionalProperties;
}

interface Actions {
  actions: Action[];
}

interface ApplicationCharmActionsResult {
  actions: AdditionalProperties;
  'application-tag': string;
  error: Error;
}

interface ApplicationsCharmActionsResults {
  results: ApplicationCharmActionsResult[];
}

interface EnqueuedActions {
  actions?: ActionResult[];
  operation: string;
}

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

interface OperationQueryArgs {
  actions: string[];
  applications: string[];
  limit: number;
  machines: string[];
  offset: number;
  status: string[];
  units: string[];
}

interface OperationResult {
  actions?: ActionResult[];
  completed?: string;
  enqueued?: string;
  error?: Error;
  fail?: string;
  operation: string;
  started?: string;
  status?: string;
  summary: string;
}

interface OperationResults {
  results: OperationResult[];
  truncated: boolean;
}

interface RunParams {
  applications?: string[];
  commands: string;
  'execution-group'?: string;
  machines?: string[];
  parallel?: boolean;
  timeout: number;
  units?: string[];
  'workload-context'?: boolean;
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv7 provides the Action API facade for version 7.
*/
class ActionV7 {
  static NAME: string = 'Action';
  static VERSION: number = 7;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 7;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Actions takes a list of ActionTags, and returns the full Action for
    each ID.
  */
  actions(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Actions',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ApplicationsCharmsActions returns a slice of charm Actions for a slice of
    services.
  */
  applicationsCharmsActions(params: Entities): Promise<ApplicationsCharmActionsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ApplicationsCharmsActions',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Cancel attempts to cancel enqueued Actions from running.
  */
  cancel(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Cancel',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    EnqueueOperation takes a list of Actions and queues them up to be executed as
    an operation, each action running as a task on the designated ActionReceiver.
    We return the ID of the overall operation and each individual task.
  */
  enqueueOperation(params: Actions): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'EnqueueOperation',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListOperations fetches the called actions for specified apps/units.
  */
  listOperations(params: OperationQueryArgs): Promise<OperationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ListOperations',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Operations fetches the specified operation ids.
  */
  operations(params: Entities): Promise<OperationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Operations',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Run the commands specified on the machines identified through the
    list of machines, units and services.
  */
  run(params: RunParams): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Run',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RunOnAllMachines attempts to run the specified command on all the machines.
  */
  runOnAllMachines(params: RunParams): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'RunOnAllMachines',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchActionsProgress creates a watcher that reports on action log messages.
  */
  watchActionsProgress(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'WatchActionsProgress',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ActionV7;
