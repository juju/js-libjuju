/**
  Juju MigrationTarget version 1.
  This facade is available on:
    Controllers

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AdoptResourcesArgs {
  'model-tag': string;
  'source-controller-version': Number;
}

interface BytesResult {
  result: number[];
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

interface MigrationModelInfo {
  'agent-version': Number;
  'controller-agent-version': Number;
  name: string;
  'owner-tag': string;
  uuid: string;
}

interface ModelArgs {
  'model-tag': string;
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface SerializedModel {
  bytes: number[];
  charms: string[];
  resources: SerializedModelResource[];
  tools: SerializedModelTools[];
}

interface SerializedModelResource {
  application: string;
  'application-revision': SerializedModelResourceRevision;
  'charmstore-revision': SerializedModelResourceRevision;
  name: string;
  'unit-revisions': AdditionalProperties;
}

interface SerializedModelResourceRevision {
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

interface SerializedModelTools {
  uri: string;
  version: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the API required for the model migration
  master worker when communicating with the target controller.
*/
class MigrationTargetV1 {
  static NAME: string = 'MigrationTarget';
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
    Abort removes the specified model from the database. It is an error to
    attempt to Abort a model that has a migration mode other than importing.
  */
  abort(params: ModelArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'Abort',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Activate sets the migration mode of the model to "none", meaning it
    is ready for use. It is an error to attempt to Abort a model that
    has a migration mode other than importing.
  */
  activate(params: ModelArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'Activate',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AdoptResources asks the cloud provider to update the controller
    tags for a model's resources. This prevents the resources from
    being destroyed if the source controller is destroyed after the
    model is migrated away.
  */
  adoptResources(params: AdoptResourcesArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'AdoptResources',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CACert returns the certificate used to validate the state connection.
  */
  cACert(): Promise<BytesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'CACert',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CheckMachines compares the machines in state with the ones reported
    by the provider and reports any discrepancies.
  */
  checkMachines(params: ModelArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'CheckMachines',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Import takes a serialized Juju model, deserializes it, and
    recreates it in the receiving controller.
  */
  import(params: SerializedModel): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'Import',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LatestLogTime returns the time of the most recent log record
    received by the logtransfer endpoint. This can be used as the start
    point for streaming logs from the source if the transfer was
    interrupted.
    
    For performance reasons, not every time is tracked, so if the
    target controller died during the transfer the latest log time
    might be up to 2 minutes earlier. If the transfer was interrupted
    in some other way (like the source controller going away or a
    network partition) the time will be up-to-date.
    
    Log messages are assumed to be sent in time order (which is how
    debug-log emits them). If that isn't the case then this mechanism
    can't be used to avoid duplicates when logtransfer is restarted.
    
    Returns the zero time if no logs have been transferred.
  */
  latestLogTime(params: ModelArgs): Promise<string> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'LatestLogTime',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Prechecks ensure that the target controller is ready to accept a
    model migration.
  */
  prechecks(params: MigrationModelInfo): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MigrationTarget',
        request: 'Prechecks',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MigrationTargetV1;
