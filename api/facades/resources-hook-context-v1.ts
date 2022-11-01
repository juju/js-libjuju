/**
  Juju ResourcesHookContext version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ListUnitResourcesArgs {
  'resource-names': string[];
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

interface UnitResourceResult {
  ErrorResult: ErrorResult;
  error?: Error;
  resource: Resource;
}

interface UnitResourcesResult {
  ErrorResult: ErrorResult;
  error?: Error;
  resources: UnitResourceResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  UnitFacade is the resources portion of the uniter's API facade.
*/
class ResourcesHookContextV1 {
  static NAME: string = 'ResourcesHookContext';
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
    GetResourceInfo returns the resource info for each of the given
    resource names (for the implicit application). If any one is missing then
    the corresponding result is set with errors.NotFound.
  */
  getResourceInfo(params: ListUnitResourcesArgs): Promise<UnitResourcesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ResourcesHookContext',
        request: 'GetResourceInfo',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ResourcesHookContextV1;
