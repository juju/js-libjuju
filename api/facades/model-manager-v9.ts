/**
  Juju ModelManager version 9.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface ChangeModelCredentialParams {
  'credential-tag': string;
  'model-tag': string;
}

export interface ChangeModelCredentialsParams {
  'model-credentials': ChangeModelCredentialParams[];
}

export interface DestroyModelParams {
  'destroy-storage'?: boolean;
  force?: boolean;
  'max-wait'?: number;
  'model-tag': string;
  timeout?: number;
}

export interface DestroyModelsParams {
  models: DestroyModelParams[];
}

export interface DumpModelRequest {
  entities: Entity[];
  simplified: boolean;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

export interface MachineHardware {
  arch: string;
  'availability-zone': string;
  cores: number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  tags: string[];
}

export interface MapResult {
  error?: Error;
  result: AdditionalProperties;
}

export interface MapResults {
  results: MapResult[];
}

export interface Model {
  name: string;
  'owner-tag': string;
  type: string;
  uuid: string;
}

export interface ModelCreateArgs {
  'cloud-tag'?: string;
  config?: AdditionalProperties;
  credential?: string;
  name: string;
  'owner-tag': string;
  region?: string;
}

export interface ModelDefaultValues {
  'cloud-region'?: string;
  'cloud-tag'?: string;
  config: AdditionalProperties;
}

export interface ModelDefaults {
  controller: AdditionalProperties;
  default: AdditionalProperties;
  regions: RegionDefaults[];
}

export interface ModelDefaultsResult {
  config: AdditionalProperties;
  error?: Error;
}

export interface ModelDefaultsResults {
  results: ModelDefaultsResult[];
}

export interface ModelEntityCount {
  count: number;
  entity: string;
}

export interface ModelFilesystemInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

export interface ModelInfo {
  'agent-version': Number;
  'cloud-credential-tag'?: string;
  'cloud-credential-validity'?: boolean;
  'cloud-region'?: string;
  'cloud-tag': string;
  'controller-uuid': string;
  'default-series'?: string;
  'is-controller': boolean;
  life: string;
  machines: ModelMachineInfo[];
  migration?: ModelMigrationStatus;
  name: string;
  'owner-tag': string;
  'provider-type'?: string;
  sla: ModelSLAInfo;
  status?: EntityStatus;
  'supported-features'?: SupportedFeature[];
  type: string;
  users: ModelUserInfo[];
  uuid: string;
}

export interface ModelInfoResult {
  error: Error;
  result: ModelInfo;
}

export interface ModelInfoResults {
  results: ModelInfoResult[];
}

export interface ModelMachineInfo {
  'display-name'?: string;
  'ha-primary'?: boolean;
  hardware?: MachineHardware;
  'has-vote'?: boolean;
  id: string;
  'instance-id'?: string;
  message?: string;
  status?: string;
  'wants-vote'?: boolean;
}

export interface ModelMigrationStatus {
  end?: string;
  start: string;
  status: string;
}

export interface ModelSLAInfo {
  level: string;
  owner: string;
}

export interface ModelStatus {
  'application-count': number;
  error?: Error;
  filesystems?: ModelFilesystemInfo[];
  'hosted-machine-count': number;
  life: string;
  machines?: ModelMachineInfo[];
  'model-tag': string;
  'owner-tag': string;
  type: string;
  'unit-count': number;
  volumes?: ModelVolumeInfo[];
}

export interface ModelStatusResults {
  models: ModelStatus[];
}

export interface ModelSummariesRequest {
  all?: boolean;
  'user-tag': string;
}

export interface ModelSummary {
  'agent-version': Number;
  'cloud-credential-tag'?: string;
  'cloud-region'?: string;
  'cloud-tag': string;
  'controller-uuid': string;
  counts: ModelEntityCount[];
  'default-series'?: string;
  'is-controller': boolean;
  'last-connection': string;
  life: string;
  migration?: ModelMigrationStatus;
  name: string;
  'owner-tag': string;
  'provider-type'?: string;
  sla: ModelSLAInfo;
  status?: EntityStatus;
  type: string;
  'user-access': string;
  uuid: string;
}

export interface ModelSummaryResult {
  error: Error;
  result: ModelSummary;
}

export interface ModelSummaryResults {
  results: ModelSummaryResult[];
}

export interface ModelUnsetKeys {
  'cloud-region'?: string;
  'cloud-tag'?: string;
  keys: string[];
}

export interface ModelUserInfo {
  access: string;
  'display-name': string;
  'last-connection': string;
  'model-tag': string;
  user: string;
}

export interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

export interface ModifyModelAccess {
  access: string;
  action: string;
  'model-tag': string;
  'user-tag': string;
}

export interface ModifyModelAccessRequest {
  changes: ModifyModelAccess[];
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface RegionDefaults {
  'region-name': string;
  value: AdditionalProperties;
}

export interface SetModelDefaults {
  config: ModelDefaultValues[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface SupportedFeature {
  description: string;
  name: string;
  version?: string;
}

export interface UnsetModelDefaults {
  keys: ModelUnsetKeys[];
}

export interface UserModel {
  'last-connection': string;
  model: Model;
}

export interface UserModelList {
  'user-models': UserModel[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelManagerAPI implements the model manager interface and is
  the concrete implementation of the api end point.
*/
class ModelManagerV9 {
  static NAME: string = 'ModelManager';
  static VERSION: number = 9;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 9;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ChangeModelCredential changes cloud credential reference for models.
    These new cloud credentials must already exist on the controller.
  */
  changeModelCredential(params: ChangeModelCredentialsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ChangeModelCredential',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CreateModel creates a new model using the account and
    model config specified in the args.
  */
  createModel(params: ModelCreateArgs): Promise<ModelInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'CreateModel',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyModels will try to destroy the specified models.
    If there is a block on destruction, this method will return an error.
    From ModelManager v7 onwards, DestroyModels gains 'force' and 'max-wait' parameters.
  */
  destroyModels(params: DestroyModelsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'DestroyModels',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DumpModels will export the models into the database agnostic
    representation. The user needs to either be a controller admin, or have
    admin privileges on the model itself.
  */
  dumpModels(params: DumpModelRequest): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'DumpModels',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DumpModelsDB will gather all documents from all model collections
    for the specified model. The map result contains a map of collection
    names to lists of documents represented as maps.
  */
  dumpModelsDB(params: Entities): Promise<MapResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'DumpModelsDB',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListModelSummaries returns models that the specified user
    has access to in the current server.  Controller admins (superuser)
    can list models for any user.  Other users
    can only ask about their own models.
  */
  listModelSummaries(params: ModelSummariesRequest): Promise<ModelSummaryResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ListModelSummaries',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListModels returns the models that the specified user
    has access to in the current server.  Controller admins (superuser)
    can list models for any user.  Other users
    can only ask about their own models.
  */
  listModels(params: Entity): Promise<UserModelList> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ListModels',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelDefaultsForClouds returns the default config values for the specified
    clouds.
  */
  modelDefaultsForClouds(params: Entities): Promise<ModelDefaultsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModelDefaultsForClouds',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelInfo returns information about the specified models.
  */
  modelInfo(params: Entities): Promise<ModelInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModelInfo',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelStatus returns a summary of the model.
  */
  modelStatus(params: Entities): Promise<ModelStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModelStatus',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModifyModelAccess changes the model access granted to users.
  */
  modifyModelAccess(params: ModifyModelAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModifyModelAccess',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelDefaults writes new values for the specified default model settings.
  */
  setModelDefaults(params: SetModelDefaults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'SetModelDefaults',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnsetModelDefaults removes the specified default model settings.
  */
  unsetModelDefaults(params: UnsetModelDefaults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'UnsetModelDefaults',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelManagerV9;
