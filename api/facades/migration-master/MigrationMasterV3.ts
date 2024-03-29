/**
  Juju MigrationMaster version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface MasterMigrationStatus {
  "migration-id": string;
  phase: string;
  "phase-changed-time": string;
  spec: MigrationSpec;
}

export interface MigrationModelInfo {
  "agent-version": string;
  "controller-agent-version": Number;
  "facade-versions"?: Record<string, number[]>;
  name: string;
  "owner-tag": string;
  uuid: string;
}

export interface MigrationSourceInfo {
  addrs: string[];
  "ca-cert": string;
  "controller-alias"?: string;
  "controller-tag": string;
  "local-related-models": string[];
}

export interface MigrationSpec {
  "model-tag": string;
  "target-info": MigrationTargetInfo;
}

export interface MigrationTargetInfo {
  addrs: string[];
  "auth-tag": string;
  "ca-cert": string;
  "controller-alias"?: string;
  "controller-tag": string;
  macaroons?: string;
  password?: string;
}

export interface MinionReports {
  failed: string[];
  "migration-id": string;
  phase: string;
  "success-count": number;
  "unknown-count": number;
  "unknown-sample": string[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface PrechecksArgs {
  "target-controller-version": Number;
}

export interface ProcessRelations {
  "controller-alias": string;
}

export interface SerializedModel {
  bytes: number[];
  charms: string[];
  resources: SerializedModelResource[];
  tools: SerializedModelTools[];
}

export interface SerializedModelResource {
  application: string;
  "application-revision": SerializedModelResourceRevision;
  "charmstore-revision": SerializedModelResourceRevision;
  name: string;
  "unit-revisions": Record<string, SerializedModelResourceRevision>;
}

export interface SerializedModelResourceRevision {
  description: string;
  fingerprint: string;
  origin: string;
  path: string;
  revision: number;
  size: number;
  timestamp: string;
  type: string;
  username?: string;
}

export interface SerializedModelTools {
  uri: string;
  version: string;
}

export interface SetMigrationPhaseArgs {
  phase: string;
}

export interface SetMigrationStatusMessageArgs {
  message: string;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the API required for the model migration
  master worker.
*/
class MigrationMasterV3 implements Facade {
  static NAME = "MigrationMaster";
  static VERSION = 3;

  NAME = "MigrationMaster";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    Export serializes the model associated with the API connection.
  */
  export(params: any): Promise<SerializedModel> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "Export",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MigrationStatus returns the details and progress of the latest
    model migration.
  */
  migrationStatus(params: any): Promise<MasterMigrationStatus> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "MigrationStatus",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MinionReportTimeout returns the configuration value for this controller that
    indicates how long the migration master worker should wait for minions to
    reported on phases of a migration.
  */
  minionReportTimeout(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "MinionReportTimeout",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MinionReports returns details of the reports made by migration
    minions to the controller for the current migration phase.
  */
  minionReports(params: any): Promise<MinionReports> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "MinionReports",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelInfo returns essential information about the model to be
    migrated.
  */
  modelInfo(params: any): Promise<MigrationModelInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "ModelInfo",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Prechecks performs pre-migration checks on the model and
    (source) controller.
  */
  prechecks(params: PrechecksArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "Prechecks",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProcessRelations processes any relations that need updating after an export.
    This should help fix any remoteApplications that have been migrated.
  */
  processRelations(params: ProcessRelations): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "ProcessRelations",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Reap removes all documents for the model associated with the API
    connection.
  */
  reap(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "Reap",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetPhase sets the phase of the active model migration. The provided
    phase must be a valid phase value, for example QUIESCE" or
    "ABORT". See the core/migration package for the complete list.
  */
  setPhase(params: SetMigrationPhaseArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "SetPhase",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetStatusMessage sets a human readable status message containing
    information about the migration's progress. This will be shown in
    status output shown to the end user.
  */
  setStatusMessage(params: SetMigrationStatusMessageArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "SetStatusMessage",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SourceControllerInfo returns the details required to connect to
    the source controller for model migration.
  */
  sourceControllerInfo(params: any): Promise<MigrationSourceInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "SourceControllerInfo",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Watch starts watching for an active migration for the model
    associated with the API connection. The returned id should be used
    with the NotifyWatcher facade to receive events.
  */
  watch(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "Watch",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchMinionReports sets up a watcher which reports when a report
    for a migration minion has arrived.
  */
  watchMinionReports(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MigrationMaster",
        request: "WatchMinionReports",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MigrationMasterV3;
