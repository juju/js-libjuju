/**
  Juju ModelManager version 10.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju  at the git SHA 8cc1409ebd.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface ChangeModelCredentialParams {
  "credential-tag": string;
  "model-tag": string;
}

export interface ChangeModelCredentialsParams {
  "model-credentials": ChangeModelCredentialParams[];
}

export interface DestroyModelParams {
  "destroy-storage"?: boolean;
  force?: boolean;
  "max-wait"?: number;
  "model-tag": string;
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
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

export interface MapResult {
  error?: Error;
  result: AdditionalProperties;
}

export interface MapResults {
  results: MapResult[];
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

export interface ModelCreateArgs {
  "cloud-tag"?: string;
  config?: AdditionalProperties;
  credential?: string;
  name: string;
  "owner-tag": string;
  region?: string;
}

export interface ModelDefaultValues {
  "cloud-region"?: string;
  "cloud-tag"?: string;
  config: AdditionalProperties;
}

export interface ModelDefaults {
  controller?: AdditionalProperties;
  default?: AdditionalProperties;
  regions?: RegionDefaults[];
}

export interface ModelDefaultsResult {
  config: Record<string, ModelDefaults>;
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
  "provider-id"?: string;
  status?: string;
}

export interface ModelInfo {
  "agent-version": string;
  "cloud-credential-tag"?: string;
  "cloud-credential-validity"?: boolean;
  "cloud-region"?: string;
  "cloud-tag": string;
  "controller-uuid": string;
  "default-base"?: string;
  "default-series"?: string;
  "is-controller": boolean;
  life: string;
  machines: ModelMachineInfo[];
  migration?: ModelMigrationStatus;
  name: string;
  "owner-tag": string;
  "provider-type"?: string;
  "secret-backends": SecretBackendResult[];
  sla: ModelSLAInfo;
  status?: EntityStatus;
  "supported-features"?: SupportedFeature[];
  type: string;
  users: ModelUserInfo[];
  uuid: string;
}

export interface ModelInfoResult {
  error?: Error;
  result?: ModelInfo;
}

export interface ModelInfoResults {
  results: ModelInfoResult[];
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

export interface ModelSummariesRequest {
  all?: boolean;
  "user-tag": string;
}

export interface ModelSummary {
  "agent-version": string;
  "cloud-credential-tag"?: string;
  "cloud-region"?: string;
  "cloud-tag": string;
  "controller-uuid": string;
  counts: ModelEntityCount[];
  "default-series"?: string;
  "is-controller": boolean;
  "last-connection": string;
  life: string;
  migration?: ModelMigrationStatus;
  name: string;
  "owner-tag": string;
  "provider-type"?: string;
  sla: ModelSLAInfo;
  status?: EntityStatus;
  type: string;
  "user-access": string;
  uuid: string;
}

export interface ModelSummaryResult {
  error?: Error;
  result?: ModelSummary;
}

export interface ModelSummaryResults {
  results: ModelSummaryResult[];
}

export interface ModelUnsetKeys {
  "cloud-region"?: string;
  "cloud-tag"?: string;
  keys: string[];
}

export interface ModelUserInfo {
  access: string;
  "display-name": string;
  "last-connection": string;
  "model-tag": string;
  user: string;
}

export interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  "provider-id"?: string;
  status?: string;
}

export interface ModifyModelAccess {
  access: string;
  action: string;
  "model-tag": string;
  "user-tag": string;
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
  "region-name": string;
  value: AdditionalProperties;
}

export interface SecretBackend {
  "backend-type": string;
  config: AdditionalProperties;
  name: string;
  "token-rotate-interval"?: number;
}

export interface SecretBackendResult {
  error?: Error;
  id: string;
  message?: string;
  "num-secrets": number;
  result: SecretBackend;
  status: string;
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
class ModelManagerV10 implements Facade {
  static NAME = "ModelManager";
  static VERSION = 10;

  NAME = "ModelManager";
  VERSION = 10;

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
  changeModelCredential(
    params: ChangeModelCredentialsParams
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ChangeModelCredential",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  createModel(params: ModelCreateArgs): Promise<ModelInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "CreateModel",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  destroyModels(params: DestroyModelsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "DestroyModels",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  dumpModels(params: DumpModelRequest): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "DumpModels",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  dumpModelsDB(params: Entities): Promise<MapResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "DumpModelsDB",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  listModelSummaries(
    params: ModelSummariesRequest
  ): Promise<ModelSummaryResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ListModelSummaries",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  listModels(params: Entity): Promise<UserModelList> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ListModels",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modelDefaultsForClouds(params: Entities): Promise<ModelDefaultsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ModelDefaultsForClouds",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modelInfo(params: Entities): Promise<ModelInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ModelInfo",
        version: 10,
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
        type: "ModelManager",
        request: "ModelStatus",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modifyModelAccess(params: ModifyModelAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "ModifyModelAccess",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  setModelDefaults(params: SetModelDefaults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "SetModelDefaults",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  unsetModelDefaults(params: UnsetModelDefaults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelManager",
        request: "UnsetModelDefaults",
        version: 10,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelManagerV10;
