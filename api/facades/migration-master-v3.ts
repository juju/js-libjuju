/**
  Juju MigrationMaster version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface MasterMigrationStatus {
  'migration-id': string;
  phase: string;
  'phase-changed-time': string;
  spec: MigrationSpec;
}

export interface MigrationModelInfo {
  'agent-version': Number;
  'controller-agent-version': Number;
  name: string;
  'owner-tag': string;
  uuid: string;
}

export interface MigrationSpec {
  'model-tag': string;
  'target-info': MigrationTargetInfo;
}

export interface MigrationTargetInfo {
  addrs: string[];
  'auth-tag': string;
  'ca-cert': string;
  'controller-alias'?: string;
  'controller-tag': string;
  macaroons?: string;
  password?: string;
}

export interface MinionReports {
  failed: string[];
  'migration-id': string;
  phase: string;
  'success-count': number;
  'unknown-count': number;
  'unknown-sample': string[];
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
  'target-controller-version': Number;
}

export interface ProcessRelations {
  'controller-alias': string;
}

export interface SerializedModel {
  bytes: number[];
  charms: string[];
  resources: SerializedModelResource[];
  tools: SerializedModelTools[];
}

export interface SerializedModelResource {
  application: string;
  'application-revision': SerializedModelResourceRevision;
  'charmstore-revision': SerializedModelResourceRevision;
  name: string;
  'unit-revisions': AdditionalProperties;
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
class MigrationMasterV3 {
  static NAME: string = 'MigrationMaster';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Export serializes the model associated with the API connection.
  */
  export(): Promise<SerializedModel> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'Export',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MigrationStatus returns the details and progress of the latest
    model migration.
  */
  migrationStatus(): Promise<MasterMigrationStatus> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'MigrationStatus',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MinionReportTimeout returns the configuration value for this controller that
    indicates how long the migration master worker should wait for minions to
    reported on phases of a migration.
  */
  minionReportTimeout(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'MinionReportTimeout',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MinionReports returns details of the reports made by migration
    minions to the controller for the current migration phase.
  */
  minionReports(): Promise<MinionReports> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'MinionReports',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelInfo returns essential information about the model to be
    migrated.
  */
  modelInfo(): Promise<MigrationModelInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'ModelInfo',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Prechecks performs pre-migration checks on the model and
    (source) controller.
  */
  prechecks(params: PrechecksArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'Prechecks',
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
  processRelations(params: ProcessRelations): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'ProcessRelations',
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
  reap(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'Reap',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetPhase sets the phase of the active model migration. The provided
    phase must be a valid phase value, for example QUIESCE" or
    "ABORT". See the core/migration package for the complete list.
  */
  setPhase(params: SetMigrationPhaseArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'SetPhase',
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
  setStatusMessage(params: SetMigrationStatusMessageArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'SetStatusMessage',
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
  watch(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'Watch',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchMinionReports sets up a watcher which reports when a report
    for a migration minion has arrived.
  */
  watchMinionReports(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationMaster',
        request: 'WatchMinionReports',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MigrationMasterV3;
