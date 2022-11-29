/**
  Juju Charms version 4.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface AddCharmWithAuth {
  "charm-origin": CharmOrigin;
  force: boolean;
  macaroon: Macaroon;
  series: string;
  url: string;
}

export interface AddCharmWithOrigin {
  "charm-origin": CharmOrigin;
  force: boolean;
  series: string;
  url: string;
}

export interface ApplicationCharmPlacement {
  application: string;
  "charm-url": string;
}

export interface ApplicationCharmPlacements {
  placements: ApplicationCharmPlacement[];
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

export interface CharmOrigin {
  architecture?: string;
  branch?: string;
  hash?: string;
  id: string;
  "instance-key"?: string;
  os?: string;
  revision?: number;
  risk?: string;
  series?: string;
  source: string;
  track?: string;
  type: string;
}

export interface CharmOriginResult {
  "charm-origin": CharmOrigin;
  error?: Error;
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

export interface CharmResource {
  description?: string;
  fingerprint: number[];
  name: string;
  origin: string;
  path: string;
  revision: number;
  size: number;
  type: string;
}

export interface CharmResourceMeta {
  description: string;
  name: string;
  path: string;
  type: string;
}

export interface CharmResourceResult {
  CharmResource: CharmResource;
  ErrorResult: ErrorResult;
  description?: string;
  error?: Error;
  fingerprint: number[];
  name: string;
  origin: string;
  path: string;
  revision: number;
  size: number;
  type: string;
}

export interface CharmResourcesResults {
  results: CharmResourceResult[][];
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

export interface CharmURLAndOrigin {
  "charm-origin": CharmOrigin;
  "charm-url": string;
  macaroon?: Macaroon;
}

export interface CharmURLAndOrigins {
  entities: CharmURLAndOrigin[];
}

export interface CharmsList {
  names: string[];
}

export interface CharmsListResult {
  "charm-urls": string[];
}

export interface DownloadInfoResult {
  "charm-origin": CharmOrigin;
  url: string;
}

export interface DownloadInfoResults {
  results: DownloadInfoResult[];
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

export interface IsMeteredResult {
  metered: boolean;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface ResolveCharmWithChannel {
  "charm-origin": CharmOrigin;
  reference: string;
  "switch-charm"?: boolean;
}

export interface ResolveCharmWithChannelResult {
  "charm-origin": CharmOrigin;
  error?: Error;
  "supported-series": string[];
  url: string;
}

export interface ResolveCharmWithChannelResults {
  Results: ResolveCharmWithChannelResult[];
}

export interface ResolveCharmsWithChannel {
  macaroon?: Macaroon;
  resolve: ResolveCharmWithChannel[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the charms interface and is the concrete
  implementation of the API end point.
*/
class CharmsV4 {
  static NAME = "Charms";
  static VERSION = 4;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 4;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    AddCharm adds the given charm URL (which must include revision) to the
    environment, if it does not exist yet. Local charms are not supported,
    only charm store and charm hub URLs. See also AddLocalCharm().
  */
  addCharm(params: AddCharmWithOrigin): Promise<CharmOriginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "AddCharm",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AddCharmWithAuthorization adds the given charm URL (which must include
    revision) to the environment, if it does not exist yet. Local charms are
    not supported, only charm store and charm hub URLs. See also AddLocalCharm().

    The authorization macaroon, args.CharmStoreMacaroon, may be
    omitted, in which case this call is equivalent to AddCharm.
  */
  addCharmWithAuthorization(
    params: AddCharmWithAuth
  ): Promise<CharmOriginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "AddCharmWithAuthorization",
        version: 4,
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
        type: "Charms",
        request: "CharmInfo",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CheckCharmPlacement checks if a charm is allowed to be placed with in a
    given application.
  */
  checkCharmPlacement(
    params: ApplicationCharmPlacements
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "CheckCharmPlacement",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetDownloadInfos attempts to get the bundle corresponding to the charm url
    and origin.
  */
  getDownloadInfos(params: CharmURLAndOrigins): Promise<DownloadInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "GetDownloadInfos",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    IsMetered returns whether or not the charm is metered.
  */
  isMetered(params: CharmURL): Promise<IsMeteredResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "IsMetered",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    List returns a list of charm URLs currently in the state.
    If supplied parameter contains any names, the result will
    be filtered to return only the charms with supplied names.
  */
  list(params: CharmsList): Promise<CharmsListResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "List",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListCharmResources returns a series of resources for a given charm.
  */
  listCharmResources(
    params: CharmURLAndOrigins
  ): Promise<CharmResourcesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "ListCharmResources",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ResolveCharms resolves the given charm URLs with an optionally specified
    preferred channel.  Channel provided via CharmOrigin.
  */
  resolveCharms(
    params: ResolveCharmsWithChannel
  ): Promise<ResolveCharmWithChannelResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "ResolveCharms",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmsV4;
