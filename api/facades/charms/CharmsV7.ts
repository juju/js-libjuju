/**
  Juju Charms version 7.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddCharmWithOrigin {
  "charm-origin": CharmOrigin;
  force: boolean;
  url: string;
}

export interface ApplicationCharmPlacement {
  application: string;
  "charm-url": string;
}

export interface ApplicationCharmPlacements {
  placements: ApplicationCharmPlacement[];
}

export interface Base {
  channel: string;
  name: string;
}

export interface Charm {
  actions?: CharmActions;
  config: Record<string, CharmOption>;
  "lxd-profile"?: CharmLXDProfile;
  manifest?: CharmManifest;
  meta?: CharmMeta;
  revision: number;
  url: string;
  version?: string;
}

export interface CharmActionSpec {
  description: string;
  "execution-group"?: string;
  parallel?: boolean;
  params: AdditionalProperties;
}

export interface CharmActions {
  specs?: Record<string, CharmActionSpec>;
}

export interface CharmBase {
  architectures?: string[];
  channel?: string;
  name?: string;
}

export interface CharmContainer {
  gid?: number;
  mounts?: CharmMount[];
  resource?: string;
  uid?: number;
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
  bases?: CharmBase[];
}

export interface CharmMeta {
  "assumes-expr"?: ExpressionTree;
  categories?: string[];
  "charm-user"?: string;
  containers?: Record<string, CharmContainer>;
  description: string;
  devices?: Record<string, CharmDevice>;
  "extra-bindings"?: Record<string, string>;
  "min-juju-version"?: string;
  name: string;
  peers?: Record<string, CharmRelation>;
  provides?: Record<string, CharmRelation>;
  requires?: Record<string, CharmRelation>;
  resources?: Record<string, CharmResourceMeta>;
  storage?: Record<string, CharmStorage>;
  subordinate: boolean;
  summary: string;
  tags?: string[];
  terms?: string[];
}

export interface CharmMount {
  location?: string;
  storage?: string;
}

export interface CharmOption {
  default?: AdditionalProperties;
  description?: string;
  type: string;
}

export interface CharmOrigin {
  architecture?: string;
  base?: Base;
  branch?: string;
  hash?: string;
  id: string;
  "instance-key"?: string;
  revision?: number;
  risk?: string;
  source: string;
  track?: string;
  type: string;
}

export interface CharmOriginResult {
  "charm-origin": CharmOrigin;
  error?: Error;
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ExpressionTree {
  Expression: AdditionalProperties;
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
  "supported-bases": Base[];
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

class CharmsV7 implements Facade {
  static NAME = "Charms";
  static VERSION = 7;

  NAME = "Charms";
  VERSION = 7;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  addCharm(params: AddCharmWithOrigin): Promise<CharmOriginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "AddCharm",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  charmInfo(params: CharmURL): Promise<Charm> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "CharmInfo",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  checkCharmPlacement(
    params: ApplicationCharmPlacements
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "CheckCharmPlacement",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  getDownloadInfos(params: CharmURLAndOrigins): Promise<DownloadInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "GetDownloadInfos",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  list(params: CharmsList): Promise<CharmsListResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "List",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  listCharmResources(
    params: CharmURLAndOrigins
  ): Promise<CharmResourcesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "ListCharmResources",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  resolveCharms(
    params: ResolveCharmsWithChannel
  ): Promise<ResolveCharmWithChannelResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Charms",
        request: "ResolveCharms",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmsV7;
