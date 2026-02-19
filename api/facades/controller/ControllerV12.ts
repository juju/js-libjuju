/**
  Juju Controller version 12.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers



  NOTE: This file was generated using the Juju schema
  from Juju 3.6.14 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AllWatcherId {
  "watcher-id": string;
}

export interface CloudCredential {
  attrs?: Record<string, string>;
  "auth-type": string;
  redacted?: string[];
}

export interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  "identity-endpoint"?: string;
  "is-controller-cloud"?: boolean;
  name: string;
  region?: string;
  "skip-tls-verify"?: boolean;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudSpecResult {
  error?: Error;
  result?: CloudSpec;
}

export interface CloudSpecResults {
  results?: CloudSpecResult[];
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

export interface ControllerVersionResults {
  "git-commit": string;
  version: string;
}

export interface DashboardConnectionInfo {
  error?: Error;
  "proxy-connection": Proxy;
  "ssh-connection": DashboardConnectionSSHTunnel;
}

export interface DashboardConnectionSSHTunnel {
  entity?: string;
  host: string;
  model?: string;
  port: string;
}

export interface DestroyControllerArgs {
  "destroy-models": boolean;
  "destroy-storage"?: boolean;
  force?: boolean;
  "max-wait"?: number;
  "model-timeout"?: number;
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
  error?: Error;
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
  "dry-run"?: boolean;
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
  arch?: string;
  "availability-zone"?: string;
  cores?: number;
  "cpu-power"?: number;
  mem?: number;
  "root-disk"?: number;
  tags?: string[];
  "virt-type"?: string;
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
  "skip-user-checks"?: boolean;
  token?: string;
}

export interface Model {
  name: string;
  "owner-tag": string;
  type: string;
  uuid: string;
}

export interface ModelApplicationInfo {
  name: string;
}

export interface ModelBlockInfo {
  blocks: string[];
  "model-uuid": string;
  name: string;
  "owner-tag": string;
}

export interface ModelBlockInfoList {
  models?: ModelBlockInfo[];
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
  applications?: ModelApplicationInfo[];
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

export interface Proxy {
  config: AdditionalProperties;
  type: string;
}

export interface RemoveBlocksArgs {
  all: boolean;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface SummaryWatcherID {
  "watcher-id": string;
}

export interface UserAccess {
  access: string;
  "user-tag": string;
}

export interface UserAccessResult {
  error?: Error;
  result?: UserAccess;
}

export interface UserAccessResults {
  results?: UserAccessResult[];
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

*/
class ControllerV12 implements Facade {
  static NAME = "Controller";
  static VERSION = 12;

  NAME = "Controller";
  VERSION = 12;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  allModels(params: any): Promise<UserModelList> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "AllModels",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  cloudSpec(params: Entities): Promise<CloudSpecResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "CloudSpec",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  configSet(params: ControllerConfigSet): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ConfigSet",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  controllerAPIInfoForModels(
    params: Entities
  ): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ControllerAPIInfoForModels",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  controllerConfig(params: any): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ControllerConfig",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  controllerVersion(params: any): Promise<ControllerVersionResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ControllerVersion",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  dashboardConnectionInfo(params: any): Promise<DashboardConnectionInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "DashboardConnectionInfo",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  destroyController(params: DestroyControllerArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "DestroyController",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  getCloudSpec(params: ModelTag): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "GetCloudSpec",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  getControllerAccess(params: Entities): Promise<UserAccessResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "GetControllerAccess",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  hostedModelConfigs(params: any): Promise<HostedModelConfigsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "HostedModelConfigs",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  identityProviderURL(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "IdentityProviderURL",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  initiateMigration(
    params: InitiateMigrationArgs
  ): Promise<InitiateMigrationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "InitiateMigration",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  listBlockedModels(params: any): Promise<ModelBlockInfoList> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ListBlockedModels",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modelStatus(params: Entities): Promise<ModelStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ModelStatus",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modifyControllerAccess(
    params: ModifyControllerAccessRequest
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "ModifyControllerAccess",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  mongoVersion(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "MongoVersion",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  removeBlocks(params: RemoveBlocksArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "RemoveBlocks",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchAllModelSummaries(params: any): Promise<SummaryWatcherID> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "WatchAllModelSummaries",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchAllModels(params: any): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "WatchAllModels",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchCloudSpecsChanges(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "WatchCloudSpecsChanges",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchModelSummaries(params: any): Promise<SummaryWatcherID> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Controller",
        request: "WatchModelSummaries",
        version: 12,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ControllerV12;
