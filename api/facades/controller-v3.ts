/**
  Juju Controller version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AllWatcherId {
  'watcher-id': string;
}

interface CloudCredential {
  attrs?: AdditionalProperties;
  'auth-type': string;
  redacted?: string[];
}

interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  'identity-endpoint'?: string;
  name: string;
  region?: string;
  'storage-endpoint'?: string;
  type: string;
}

interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

interface CloudSpecResults {
  results: CloudSpecResult[];
}

interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

interface ControllerConfigResult {
  config: AdditionalProperties;
}

interface DestroyControllerArgs {
  'destroy-models': boolean;
  'destroy-storage'?: boolean;
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

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface HostedModelConfig {
  'cloud-spec'?: CloudSpec;
  config?: AdditionalProperties;
  error?: Error;
  name: string;
  owner: string;
}

interface HostedModelConfigsResults {
  models: HostedModelConfig[];
}

interface InitiateMigrationArgs {
  specs: MigrationSpec[];
}

interface InitiateMigrationResult {
  error?: Error;
  'migration-id': string;
  'model-tag': string;
}

interface InitiateMigrationResults {
  results: InitiateMigrationResult[];
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

interface MigrationSpec {
  'model-tag': string;
  'target-info': MigrationTargetInfo;
}

interface MigrationTargetInfo {
  addrs: string[];
  'auth-tag': string;
  'ca-cert': string;
  'controller-alias'?: string;
  'controller-tag': string;
  macaroons?: string;
  password?: string;
}

interface Model {
  name: string;
  'owner-tag': string;
  type: string;
  uuid: string;
}

interface ModelBlockInfo {
  blocks: string[];
  'model-uuid': string;
  name: string;
  'owner-tag': string;
}

interface ModelBlockInfoList {
  models: ModelBlockInfo[];
}

interface ModelConfigResults {
  config: AdditionalProperties;
}

interface ModelFilesystemInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
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

interface ModelTag {
  [key: string]: AdditionalProperties;
}

interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

interface ModifyControllerAccess {
  access: string;
  action: string;
  'user-tag': string;
}

interface ModifyControllerAccessRequest {
  changes: ModifyControllerAccess[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface RemoveBlocksArgs {
  all: boolean;
}

interface UserAccess {
  access: string;
  'user-tag': string;
}

interface UserAccessResult {
  error: Error;
  result: UserAccess;
}

interface UserAccessResults {
  results: UserAccessResult[];
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
  ControllerAPIv3 provides the v3 Controller API.
*/
class ControllerV3 {
  static NAME: string = 'Controller';
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
    AllModels allows controller administrators to get the list of all the
    models in the controller.
  */
  allModels(): Promise<UserModelList> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'AllModels',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudSpec returns the model's cloud spec.
  */
  cloudSpec(params: Entities): Promise<CloudSpecResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'CloudSpec',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(params: Entities): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ControllerAPIInfoForModels',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ControllerConfig',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyController destroys the controller.
    
    The v3 implementation of DestroyController ignores the DestroyStorage
    field of the arguments, and unconditionally destroys all storage in
    the controller.
    
    See ControllerAPIv4.DestroyController for more details.
  */
  destroyController(params: DestroyControllerArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'DestroyController',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetCloudSpec constructs the CloudSpec for a validated and authorized model.
  */
  getCloudSpec(params: ModelTag): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'GetCloudSpec',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetControllerAccess returns the level of access the specified users
    have on the controller.
  */
  getControllerAccess(params: Entities): Promise<UserAccessResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'GetControllerAccess',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    HostedModelConfigs returns all the information that the client needs in
    order to connect directly with the host model's provider and destroy it
    directly.
  */
  hostedModelConfigs(): Promise<HostedModelConfigsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'HostedModelConfigs',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    IdentityProviderURL isn't on the v6 API.
  */
  identityProviderURL(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'IdentityProviderURL',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InitiateMigration attempts to begin the migration of one or
    more models to other controllers.
  */
  initiateMigration(params: InitiateMigrationArgs): Promise<InitiateMigrationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'InitiateMigration',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListBlockedModels returns a list of all models on the controller
    which have a block in place.  The resulting slice is sorted by model
    name, then owner. Callers must be controller administrators to retrieve the
    list.
  */
  listBlockedModels(): Promise<ModelBlockInfoList> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ListBlockedModels',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelConfig returns the model config for the controller
    model.  For information on the current model, use
    client.ModelGet
  */
  modelConfig(): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ModelConfig',
        version: 3,
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
        type: 'Controller',
        request: 'ModelStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModifyControllerAccess changes the model access granted to users.
  */
  modifyControllerAccess(params: ModifyControllerAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ModifyControllerAccess',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MongoVersion isn't on the v5 API.
  */
  mongoVersion(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'MongoVersion',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveBlocks removes all the blocks in the controller.
  */
  removeBlocks(params: RemoveBlocksArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'RemoveBlocks',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAllModels starts watching events for all models in the
    controller. The returned AllWatcherId should be used with Next on the
    AllModelWatcher endpoint to receive deltas.
  */
  watchAllModels(): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchAllModels',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCloudSpecsChanges returns a watcher for cloud spec changes.
  */
  watchCloudSpecsChanges(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchCloudSpecsChanges',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ControllerV3;
