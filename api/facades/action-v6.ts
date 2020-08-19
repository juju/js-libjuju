/**
  Juju Action version 6.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Action {
  name: string;
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

interface ActionsByName {
  actions: ActionResult[];
  error: Error;
  name: string;
}

interface ActionsByNames {
  actions: ActionsByName[];
}

interface ActionsByReceiver {
  actions: ActionResult[];
  error: Error;
  receiver: string;
}

interface ActionsByReceivers {
  actions: ActionsByReceiver[];
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
  actions?: StringResult[];
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

interface FindActionsByNames {
  names: string[];
}

interface FindTags {
  prefixes: string[];
}

interface FindTagsResults {
  matches: AdditionalProperties;
}

interface OperationQueryArgs {
  actions: string[];
  applications: string[];
  limit: number;
  offset: number;
  status: string[];
  units: string[];
}

interface OperationResult {
  actions?: ActionResult[];
  completed?: string;
  enqueued?: string;
  error?: Error;
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
  machines?: string[];
  timeout: number;
  units?: string[];
  'workload-context'?: boolean;
}

interface StringResult {
  error?: Error;
  result: string;
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
  APIv6 provides the Action API facade for version 6.
*/
class ActionV6 {
  static NAME: string = 'Action';
  static VERSION: number = 6;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 6;
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
        version: 6,
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
        version: 6,
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
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Enqueue takes a list of Actions and queues them up to be executed by
    the designated ActionReceiver, returning the params.Action for each
    enqueued Action, or an error if there was a problem enqueueing the
    Action.
  */
  enqueue(params: Actions): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Enqueue',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    EnqueueOperation takes a list of Actions and queues them up to be executed as
    an operation, each action running as a task on the the designated ActionReceiver.
    We return the ID of the overall operation and each individual task.
  */
  enqueueOperation(params: Actions): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'EnqueueOperation',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FindActionTagsByPrefix takes a list of string prefixes and finds
    corresponding ActionTags that match that prefix.
    TODO(juju3) - rename API method since we only need prefix matching for UUIDs
  */
  findActionTagsByPrefix(params: FindTags): Promise<FindTagsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'FindActionTagsByPrefix',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  findActionsByNames(params: FindActionsByNames): Promise<ActionsByNames> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'FindActionsByNames',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListAll takes a list of Entities representing ActionReceivers and
    returns all of the Actions that have been enqueued or run by each of
    those Entities.
  */
  listAll(params: Entities): Promise<ActionsByReceivers> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ListAll',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListCompleted takes a list of Entities representing ActionReceivers
    and returns all of the Actions that have been run on each of those
    Entities.
  */
  listCompleted(params: Entities): Promise<ActionsByReceivers> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ListCompleted',
        version: 6,
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
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListPending takes a list of Entities representing ActionReceivers
    and returns all of the Actions that are enqueued for each of those
    Entities.
  */
  listPending(params: Entities): Promise<ActionsByReceivers> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ListPending',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListRunning takes a list of Entities representing ActionReceivers and
    returns all of the Actions that have are running on each of those
    Entities.
  */
  listRunning(params: Entities): Promise<ActionsByReceivers> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'ListRunning',
        version: 6,
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
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Run the commands specified on the machines identified through the
    list of machines, units and services.
  */
  run(params: RunParams): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'Run',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RunOnAllMachines attempts to run the specified command on all the machines.
  */
  runOnAllMachines(params: RunParams): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Action',
        request: 'RunOnAllMachines',
        version: 6,
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
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ActionV6;
