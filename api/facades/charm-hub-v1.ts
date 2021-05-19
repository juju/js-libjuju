/**
  Juju CharmHub version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface BundleCharm {
  name: string;
  'package-id': string;
}

interface Channel {
  platforms: Platform[];
  'released-at': string;
  revision: number;
  risk: string;
  size: number;
  track: string;
  version: string;
}

interface CharmHubBundle {
  charms: BundleCharm[];
}

interface CharmHubCharm {
  config: AdditionalProperties;
  relations: AdditionalProperties;
  subordinate: boolean;
  'used-by': string[];
}

interface CharmHubEntityFindResult {
  errors: ErrorResponse;
  result: FindResponse[];
}

interface CharmHubEntityInfoResult {
  errors: ErrorResponse;
  result: InfoResponse;
}

interface CharmHubError {
  code: string;
  message: string;
}

interface CharmOption {
  default?: AdditionalProperties;
  description?: string;
  type: string;
}

interface Entity {
  tag: string;
}

interface ErrorResponse {
  'error-list': CharmHubError;
}

interface FindResponse {
  architectures?: string[];
  id: string;
  name: string;
  publisher: string;
  series?: string[];
  'store-url': string;
  summary: string;
  type: string;
  version: string;
}

interface InfoResponse {
  bundle?: CharmHubBundle;
  'channel-map': AdditionalProperties;
  charm?: CharmHubCharm;
  description: string;
  id: string;
  name: string;
  publisher: string;
  series: string[];
  'store-url': string;
  summary: string;
  tags: string[];
  tracks: string[];
  type: string;
}

interface Platform {
  architecture: string;
  os: string;
  series: string;
}

interface Query {
  query: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmHubAPI API provides the CharmHub API facade for version 1.
*/
class CharmHubV1 {
  static NAME: string = 'CharmHub';
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
    Find queries the CharmHub API with a given entity ID.
  */
  find(params: Query): Promise<CharmHubEntityFindResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CharmHub',
        request: 'Find',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Info queries the CharmHub API with a given entity ID.
  */
  info(params: Entity): Promise<CharmHubEntityInfoResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CharmHub',
        request: 'Info',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CharmHubV1;
