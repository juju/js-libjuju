/**
  Juju Charms version 2.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Charm {
  actions?: CharmActions;
  config: AdditionalProperties;
  "lxd-profile"?: CharmLXDProfile;
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

export interface CharmMeta {
  categories?: string[];
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

export interface CharmsList {
  names: string[];
}

export interface CharmsListResult {
  "charm-urls": string[];
}

export interface IsMeteredResult {
  metered: boolean;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the charms interface and is the concrete
  implementation of the API end point.
*/
class CharmsV2 implements Facade {
  static NAME = "Charms";
  static VERSION = 2;

  NAME = "Charms";
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
    CharmInfo returns information about the requested charm.
    NOTE: thumper 2016-06-29, this is not a bulk call and probably should be.
  */
  charmInfo(params: CharmURL): Promise<Charm> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "CharmInfo",
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
        type: "Charms",
        request: "IsMetered",
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
        type: "Charms",
        request: "List",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmsV2;
