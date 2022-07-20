/**
  Juju Resources version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddPendingResourcesArgsV2 {
  Entity: Entity;
  'charm-origin': CharmOrigin;
  macaroon: Macaroon;
  resources: CharmResource[];
  tag: string;
  url: string;
}

interface AddPendingResourcesResult {
  ErrorResult: ErrorResult;
  error?: Error;
  'pending-ids': string[];
}

interface CharmOrigin {
  architecture?: string;
  branch?: string;
  hash?: string;
  id: string;
  'instance-key'?: string;
  os?: string;
  revision?: number;
  risk?: string;
  series?: string;
  source: string;
  track?: string;
  type: string;
}

interface CharmResource {
  description?: string;
  fingerprint: number[];
  name: string;
  origin: string;
  path: string;
  revision: number;
  size: number;
  type: string;
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ListResourcesArgs {
  entities: Entity[];
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface Resource {
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

interface ResourcesResult {
  ErrorResult: ErrorResult;
  'charm-store-resources': CharmResource[];
  error?: Error;
  resources: Resource[];
  'unit-resources': UnitResources[];
}

interface ResourcesResults {
  results: ResourcesResult[];
}

interface UnitResources {
  Entity: Entity;
  'download-progress': AdditionalProperties;
  resources: Resource[];
  tag: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the public API facade for resources.
*/
class ResourcesV2 {
  static NAME: string = 'Resources';
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
    AddPendingResources adds the provided resources (info) to the Juju
    model in a pending state, meaning they are not available until
    resolved. Handles CharmHub, CharmStore and Local charms.
  */
  addPendingResources(params: AddPendingResourcesArgsV2): Promise<AddPendingResourcesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Resources',
        request: 'AddPendingResources',
        version: 2,
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
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ResourcesV2;
