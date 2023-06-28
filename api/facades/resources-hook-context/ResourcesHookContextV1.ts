/**
  Juju ResourcesHookContext version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface ListUnitResourcesArgs {
  "resource-names": string[];
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

export interface UnitResourceResult {
  ErrorResult: ErrorResult;
  error?: Error;
  resource: Resource;
}

export interface UnitResourcesResult {
  ErrorResult: ErrorResult;
  error?: Error;
  resources: UnitResourceResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UnitFacade is the resources portion of the uniter's API facade.
*/
class ResourcesHookContextV1 implements Facade {
  static NAME = "ResourcesHookContext";
  static VERSION = 1;

  NAME = "ResourcesHookContext";
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
    GetResourceInfo returns the resource info for each of the given
    resource names (for the implicit application). If any one is missing then
    the corresponding result is set with errors.NotFound.
  */
  getResourceInfo(params: ListUnitResourcesArgs): Promise<UnitResourcesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ResourcesHookContext",
        request: "GetResourceInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ResourcesHookContextV1;
