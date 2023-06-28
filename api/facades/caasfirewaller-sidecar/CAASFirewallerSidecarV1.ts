/**
  Juju CAASFirewallerSidecar version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface ApplicationGetConfigResults {
  Results: ConfigResult[];
}

export interface ApplicationOpenedPorts {
  endpoint: string;
  "port-ranges": PortRange[];
}

export interface ApplicationOpenedPortsResult {
  "application-port-ranges": ApplicationOpenedPorts[];
  error?: Error;
}

export interface ApplicationOpenedPortsResults {
  results: ApplicationOpenedPortsResult[];
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

export interface ConfigResult {
  config: AdditionalProperties;
  error?: Error;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ExpressionTree {
  Expression: AdditionalProperties;
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

export interface PortRange {
  "from-port": number;
  protocol: string;
  "to-port": number;
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  FacadeSidecar provides access to the CAASFirewaller API facade for sidecar applications.
*/
class CAASFirewallerSidecarV1 implements Facade {
  static NAME = "CAASFirewallerSidecar";
  static VERSION = 1;

  NAME = "CAASFirewallerSidecar";
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
        type: "CAASFirewallerSidecar",
        request: "ApplicationCharmInfo",
        version: 1,
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
        type: "CAASFirewallerSidecar",
        request: "ApplicationsConfig",
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
        type: "CAASFirewallerSidecar",
        request: "CharmInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetOpenedPorts returns all the opened ports for each given application tag.
  */
  getOpenedPorts(params: Entity): Promise<ApplicationOpenedPortsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASFirewallerSidecar",
        request: "GetOpenedPorts",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    IsExposed returns whether the specified applications are exposed.
  */
  isExposed(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASFirewallerSidecar",
        request: "IsExposed",
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
        type: "CAASFirewallerSidecar",
        request: "Life",
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
        type: "CAASFirewallerSidecar",
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
        type: "CAASFirewallerSidecar",
        request: "WatchApplications",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchOpenedPorts returns a new StringsWatcher for each given
    model tag.
  */
  watchOpenedPorts(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASFirewallerSidecar",
        request: "WatchOpenedPorts",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASFirewallerSidecarV1;
