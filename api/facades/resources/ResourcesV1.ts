/**
  Juju Resources version 1.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface AddCharmWithAuthorization {
  channel: string;
  force: boolean;
  macaroon: Macaroon;
  url: string;
}

export interface AddPendingResourcesArgs {
  AddCharmWithAuthorization: AddCharmWithAuthorization;
  Entity: Entity;
  channel: string;
  force: boolean;
  macaroon: Macaroon;
  resources: CharmResource[];
  tag: string;
  url: string;
}

export interface AddPendingResourcesResult {
  ErrorResult: ErrorResult;
  error?: Error;
  "pending-ids": string[];
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
  "pending-id": string;
  revision: number;
  size: number;
  timestamp: string;
  type: string;
  username: string;
}

export interface ResourcesResult {
  ErrorResult: ErrorResult;
  "charm-store-resources": CharmResource[];
  error?: Error;
  resources: Resource[];
  "unit-resources": UnitResources[];
}

export interface ResourcesResults {
  results: ResourcesResult[];
}

export interface UnitResources {
  Entity: Entity;
  "download-progress": AdditionalProperties;
  resources: Resource[];
  tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade is the public API facade for resources.
*/
class ResourcesV1 {
  static NAME = "Resources";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
  addPendingResources(
    params: AddPendingResourcesArgs
  ): Promise<AddPendingResourcesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Resources",
        request: "AddPendingResources",
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
        type: "Resources",
        request: "ListResources",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ResourcesV1;
