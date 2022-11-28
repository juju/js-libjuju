/**
  Juju CAASApplicationProvisioner version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface ApplicationUnitInfo {
  'provider-id': string;
  'unit-tag': string;
}

export interface ApplicationUnitParams {
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

export interface Base {
  channel: string;
  name: string;
}

export interface CAASApplicationGarbageCollectArg {
  'active-pod-names': string[];
  application: Entity;
  'desired-replicas': number;
  force: boolean;
  'observed-units': Entities;
}

export interface CAASApplicationGarbageCollectArgs {
  args: CAASApplicationGarbageCollectArg[];
}

export interface CAASApplicationOCIResourceResult {
  error: Error;
  result: CAASApplicationOCIResources;
}

export interface CAASApplicationOCIResourceResults {
  results: CAASApplicationOCIResourceResult[];
}

export interface CAASApplicationOCIResources {
  images: AdditionalProperties;
}

export interface CAASApplicationProvisioningInfo {
  'api-addresses': string[];
  base?: Base;
  'ca-cert': string;
  'charm-modified-version'?: number;
  'charm-url'?: string;
  constraints: Value;
  devices?: KubernetesDeviceParams[];
  error?: Error;
  filesystems?: KubernetesFilesystemParams[];
  'image-repo'?: DockerImageInfo;
  scale?: number;
  tags?: AdditionalProperties;
  trust?: boolean;
  version: Number;
  volumes?: KubernetesVolumeParams[];
}

export interface CAASApplicationProvisioningInfoResults {
  results: CAASApplicationProvisioningInfo[];
}

export interface CAASUnitInfo {
  tag: string;
  'unit-status'?: UnitStatus;
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
  config: AdditionalProperties;
  'lxd-profile'?: CharmLXDProfile;
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
  'min-version': string;
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

export interface CharmURL {
  url: string;
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
  'image-name': string;
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
  Attributes: AdditionalProperties;
  Count: number;
  Type: string;
}

export interface KubernetesFilesystemAttachmentParams {
  'mount-point'?: string;
  provider: string;
  'read-only'?: boolean;
}

export interface KubernetesFilesystemInfo {
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

export interface KubernetesFilesystemParams {
  attachment?: KubernetesFilesystemAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  storagename: string;
  tags?: AdditionalProperties;
}

export interface KubernetesVolumeAttachmentParams {
  provider: string;
  'read-only'?: boolean;
}

export interface KubernetesVolumeInfo {
  data?: AdditionalProperties;
  info: string;
  persistent: boolean;
  pool?: string;
  size: number;
  status: string;
  'volume-id': string;
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
  'watcher-id': string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface UnitStatus {
  address?: string;
  'agent-status': DetailedStatus;
  charm: string;
  leader?: boolean;
  machine: string;
  'opened-ports': string[];
  'provider-id'?: string;
  'public-address': string;
  subordinates: AdditionalProperties;
  'workload-status': DetailedStatus;
  'workload-version': string;
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
  'application-tag': string;
  generation?: number;
  scale?: number;
  status?: EntityStatus;
  units: ApplicationUnitParams[];
}

export interface UpdateApplicationUnitsInfo {
  units: ApplicationUnitInfo[];
}

export interface Value {
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASApplicationProvisionerV1 {
  static NAME: string = 'CAASApplicationProvisioner';
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
    ApplicationCharmInfo returns information about an application's charm.
  */
  applicationCharmInfo(params: Entity): Promise<Charm> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'ApplicationCharmInfo',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ApplicationOCIResources returns the OCI image resources for an application.
  */
  applicationOCIResources(params: Entities): Promise<CAASApplicationOCIResourceResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'ApplicationOCIResources',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CAASApplicationGarbageCollect cleans up units that have gone away permanently.
    Only observed units will be deleted as new units could have surfaced between
    the capturing of kuberentes pod state/application state and this call.
  */
  cAASApplicationGarbageCollect(params: CAASApplicationGarbageCollectArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'CAASApplicationGarbageCollect',
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
        type: 'CAASApplicationProvisioner',
        request: 'CharmInfo',
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
        type: 'CAASApplicationProvisioner',
        request: 'ClearApplicationsResources',
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
        type: 'CAASApplicationProvisioner',
        request: 'Life',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProvisioningInfo returns the info needed to provision a caas application.
  */
  provisioningInfo(params: Entities): Promise<CAASApplicationProvisioningInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'ProvisioningInfo',
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
        type: 'CAASApplicationProvisioner',
        request: 'Remove',
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
        type: 'CAASApplicationProvisioner',
        request: 'SetOperatorStatus',
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
        type: 'CAASApplicationProvisioner',
        request: 'SetPasswords',
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
        type: 'CAASApplicationProvisioner',
        request: 'Units',
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
  updateApplicationsUnits(params: UpdateApplicationUnitArgs): Promise<UpdateApplicationUnitResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'UpdateApplicationsUnits',
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
        type: 'CAASApplicationProvisioner',
        request: 'Watch',
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
  watchApplications(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASApplicationProvisioner',
        request: 'WatchApplications',
        version: 1,
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
        type: 'CAASApplicationProvisioner',
        request: 'WatchUnits',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASApplicationProvisionerV1;
