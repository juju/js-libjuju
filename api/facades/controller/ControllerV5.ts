/**
  Juju Controller version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface AllWatcherId {
  "watcher-id": string;
}

export interface CloudCredential {
  attrs?: AdditionalProperties;
  "auth-type": string;
  redacted?: string[];
}

export interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  "identity-endpoint"?: string;
  name: string;
  region?: string;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

export interface CloudSpecResults {
  results: CloudSpecResult[];
}

export interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

export interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

export interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

export interface ControllerConfigResult {
  config: AdditionalProperties;
}

export interface ControllerConfigSet {
  config: AdditionalProperties;
}

export interface DestroyControllerArgs {
  "destroy-models": boolean;
  "destroy-storage"?: boolean;
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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface HostedModelConfig {
  "cloud-spec"?: CloudSpec;
  config?: AdditionalProperties;
  error?: Error;
  name: string;
  owner: string;
}

export interface HostedModelConfigsResults {
  models: HostedModelConfig[];
}

export interface InitiateMigrationArgs {
  specs: MigrationSpec[];
}

export interface InitiateMigrationResult {
  error?: Error;
  "migration-id": string;
  "model-tag": string;
}

export interface InitiateMigrationResults {
  results: InitiateMigrationResult[];
}

export interface MachineHardware {
  arch: string;
  "availability-zone": string;
  cores: number;
  "cpu-power": number;
  mem: number;
  "root-disk": number;
  tags: string[];
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

export interface Model {
  name: string;
  "owner-tag": string;
  type: string;
  uuid: string;
}

export interface ModelBlockInfo {
  blocks: string[];
  "model-uuid": string;
  name: string;
  "owner-tag": string;
}

export interface ModelBlockInfoList {
  models: ModelBlockInfo[];
}

export interface ModelConfigResults {
  config: AdditionalProperties;
}

export interface ModelFilesystemInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  "provider-id"?: string;
  status?: string;
}

export interface ModelMachineInfo {
  "display-name"?: string;
  "ha-primary"?: boolean;
  hardware?: MachineHardware;
  "has-vote"?: boolean;
  id: string;
  "instance-id"?: string;
  message?: string;
  status?: string;
  "wants-vote"?: boolean;
}

export interface ModelStatus {
  "application-count": number;
  error?: Error;
  filesystems?: ModelFilesystemInfo[];
  "hosted-machine-count": number;
  life: string;
  machines?: ModelMachineInfo[];
  "model-tag": string;
  "owner-tag": string;
  type: string;
  "unit-count": number;
  volumes?: ModelVolumeInfo[];
}

export interface ModelStatusResults {
  models: ModelStatus[];
}

export interface ModelTag {
  [key: string]: AdditionalProperties;
}

export interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  "provider-id"?: string;
  status?: string;
}

export interface ModifyControllerAccess {
  access: string;
  action: string;
  "user-tag": string;
}

export interface ModifyControllerAccessRequest {
  changes: ModifyControllerAccess[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface RemoveBlocksArgs {
  all: boolean;
}

export interface UserAccess {
  access: string;
  "user-tag": string;
}

export interface UserAccessResult {
  error: Error;
  result: UserAccess;
}

export interface UserAccessResults {
  results: UserAccessResult[];
}

export interface UserModel {
  "last-connection": string;
  model: Model;
}

export interface UserModelList {
  "user-models": UserModel[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ControllerAPIv5 provides the v5 Controller API. The only difference
  between this and v6 is that v5 doesn't have the MongoVersion method.
*/
class ControllerV5 {
  static NAME = "Controller";
  static VERSION = 5;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 5;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    AllModels allows controller administrators to get the list of all the
    models in the controller.
  */
  allModels(params: any): Promise<UserModelList> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "AllModels",
        version: 5,
        params: params,
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
        type: "Controller",
        request: "CloudSpec",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ConfigSet changes the value of specified controller configuration
    settings. Only some settings can be changed after bootstrap.
    Settings that aren't specified in the params are left unchanged.
  */
  configSet(params: ControllerConfigSet): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ConfigSet",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(
    params: Entities
  ): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ControllerAPIInfoForModels",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(params: any): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ControllerConfig",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyController destroys the controller.

    If the args specify the destruction of the models, this method will
    attempt to do so. Otherwise, if the controller has any non-empty,
    non-Dead hosted models, then an error with the code
    params.CodeHasHostedModels will be transmitted.
  */
  destroyController(params: DestroyControllerArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "DestroyController",
        version: 5,
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
        type: "Controller",
        request: "GetCloudSpec",
        version: 5,
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
        type: "Controller",
        request: "GetControllerAccess",
        version: 5,
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
  hostedModelConfigs(params: any): Promise<HostedModelConfigsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "HostedModelConfigs",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    IdentityProviderURL isn't on the v6 API.
  */
  identityProviderURL(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "IdentityProviderURL",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    InitiateMigration attempts to begin the migration of one or
    more models to other controllers.
  */
  initiateMigration(
    params: InitiateMigrationArgs
  ): Promise<InitiateMigrationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "InitiateMigration",
        version: 5,
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
  listBlockedModels(params: any): Promise<ModelBlockInfoList> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ListBlockedModels",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelConfig returns the model config for the controller
    model.  For information on the current model, use
    client.ModelGet
  */
  modelConfig(params: any): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ModelConfig",
        version: 5,
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
        type: "Controller",
        request: "ModelStatus",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModifyControllerAccess changes the model access granted to users.
  */
  modifyControllerAccess(
    params: ModifyControllerAccessRequest
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ModifyControllerAccess",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MongoVersion isn't on the v5 API.
  */
  mongoVersion(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "MongoVersion",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveBlocks removes all the blocks in the controller.
  */
  removeBlocks(params: RemoveBlocksArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "RemoveBlocks",
        version: 5,
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
  watchAllModels(params: any): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "WatchAllModels",
        version: 5,
        params: params,
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
        type: "Controller",
        request: "WatchCloudSpecsChanges",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ControllerV5;
