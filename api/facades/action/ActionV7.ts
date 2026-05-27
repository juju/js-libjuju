/**
  Juju Action version 7.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Action {
  "execution-group"?: string;
  name: string;
  parallel?: boolean;
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

export interface ApplicationCharmActionsResult {
  actions?: Record<string, ActionSpec>;
  "application-tag"?: string;
  error?: Error;
}

export interface ApplicationsCharmActionsResults {
  results?: ApplicationCharmActionsResult[];
}

export interface EnqueuedActions {
  actions?: ActionResult[];
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
  fail?: string;
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
  "execution-group"?: string;
  machines?: string[];
  parallel?: boolean;
  timeout: number;
  units?: string[];
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

class ActionV7 implements Facade {
  static NAME = "Action";
  static VERSION = 7;

  NAME = "Action";
  VERSION = 7;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  actions(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "Actions",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  applicationsCharmsActions(
    params: Entities
  ): Promise<ApplicationsCharmActionsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "ApplicationsCharmsActions",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  cancel(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "Cancel",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  enqueueOperation(params: Actions): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "EnqueueOperation",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  listOperations(params: OperationQueryArgs): Promise<OperationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "ListOperations",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  operations(params: Entities): Promise<OperationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "Operations",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  run(params: RunParams): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "Run",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  runOnAllMachines(params: RunParams): Promise<EnqueuedActions> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "RunOnAllMachines",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  watchActionsProgress(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Action",
        request: "WatchActionsProgress",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ActionV7;
