/**
  Juju CAASUnitProvisioner version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Address {
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface ApplicationGetConfigResults {
  Results: ConfigResult[];
}

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

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BoolResults {
  results: BoolResult[];
}

export interface Charm {
  actions?: CharmActions;
  config: AdditionalProperties;
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
  specs: AdditionalProperties;
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
  config: AdditionalProperties;
  description: string;
  devices: AdditionalProperties;
}

export interface CharmManifest {
  bases: CharmBase[];
}

export interface CharmMeta {
  "assumes-expr"?: ExpressionTree;
  categories?: string[];
  containers?: AdditionalProperties;
  deployment?: CharmDeployment;
  description: string;
  devices?: AdditionalProperties;
  "extra-bindings"?: AdditionalProperties;
  "min-juju-version"?: string;
  name: string;
  "payload-classes"?: AdditionalProperties;
  peers?: AdditionalProperties;
  provides?: AdditionalProperties;
  requires?: AdditionalProperties;
  resources?: AdditionalProperties;
  series?: string[];
  storage?: AdditionalProperties;
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
  metrics: AdditionalProperties;
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

export interface ConfigResult {
  config: AdditionalProperties;
  error?: Error;
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

export interface IntResult {
  error?: Error;
  result: number;
}

export interface IntResults {
  results: IntResult[];
}

export interface KubernetesDeploymentInfo {
  "deployment-type": string;
  "service-type": string;
}

export interface KubernetesDeviceParams {
  Attributes: AdditionalProperties;
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
  tags?: AdditionalProperties;
}

export interface KubernetesProvisioningInfo {
  "charm-modified-version"?: number;
  constraints: Value;
  "deployment-info"?: KubernetesDeploymentInfo;
  devices?: KubernetesDeviceParams[];
  filesystems?: KubernetesFilesystemParams[];
  "image-repo"?: DockerImageInfo;
  "pod-spec": string;
  "raw-k8s-spec"?: string;
  tags?: AdditionalProperties;
  volumes?: KubernetesVolumeParams[];
}

export interface KubernetesProvisioningInfoResult {
  error?: Error;
  result: KubernetesProvisioningInfo;
}

export interface KubernetesProvisioningInfoResults {
  results: KubernetesProvisioningInfoResult[];
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
  tags?: AdditionalProperties;
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

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface UpdateApplicationServiceArg {
  addresses: Address[];
  "application-tag": string;
  generation?: number;
  "provider-id": string;
  scale?: number;
}

export interface UpdateApplicationServiceArgs {
  args: UpdateApplicationServiceArg[];
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
class CAASUnitProvisionerV2 implements Facade {
  static NAME = "CAASUnitProvisioner";
  static VERSION = 2;

  NAME = "CAASUnitProvisioner";
  VERSION = 2;

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
        type: "CAASUnitProvisioner",
        request: "ApplicationCharmInfo",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationsConfig returns the config for the specified applications.
  */
  applicationsConfig(params: Entities): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "ApplicationsConfig",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationsScale returns the scaling info for specified applications in this model.
  */
  applicationsScale(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "ApplicationsScale",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationsTrust returns the trust status for specified applications in this model.
  */
  applicationsTrust(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "ApplicationsTrust",
        version: 2,
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
        type: "CAASUnitProvisioner",
        request: "CharmInfo",
        version: 2,
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
        type: "CAASUnitProvisioner",
        request: "ClearApplicationsResources",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DeploymentMode returns the deployment mode of the given applications' charms.
  */
  deploymentMode(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "DeploymentMode",
        version: 2,
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
        type: "CAASUnitProvisioner",
        request: "Life",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProvisioningInfo returns the provisioning info for specified applications in this model.
  */
  provisioningInfo(
    params: Entities
  ): Promise<KubernetesProvisioningInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "ProvisioningInfo",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetOperatorStatus updates the operator status for each given application.
  */
  setOperatorStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "SetOperatorStatus",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateApplicationsService updates the Juju data model to reflect the given
    service details of the specified application.
  */
  updateApplicationsService(
    params: UpdateApplicationServiceArgs
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "UpdateApplicationsService",
        version: 2,
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
        type: "CAASUnitProvisioner",
        request: "UpdateApplicationsUnits",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Watch starts a NotifyWatcher for each entity given.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "Watch",
        version: 2,
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
        type: "CAASUnitProvisioner",
        request: "WatchApplications",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchApplicationsScale starts a NotifyWatcher to watch changes
    to the applications' scale.
  */
  watchApplicationsScale(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "WatchApplicationsScale",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchApplicationsTrustHash starts a StringsWatcher to watch changes
    to the applications' trust status.
  */
  watchApplicationsTrustHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "WatchApplicationsTrustHash",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchPodSpec starts a NotifyWatcher to watch changes to the
    pod spec for specified units in this model.
  */
  watchPodSpec(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASUnitProvisioner",
        request: "WatchPodSpec",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASUnitProvisionerV2;
