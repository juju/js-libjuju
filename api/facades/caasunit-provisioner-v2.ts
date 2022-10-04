/**
  Juju CAASUnitProvisioner version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Address {
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface ApplicationGetConfigResults {
  Results: ConfigResult[];
}

interface ApplicationUnitInfo {
  'provider-id': string;
  'unit-tag': string;
}

interface ApplicationUnitParams {
  address: string;
  data?: AdditionalProperties;
  'filesystem-info'?: KubernetesFilesystemInfo[];
  info: string;
  ports: string[];
  'provider-id': string;
  stateful?: boolean;
  status: string;
  'unit-tag': string;
}

interface BoolResult {
  error?: Error;
  result: boolean;
}

interface BoolResults {
  results: BoolResult[];
}

interface Charm {
  actions?: CharmActions;
  config: AdditionalProperties;
  'lxd-profile'?: CharmLXDProfile;
  manifest?: CharmManifest;
  meta?: CharmMeta;
  metrics?: CharmMetrics;
  revision: number;
  url: string;
}

interface CharmActionSpec {
  description: string;
  params: AdditionalProperties;
}

interface CharmActions {
  specs: AdditionalProperties;
}

interface CharmBase {
  architectures: string[];
  channel: string;
  name: string;
}

interface CharmContainer {
  mounts: CharmMount[];
  resource: string;
}

interface CharmDeployment {
  'min-version': string;
  mode: string;
  service: string;
  type: string;
}

interface CharmDevice {
  CountMax: number;
  CountMin: number;
  Description: string;
  Name: string;
  Type: string;
}

interface CharmLXDProfile {
  config: AdditionalProperties;
  description: string;
  devices: AdditionalProperties;
}

interface CharmManifest {
  bases: CharmBase[];
}

interface CharmMeta {
  'assumes-expr'?: ExpressionTree;
  categories?: string[];
  containers?: AdditionalProperties;
  deployment?: CharmDeployment;
  description: string;
  devices?: AdditionalProperties;
  'extra-bindings'?: AdditionalProperties;
  'min-juju-version'?: string;
  name: string;
  'payload-classes'?: AdditionalProperties;
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

interface CharmMetric {
  description: string;
  type: string;
}

interface CharmMetrics {
  metrics: AdditionalProperties;
  plan: CharmPlan;
}

interface CharmMount {
  location: string;
  storage: string;
}

interface CharmOption {
  default?: AdditionalProperties;
  description?: string;
  type: string;
}

interface CharmPayloadClass {
  name: string;
  type: string;
}

interface CharmPlan {
  required: boolean;
}

interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

interface CharmResourceMeta {
  description: string;
  name: string;
  path: string;
  type: string;
}

interface CharmStorage {
  'count-max': number;
  'count-min': number;
  description: string;
  location?: string;
  'minimum-size': number;
  name: string;
  properties?: string[];
  'read-only': boolean;
  shared: boolean;
  type: string;
}

interface CharmURL {
  url: string;
}

interface ConfigResult {
  config: AdditionalProperties;
  error?: Error;
}

interface DockerImageInfo {
  auth?: string;
  email?: string;
  identitytoken?: string;
  'image-name': string;
  password?: string;
  registrytoken?: string;
  repository?: string;
  serveraddress?: string;
  username?: string;
}

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

interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

interface ExpressionTree {
  Expression: AdditionalProperties;
}

interface IntResult {
  error?: Error;
  result: number;
}

interface IntResults {
  results: IntResult[];
}

interface KubernetesDeploymentInfo {
  'deployment-type': string;
  'service-type': string;
}

interface KubernetesDeviceParams {
  Attributes: AdditionalProperties;
  Count: number;
  Type: string;
}

interface KubernetesFilesystemAttachmentParams {
  'mount-point'?: string;
  provider: string;
  'read-only'?: boolean;
}

interface KubernetesFilesystemInfo {
  data?: AdditionalProperties;
  'filesystem-id': string;
  info: string;
  'mount-point'?: string;
  pool: string;
  'read-only'?: boolean;
  size: number;
  status: string;
  storagename: string;
  volume: KubernetesVolumeInfo;
}

interface KubernetesFilesystemParams {
  attachment?: KubernetesFilesystemAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  storagename: string;
  tags?: AdditionalProperties;
}

interface KubernetesProvisioningInfo {
  'charm-modified-version'?: number;
  constraints: Value;
  'deployment-info'?: KubernetesDeploymentInfo;
  devices?: KubernetesDeviceParams[];
  filesystems?: KubernetesFilesystemParams[];
  'image-repo'?: DockerImageInfo;
  'pod-spec': string;
  'raw-k8s-spec'?: string;
  tags?: AdditionalProperties;
  volumes?: KubernetesVolumeParams[];
}

interface KubernetesProvisioningInfoResult {
  error?: Error;
  result: KubernetesProvisioningInfo;
}

interface KubernetesProvisioningInfoResults {
  results: KubernetesProvisioningInfoResult[];
}

interface KubernetesVolumeAttachmentParams {
  provider: string;
  'read-only'?: boolean;
}

interface KubernetesVolumeInfo {
  data?: AdditionalProperties;
  info: string;
  persistent: boolean;
  pool?: string;
  size: number;
  status: string;
  'volume-id': string;
}

interface KubernetesVolumeParams {
  attachment?: KubernetesVolumeAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  storagename: string;
  tags?: AdditionalProperties;
}

interface LifeResult {
  error?: Error;
  life: string;
}

interface LifeResults {
  results: LifeResult[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface UpdateApplicationServiceArg {
  addresses: Address[];
  'application-tag': string;
  generation?: number;
  'provider-id': string;
  scale?: number;
}

interface UpdateApplicationServiceArgs {
  args: UpdateApplicationServiceArg[];
}

interface UpdateApplicationUnitArgs {
  args: UpdateApplicationUnits[];
}

interface UpdateApplicationUnitResult {
  error: Error;
  info: UpdateApplicationUnitsInfo;
}

interface UpdateApplicationUnitResults {
  results: UpdateApplicationUnitResult[];
}

interface UpdateApplicationUnits {
  'application-tag': string;
  generation?: number;
  scale?: number;
  status?: EntityStatus;
  units: ApplicationUnitParams[];
}

interface UpdateApplicationUnitsInfo {
  units: ApplicationUnitInfo[];
}

interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-role': string;
  'instance-type': string;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  spaces: string[];
  tags: string[];
  'virt-type': string;
  zones: string[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASUnitProvisionerV2 {
  static NAME: string = 'CAASUnitProvisioner';
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
    ApplicationCharmInfo returns information about an application's charm.
  */
  applicationCharmInfo(params: Entity): Promise<Charm> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASUnitProvisioner',
        request: 'ApplicationCharmInfo',
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
        type: 'CAASUnitProvisioner',
        request: 'ApplicationsConfig',
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
        type: 'CAASUnitProvisioner',
        request: 'ApplicationsScale',
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
        type: 'CAASUnitProvisioner',
        request: 'ApplicationsTrust',
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
        type: 'CAASUnitProvisioner',
        request: 'CharmInfo',
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
        type: 'CAASUnitProvisioner',
        request: 'ClearApplicationsResources',
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
        type: 'CAASUnitProvisioner',
        request: 'DeploymentMode',
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
        type: 'CAASUnitProvisioner',
        request: 'Life',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProvisioningInfo returns the provisioning info for specified applications in this model.
  */
  provisioningInfo(params: Entities): Promise<KubernetesProvisioningInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASUnitProvisioner',
        request: 'ProvisioningInfo',
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
        type: 'CAASUnitProvisioner',
        request: 'SetOperatorStatus',
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
  updateApplicationsService(params: UpdateApplicationServiceArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASUnitProvisioner',
        request: 'UpdateApplicationsService',
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
  updateApplicationsUnits(params: UpdateApplicationUnitArgs): Promise<UpdateApplicationUnitResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASUnitProvisioner',
        request: 'UpdateApplicationsUnits',
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
        type: 'CAASUnitProvisioner',
        request: 'Watch',
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
  watchApplications(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASUnitProvisioner',
        request: 'WatchApplications',
        version: 2,
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
        type: 'CAASUnitProvisioner',
        request: 'WatchApplicationsScale',
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
        type: 'CAASUnitProvisioner',
        request: 'WatchApplicationsTrustHash',
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
        type: 'CAASUnitProvisioner',
        request: 'WatchPodSpec',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASUnitProvisionerV2;
