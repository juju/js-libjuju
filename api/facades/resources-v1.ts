/**
  Juju Resources version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Tue, 25 Aug 2020 18:00:56 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddCharmWithAuthorization {
  channel: string;
  force: boolean;
  macaroon: Macaroon;
  url: string;
}

interface AddPendingResourcesArgs {
  AddCharmWithAuthorization: AddCharmWithAuthorization;
  Entity: Entity;
  channel: string;
  force: boolean;
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
  Facade is the public API facade for resources.
*/
class ResourcesV1 {
  static NAME: string = 'Resources';
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
    AddPendingResources adds the provided resources (info) to the Juju
    model in a pending state, meaning they are not available until
    resolved.
  */
  addPendingResources(params: AddPendingResourcesArgs): Promise<AddPendingResourcesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Resources',
        request: 'AddPendingResources',
        version: 1,
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
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ResourcesV1;
