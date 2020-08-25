/**
  Juju ModelManager version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Tue, 25 Aug 2020 18:00:56 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA 516c1904ce.
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

interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

interface MachineHardware {
  arch: string;
  'availability-zone': string;
  cores: number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  tags: string[];
}

interface MapResult {
  error?: Error;
  result: AdditionalProperties;
}

interface MapResults {
  results: MapResult[];
}

interface Model {
  name: string;
  'owner-tag': string;
  type: string;
  uuid: string;
}

interface ModelCreateArgs {
  'cloud-tag'?: string;
  config?: AdditionalProperties;
  credential?: string;
  name: string;
  'owner-tag': string;
  region?: string;
}

interface ModelDefaultValues {
  'cloud-region'?: string;
  'cloud-tag'?: string;
  config: AdditionalProperties;
}

interface ModelDefaults {
  controller: AdditionalProperties;
  default: AdditionalProperties;
  regions: RegionDefaults[];
}

interface ModelDefaultsResult {
  config: AdditionalProperties;
  error?: Error;
}

interface ModelEntityCount {
  count: number;
  entity: string;
}

interface ModelFilesystemInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

interface ModelInfo {
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
  type: string;
  users: ModelUserInfo[];
  uuid: string;
}

interface ModelInfoResult {
  error: Error;
  result: ModelInfo;
}

interface ModelInfoResults {
  results: ModelInfoResult[];
}

interface ModelMachineInfo {
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

interface ModelMigrationStatus {
  end?: string;
  start: string;
  status: string;
}

interface ModelSLAInfo {
  level: string;
  owner: string;
}

interface ModelStatus {
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

interface ModelStatusResults {
  models: ModelStatus[];
}

interface ModelSummariesRequest {
  all?: boolean;
  'user-tag': string;
}

interface ModelSummary {
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

interface ModelSummaryResult {
  error: Error;
  result: ModelSummary;
}

interface ModelSummaryResults {
  results: ModelSummaryResult[];
}

interface ModelUnsetKeys {
  'cloud-region'?: string;
  'cloud-tag'?: string;
  keys: string[];
}

interface ModelUserInfo {
  access: string;
  'display-name': string;
  'last-connection': string;
  user: string;
}

interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

interface ModifyModelAccess {
  access: string;
  action: string;
  'model-tag': string;
  'user-tag': string;
}

interface ModifyModelAccessRequest {
  changes: ModifyModelAccess[];
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface RegionDefaults {
  'region-name': string;
  value: AdditionalProperties;
}

interface SetModelDefaults {
  config: ModelDefaultValues[];
}

interface UnsetModelDefaults {
  keys: ModelUnsetKeys[];
}

interface UserModel {
  'last-connection': string;
  model: Model;
}

interface UserModelList {
  'user-models': UserModel[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  ModelManagerAPIV2 provides a way to wrap the different calls between
  version 2 and version 3 of the model manager API
*/
class ModelManagerV2 {
  static NAME: string = 'ModelManager';
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
    CreateModel creates a new model using the account and
    model config specified in the args.
  */
  createModel(params: ModelCreateArgs): Promise<ModelInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'CreateModel',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyModels will try to destroy the specified models.
    If there is a block on destruction, this method will return an error.
  */
  destroyModels(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'DestroyModels',
        version: 2,
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
  dumpModels(params: Entities): Promise<MapResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'DumpModels',
        version: 2,
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
        version: 2,
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
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelDefaults returns the default config values used when creating a new model.
  */
  modelDefaults(): Promise<ModelDefaultsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModelDefaults',
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelStatus is a legacy method call to ensure that we preserve
    backward compatibility.
    TODO (anastasiamac 2017-10-26) This should be made obsolete/removed.
  */
  modelStatus(params: Entities): Promise<ModelStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelManager',
        request: 'ModelStatus',
        version: 2,
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
        version: 2,
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
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelManagerV2;
