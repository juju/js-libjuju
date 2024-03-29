/**
  Juju Action version 6.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Action {
  name: string;
  parameters?: AdditionalProperties;
  receiver: string;
  tag: string;
}

export interface ActionMessage {
  message: string;
  timestamp: string;
}

export interface ActionResult {
  action?: Action;
  completed?: string;
  enqueued?: string;
  error?: Error;
  log?: ActionMessage[];
  message?: string;
  output?: AdditionalProperties;
  started?: string;
  status?: string;
}

export interface ActionResults {
  results?: ActionResult[];
}

export interface ActionSpec {
  description: string;
  params: AdditionalProperties;
}

export interface Actions {
  actions?: Action[];
}

export interface ActionsByName {
  actions?: ActionResult[];
  error?: Error;
  name?: string;
}

export interface ActionsByNames {
  actions?: ActionsByName[];
}

export interface ActionsByReceiver {
  actions?: ActionResult[];
  error?: Error;
  receiver?: string;
}

export interface ActionsByReceivers {
  actions?: ActionsByReceiver[];
}

export interface ApplicationCharmActionsResult {
  actions?: Record<string, ActionSpec>;
  "application-tag"?: string;
  error?: Error;
}

export interface ApplicationsCharmActionsResults {
  results?: ApplicationCharmActionsResult[];
}

export interface EnqueuedActions {
  actions?: StringResult[];
  operation: string;
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

export interface FindActionsByNames {
  names?: string[];
}

export interface FindTags {
  prefixes: string[];
}

export interface FindTagsResults {
  matches: Record<string, Entity[]>;
}

export interface OperationQueryArgs {
  actions?: string[];
  applications?: string[];
  limit?: number;
  machines?: string[];
  offset?: number;
  status?: string[];
  units?: string[];
}

export interface OperationResult {
  actions?: ActionResult[];
  completed?: string;
  enqueued?: string;
  error?: Error;
  operation: string;
  started?: string;
  status?: string;
  summary: string;
}

export interface OperationResults {
  results?: OperationResult[];
  truncated?: boolean;
}

export interface RunParams {
  applications?: string[];
  commands: string;
  machines?: string[];
  timeout: number;
  units?: string[];
  "workload-context"?: boolean;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv6 provides the Action API facade for version 6.
*/
class ActionV6 implements Facade {
  static NAME = "Action";
  static VERSION = 6;

  NAME = "Action";
  VERSION = 6;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Action",
        request: "Actions",
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
  applicationsCharmsActions(
    params: Entities
  ): Promise<ApplicationsCharmActionsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "ApplicationsCharmsActions",
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
        type: "Action",
        request: "Cancel",
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
        type: "Action",
        request: "Enqueue",
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
        type: "Action",
        request: "EnqueueOperation",
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
        type: "Action",
        request: "FindActionTagsByPrefix",
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
        type: "Action",
        request: "FindActionsByNames",
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
        type: "Action",
        request: "ListAll",
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
        type: "Action",
        request: "ListCompleted",
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
        type: "Action",
        request: "ListOperations",
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
        type: "Action",
        request: "ListPending",
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
        type: "Action",
        request: "ListRunning",
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
        type: "Action",
        request: "Operations",
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
        type: "Action",
        request: "Run",
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
        type: "Action",
        request: "RunOnAllMachines",
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
        type: "Action",
        request: "WatchActionsProgress",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ActionV6;
