/**
  Juju CharmHub version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BundleCharm {
  name: string;
  "package-id": string;
}

export interface Channel {
  platforms: Platform[];
  "released-at": string;
  revision: number;
  risk: string;
  size: number;
  track: string;
  version: string;
}

export interface CharmHubBundle {
  charms: BundleCharm[];
}

export interface CharmHubCharm {
  config: AdditionalProperties;
  relations: AdditionalProperties;
  subordinate: boolean;
  "used-by": string[];
}

export interface CharmHubEntityFindResult {
  errors: ErrorResponse;
  result: FindResponse[];
}

export interface CharmHubEntityInfoResult {
  errors: ErrorResponse;
  result: InfoResponse;
}

export interface CharmHubError {
  code: string;
  message: string;
}

export interface CharmOption {
  default?: AdditionalProperties;
  description?: string;
  type: string;
}

export interface ErrorResponse {
  "error-list": CharmHubError;
}

export interface FindResponse {
  architectures?: string[];
  id: string;
  name: string;
  os?: string[];
  publisher: string;
  series?: string[];
  "store-url": string;
  summary: string;
  type: string;
  version: string;
}

export interface Info {
  channel?: string;
  tag: string;
}

export interface InfoResponse {
  bundle?: CharmHubBundle;
  "channel-map": AdditionalProperties;
  charm?: CharmHubCharm;
  description: string;
  id: string;
  name: string;
  publisher: string;
  series: string[];
  "store-url": string;
  summary: string;
  tags: string[];
  tracks: string[];
  type: string;
}

export interface Platform {
  architecture: string;
  os: string;
  series: string;
}

export interface Query {
  category?: string;
  channel?: string;
  platforms?: string;
  publisher?: string;
  query: string;
  "relation-provides"?: string;
  "relation-requires"?: string;
  type?: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmHubAPI API provides the CharmHub API facade for version 1.
*/
class CharmHubV1 implements Facade {
  static NAME = "CharmHub";
  static VERSION = 1;

  NAME = "CharmHub";
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
    Find queries the CharmHub API with a given entity ID.
  */
  find(params: Query): Promise<CharmHubEntityFindResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CharmHub",
        request: "Find",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Info queries the CharmHub API with a given entity ID.
  */
  info(params: Info): Promise<CharmHubEntityInfoResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CharmHub",
        request: "Info",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmHubV1;
