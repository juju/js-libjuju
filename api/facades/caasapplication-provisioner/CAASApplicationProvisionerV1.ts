/**
  Juju CAASApplicationProvisioner version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface ApplicationUnitInfo {
  "provider-id": string;
  "unit-tag": string;
}

export interface ApplicationUnitParams {
  address: string;
  data?: AdditionalProperties;
  "filesystem-info"?: KubernetesFilesystemInfo[];
  info: string;
  ports: string[];
  "provider-id": string;
  stateful?: boolean;
  status: string;
  "unit-tag": string;
}

export interface Base {
  channel: string;
  name: string;
}

export interface CAASApplicationOCIResourceResult {
  error: Error;
  result: CAASApplicationOCIResources;
}

export interface CAASApplicationOCIResourceResults {
  results: CAASApplicationOCIResourceResult[];
}

export interface CAASApplicationOCIResources {
  images: Record<string, DockerImageInfo>;
}

export interface CAASApplicationProvisionerConfig {
  "unmanaged-applications": Entities;
}

export interface CAASApplicationProvisionerConfigResult {
  error: Error;
  "provisioner-config": CAASApplicationProvisionerConfig;
}

export interface CAASApplicationProvisioningInfo {
  "api-addresses": string[];
  base?: Base;
  "ca-cert": string;
  "charm-modified-version"?: number;
  "charm-url"?: string;
  constraints: Value;
  devices?: KubernetesDeviceParams[];
  error?: Error;
  filesystems?: KubernetesFilesystemParams[];
  "image-repo"?: DockerImageInfo;
  scale?: number;
  tags?: Record<string, string>;
  trust?: boolean;
  version: Number;
  volumes?: KubernetesVolumeParams[];
}

export interface CAASApplicationProvisioningInfoResults {
  results: CAASApplicationProvisioningInfo[];
}

export interface CAASApplicationProvisioningState {
  "scale-target": number;
  scaling: boolean;
}

export interface CAASApplicationProvisioningStateArg {
  application: Entity;
  "provisioning-state": CAASApplicationProvisioningState;
}

export interface CAASApplicationProvisioningStateResult {
  error: Error;
  "provisioning-state": CAASApplicationProvisioningState;
}

export interface CAASUnitInfo {
  tag: string;
  "unit-status"?: UnitStatus;
}

export interface CAASUnitsResult {
  error: Error;
  units: CAASUnitInfo[];
}

export interface CAASUnitsResults {
  results: CAASUnitsResult[];
}

export interface Charm {
  actions?: CharmActions;
  config: Record<string, CharmOption>;
  "lxd-profile"?: CharmLXDProfile;
  manifest?: CharmManifest;
  meta?: CharmMeta;
  metrics?: CharmMetrics;
  revision: number;
  url: string;
}

export interface CharmActionSpec {
  description: string;
  params: AdditionalProperties;
}

export interface CharmActions {
  specs: Record<string, CharmActionSpec>;
}

export interface CharmBase {
  architectures: string[];
  channel: string;
  name: string;
}

export interface CharmContainer {
  mounts: CharmMount[];
  resource: string;
}

export interface CharmDeployment {
  "min-version": string;
  mode: string;
  service: string;
  type: string;
}

export interface CharmDevice {
  CountMax: number;
  CountMin: number;
  Description: string;
  Name: string;
  Type: string;
}

export interface CharmLXDProfile {
  config: Record<string, string>;
  description: string;
  devices: Record<string, Record<string, string>>;
}

export interface CharmManifest {
  bases: CharmBase[];
}

export interface CharmMeta {
  "assumes-expr"?: ExpressionTree;
  categories?: string[];
  containers?: Record<string, CharmContainer>;
  deployment?: CharmDeployment;
  description: string;
  devices?: Record<string, CharmDevice>;
  "extra-bindings"?: Record<string, string>;
  "min-juju-version"?: string;
  name: string;
  "payload-classes"?: Record<string, CharmPayloadClass>;
  peers?: Record<string, CharmRelation>;
  provides?: Record<string, CharmRelation>;
  requires?: Record<string, CharmRelation>;
  resources?: Record<string, CharmResourceMeta>;
  series?: string[];
  storage?: Record<string, CharmStorage>;
  subordinate: boolean;
  summary: string;
  tags?: string[];
  terms?: string[];
}

export interface CharmMetric {
  description: string;
  type: string;
}

export interface CharmMetrics {
  metrics: Record<string, CharmMetric>;
  plan: CharmPlan;
}

export interface CharmMount {
  location: string;
  storage: string;
}

export interface CharmOption {
  default?: AdditionalProperties;
  description?: string;
  type: string;
}

export interface CharmPayloadClass {
  name: string;
  type: string;
}

export interface CharmPlan {
  required: boolean;
}

export interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

export interface CharmResourceMeta {
  description: string;
  name: string;
  path: string;
  type: string;
}

export interface CharmStorage {
  "count-max": number;
  "count-min": number;
  description: string;
  location?: string;
  "minimum-size": number;
  name: string;
  properties?: string[];
  "read-only": boolean;
  shared: boolean;
  type: string;
}

export interface CharmURL {
  url: string;
}

export interface DestroyUnitInfo {
  "destroyed-storage": Entity[];
  "detached-storage": Entity[];
}

export interface DestroyUnitParams {
  "destroy-storage"?: boolean;
  "dry-run"?: boolean;
  force?: boolean;
  "max-wait"?: number;
  "unit-tag": string;
}

export interface DestroyUnitResult {
  error: Error;
  info: DestroyUnitInfo;
}

export interface DestroyUnitResults {
  results: DestroyUnitResult[];
}

export interface DestroyUnitsParams {
  units: DestroyUnitParams[];
}

export interface DetailedStatus {
  data: AdditionalProperties;
  err?: Error;
  info: string;
  kind: string;
  life: string;
  since: string;
  status: string;
  version: string;
}

export interface DockerImageInfo {
  auth?: string;
  email?: string;
  identitytoken?: string;
  "image-name": string;
  password?: string;
  registrytoken?: string;
  repository?: string;
  serveraddress?: string;
  username?: string;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityPassword {
  password: string;
  tag: string;
}

export interface EntityPasswords {
  changes: EntityPassword[];
}

export interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
}

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

export interface ExpressionTree {
  Expression: AdditionalProperties;
}

export interface KubernetesDeviceParams {
  Attributes: Record<string, string>;
  Count: number;
  Type: string;
}

export interface KubernetesFilesystemAttachmentParams {
  "mount-point"?: string;
  provider: string;
  "read-only"?: boolean;
}

export interface KubernetesFilesystemInfo {
  data?: AdditionalProperties;
  "filesystem-id": string;
  info: string;
  "mount-point"?: string;
  pool: string;
  "read-only"?: boolean;
  size: number;
  status: string;
  storagename: string;
  volume: KubernetesVolumeInfo;
}

export interface KubernetesFilesystemParams {
  attachment?: KubernetesFilesystemAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  storagename: string;
  tags?: Record<string, string>;
}

export interface KubernetesVolumeAttachmentParams {
  provider: string;
  "read-only"?: boolean;
}

export interface KubernetesVolumeInfo {
  data?: AdditionalProperties;
  info: string;
  persistent: boolean;
  pool?: string;
  size: number;
  status: string;
  "volume-id": string;
}

export interface KubernetesVolumeParams {
  attachment?: KubernetesVolumeAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  storagename: string;
  tags?: Record<string, string>;
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface UnitStatus {
  address?: string;
  "agent-status": DetailedStatus;
  charm: string;
  leader?: boolean;
  machine: string;
  "opened-ports": string[];
  "provider-id"?: string;
  "public-address": string;
  subordinates: Record<string, UnitStatus>;
  "workload-status": DetailedStatus;
  "workload-version": string;
}

export interface UpdateApplicationUnitArgs {
  args: UpdateApplicationUnits[];
}

export interface UpdateApplicationUnitResult {
  error: Error;
  info: UpdateApplicationUnitsInfo;
}

export interface UpdateApplicationUnitResults {
  results: UpdateApplicationUnitResult[];
}

export interface UpdateApplicationUnits {
  "application-tag": string;
  generation?: number;
  scale?: number;
  status?: EntityStatus;
  units: ApplicationUnitParams[];
}

export interface UpdateApplicationUnitsInfo {
  units: ApplicationUnitInfo[];
}

export interface Value {
  "allocate-public-ip": boolean;
  arch: string;
  container: string;
  cores: number;
  "cpu-power": number;
  "image-id": string;
  "instance-role": string;
  "instance-type": string;
  mem: number;
  "root-disk": number;
  "root-disk-source": string;
  spaces: string[];
  tags: string[];
  "virt-type": string;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASApplicationProvisionerV1 implements Facade {
  static NAME = "CAASApplicationProvisioner";
  static VERSION = 1;

  NAME = "CAASApplicationProvisioner";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    ApplicationCharmInfo returns information about an application's charm.
  */
  applicationCharmInfo(params: Entity): Promise<Charm> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ApplicationCharmInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationOCIResources returns the OCI image resources for an application.
  */
  applicationOCIResources(
    params: Entities
  ): Promise<CAASApplicationOCIResourceResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ApplicationOCIResources",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmInfo returns information about the requested charm.
  */
  charmInfo(params: CharmURL): Promise<Charm> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "CharmInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ClearApplicationsResources clears the flags which indicate
    applications still have resources in the cluster.
  */
  clearApplicationsResources(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ClearApplicationsResources",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyUnits is responsible for scaling down a set of units on the this
    Application.
  */
  destroyUnits(params: DestroyUnitsParams): Promise<DestroyUnitResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "DestroyUnits",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Life returns the life status of every supplied entity, where available.
  */
  life(params: Entities): Promise<LifeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "Life",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProvisionerConfig returns the provisioner's configuration.
  */
  provisionerConfig(
    params: any
  ): Promise<CAASApplicationProvisionerConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ProvisionerConfig",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProvisioningInfo returns the info needed to provision a caas application.
  */
  provisioningInfo(
    params: Entities
  ): Promise<CAASApplicationProvisioningInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ProvisioningInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProvisioningState returns the provisioning state for the application.
  */
  provisioningState(
    params: Entity
  ): Promise<CAASApplicationProvisioningStateResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "ProvisioningState",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Remove removes every given entity from state, calling EnsureDead
    first, then Remove. It will fail if the entity is not present.
  */
  remove(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "Remove",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetOperatorStatus sets the status of each given entity.
  */
  setOperatorStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "SetOperatorStatus",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetPasswords sets the given password for each supplied entity, if possible.
  */
  setPasswords(params: EntityPasswords): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "SetPasswords",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetProvisioningState sets the provisioning state for the application.
  */
  setProvisioningState(
    params: CAASApplicationProvisioningStateArg
  ): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "SetProvisioningState",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Units returns all the units for each application specified.
  */
  units(params: Entities): Promise<CAASUnitsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "Units",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateApplicationsUnits updates the Juju data model to reflect the given
    units of the specified application.
  */
  updateApplicationsUnits(
    params: UpdateApplicationUnitArgs
  ): Promise<UpdateApplicationUnitResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "UpdateApplicationsUnits",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Watch starts an NotifyWatcher for each given entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "Watch",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchApplications starts a StringsWatcher to watch applications
    deployed to this model.
  */
  watchApplications(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "WatchApplications",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchProvisioningInfo provides a watcher for changes that affect the
    information returned by ProvisioningInfo. This is useful for ensuring the
    latest application stated is ensured.
  */
  watchProvisioningInfo(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "WatchProvisioningInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUnits starts a StringsWatcher to watch changes to the
    lifecycle states of units for the specified applications in
    this model.
  */
  watchUnits(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASApplicationProvisioner",
        request: "WatchUnits",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASApplicationProvisionerV1;
