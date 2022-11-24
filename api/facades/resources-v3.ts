/**
  Juju Resources version 3.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface AddPendingResourcesArgsV2 {
  Entity: Entity;
  'charm-origin': CharmOrigin;
  macaroon: Macaroon;
  resources: CharmResource[];
  tag: string;
  url: string;
}

export interface AddPendingResourcesResult {
  ErrorResult: ErrorResult;
  error?: Error;
  'pending-ids': string[];
}

export interface Base {
  channel: string;
  name: string;
}

export interface CharmOrigin {
  architecture?: string;
  base?: Base;
  branch?: string;
  hash?: string;
  id: string;
  'instance-key'?: string;
  revision?: number;
  risk?: string;
  source: string;
  track?: string;
  type: string;
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

export interface Entity {
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

export interface ListResourcesArgs {
  entities: Entity[];
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface Resource {
  CharmResource: CharmResource;
  application: string;
  description?: string;
  fingerprint: number[];
  id: string;
  name: string;
  origin: string;
  path: string;
  'pending-id': string;
  revision: number;
  size: number;
  timestamp: string;
  type: string;
  username: string;
}

export interface ResourcesResult {
  ErrorResult: ErrorResult;
  'charm-store-resources': CharmResource[];
  error?: Error;
  resources: Resource[];
  'unit-resources': UnitResources[];
}

export interface ResourcesResults {
  results: ResourcesResult[];
}

export interface UnitResources {
  Entity: Entity;
  'download-progress': AdditionalProperties;
  resources: Resource[];
  tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the public API facade for resources.
*/
class ResourcesV3 {
  static NAME: string = 'Resources';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AddPendingResources adds the provided resources (info) to the Juju
    model in a pending state, meaning they are not available until
    resolved. Handles CharmHub, CharmStore and Local charms.
  */
  addPendingResources(params: AddPendingResourcesArgsV2): Promise<AddPendingResourcesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Resources',
        request: 'AddPendingResources',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListResources returns the list of resources for the given application.
  */
  listResources(params: ListResourcesArgs): Promise<ResourcesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Resources',
        request: 'ListResources',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ResourcesV3;
