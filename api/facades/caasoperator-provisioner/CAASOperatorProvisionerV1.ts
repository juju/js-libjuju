/**
  Juju CAASOperatorProvisioner version 1.
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
import { autoBind } from "../../utils.js";

export interface APIHostPortsResult {
  servers: HostPort[][];
}

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

export interface HostPort {
  Address: Address;
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  port: number;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface IssueOperatorCertificateResult {
  "ca-cert": string;
  cert: string;
  error?: Error;
  "private-key": string;
}

export interface IssueOperatorCertificateResults {
  results: IssueOperatorCertificateResult[];
}

export interface KubernetesFilesystemAttachmentParams {
  "mount-point"?: string;
  provider: string;
  "read-only"?: boolean;
}

export interface KubernetesFilesystemParams {
  attachment?: KubernetesFilesystemAttachmentParams;
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

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface OperatorProvisioningInfo {
  "api-addresses": string[];
  "base-image-details": DockerImageInfo;
  "charm-storage"?: KubernetesFilesystemParams;
  error?: Error;
  "image-details": DockerImageInfo;
  tags?: AdditionalProperties;
  version: number;
}

export interface OperatorProvisioningInfoResults {
  results: OperatorProvisioningInfo[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class CAASOperatorProvisionerV1 {
  static NAME = "CAASOperatorProvisioner";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(params: any): Promise<StringsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "APIAddresses",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(params: any): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "APIHostPorts",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationCharmInfo returns information about an application's charm.
  */
  applicationCharmInfo(params: Entity): Promise<Charm> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "ApplicationCharmInfo",
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
        type: "CAASOperatorProvisioner",
        request: "CharmInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    IssueOperatorCertificate issues an x509 certificate for use by the specified application operator.
  */
  issueOperatorCertificate(
    params: Entities
  ): Promise<IssueOperatorCertificateResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "IssueOperatorCertificate",
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
        type: "CAASOperatorProvisioner",
        request: "Life",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelUUID returns the model UUID that this facade is used to operate.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "ModelUUID",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    OperatorProvisioningInfo returns the info needed to provision an operator.
  */
  operatorProvisioningInfo(
    params: Entities
  ): Promise<OperatorProvisioningInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "OperatorProvisioningInfo",
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
        type: "CAASOperatorProvisioner",
        request: "SetPasswords",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASOperatorProvisioner",
        request: "WatchAPIHostPorts",
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
        type: "CAASOperatorProvisioner",
        request: "WatchApplications",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASOperatorProvisionerV1;
