/**
  Juju Resources version 2.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddPendingResourcesArgsV2 {
  Entity: Entity;
  "charm-origin": CharmOrigin;
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

export interface CharmOrigin {
  architecture?: string;
  branch?: string;
  hash?: string;
  id: string;
  "instance-key"?: string;
  os?: string;
  revision?: number;
  risk?: string;
  series?: string;
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
  error?: Error;
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
  "download-progress": Record<string, number>;
  resources: Resource[];
  tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the public API facade for resources.
*/
class ResourcesV2 implements Facade {
  static NAME = "Resources";
  static VERSION = 2;

  NAME = "Resources";
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
    AddPendingResources adds the provided resources (info) to the Juju
    model in a pending state, meaning they are not available until
    resolved. Handles CharmHub, CharmStore and Local charms.
  */
  addPendingResources(
    params: AddPendingResourcesArgsV2
  ): Promise<AddPendingResourcesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Resources",
        request: "AddPendingResources",
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
        type: "Resources",
        request: "ListResources",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ResourcesV2;
