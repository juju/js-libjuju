/**
  Juju Charms version 4.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddCharmWithAuth {
  'charm-origin': CharmOrigin;
  force: boolean;
  macaroon: Macaroon;
  series: string;
  url: string;
}

interface AddCharmWithOrigin {
  'charm-origin': CharmOrigin;
  force: boolean;
  series: string;
  url: string;
}

interface ApplicationCharmPlacement {
  application: string;
  'charm-url': string;
}

interface ApplicationCharmPlacements {
  placements: ApplicationCharmPlacement[];
}

interface Charm {
  actions?: CharmActions;
  config: AdditionalProperties;
  'lxd-profile'?: CharmLXDProfile;
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

interface CharmContainer {
  mounts: CharmMount[];
  systems: CharmSystem[];
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

interface CharmMeta {
  architectures?: string[];
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
  platforms?: string[];
  provides?: AdditionalProperties;
  requires?: AdditionalProperties;
  resources?: AdditionalProperties;
  series?: string[];
  storage?: AdditionalProperties;
  subordinate: boolean;
  summary: string;
  systems?: CharmSystem[];
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

interface CharmOrigin {
  hash?: string;
  id: string;
  revision?: number;
  risk?: string;
  source: string;
  track?: string;
}

interface CharmOriginResult {
  'charm-origin': CharmOrigin;
  error?: Error;
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

interface CharmSystem {
  channel: string;
  os: string;
  resource: string;
}

interface CharmURL {
  url: string;
}

interface CharmsList {
  names: string[];
}

interface CharmsListResult {
  'charm-urls': string[];
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

interface IsMeteredResult {
  metered: boolean;
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface ResolveCharmWithChannel {
  'charm-origin': CharmOrigin;
  reference: string;
}

interface ResolveCharmWithChannelResult {
  'charm-origin': CharmOrigin;
  error?: Error;
  'supported-series': string[];
  url: string;
}

interface ResolveCharmWithChannelResults {
  Results: ResolveCharmWithChannelResult[];
}

interface ResolveCharmsWithChannel {
  macaroon?: Macaroon;
  resolve: ResolveCharmWithChannel[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the charms interface and is the concrete
  implementation of the API end point.
*/
class CharmsV4 {
  static NAME: string = 'Charms';
  static VERSION: number = 4;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
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
        type: 'Charms',
        request: 'AddCharm',
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
  addCharmWithAuthorization(params: AddCharmWithAuth): Promise<CharmOriginResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'AddCharmWithAuthorization',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmInfo returns information about the requested charm.
    NOTE: thumper 2016-06-29, this is not a bulk call and probably should be.
  */
  charmInfo(params: CharmURL): Promise<Charm> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'CharmInfo',
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
  checkCharmPlacement(params: ApplicationCharmPlacements): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'CheckCharmPlacement',
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
        type: 'Charms',
        request: 'IsMetered',
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
        type: 'Charms',
        request: 'List',
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
  resolveCharms(params: ResolveCharmsWithChannel): Promise<ResolveCharmWithChannelResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'ResolveCharms',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CharmsV4;
