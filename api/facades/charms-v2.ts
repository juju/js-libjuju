/**
  Juju Charms version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Tue, 25 Aug 2020 18:00:56 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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
  categories?: string[];
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

interface CharmsList {
  names: string[];
}

interface CharmsListResult {
  'charm-urls': string[];
}

interface IsMeteredResult {
  metered: boolean;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the charms interface and is the concrete
  implementation of the API end point.
*/
class CharmsV2 {
  static NAME: string = 'Charms';
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
    CharmInfo returns information about the requested charm.
    NOTE: thumper 2016-06-29, this is not a bulk call and probably should be.
  */
  charmInfo(params: CharmURL): Promise<Charm> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'CharmInfo',
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    List returns a list of charm URLs currently in the state.
    If supplied parameter contains any names, the result will be filtered
    to return only the charms with supplied names.
  */
  list(params: CharmsList): Promise<CharmsListResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Charms',
        request: 'List',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CharmsV2;
