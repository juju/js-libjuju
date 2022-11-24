/**
  Juju Bundle version 6.
  This facade is available on:
    Controllers
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface BundleChange {
  args: object[];
  id: string;
  method: string;
  requires: string[];
}

export interface BundleChangesMapArgs {
  args: AdditionalProperties;
  id: string;
  method: string;
  requires: string[];
}

export interface BundleChangesMapArgsResults {
  changes: BundleChangesMapArgs[];
  errors: string[];
}

export interface BundleChangesParams {
  bundleURL: string;
  yaml: string;
}

export interface BundleChangesResults {
  changes: BundleChange[];
  errors: string[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ExportBundleParams {
  'include-charm-defaults': boolean;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv6 provides the Bundle API facade for version 6. It is otherwise
  identical to V5 with the exception that the V6 adds the support for
  multi-part yaml handling to GetChanges and GetChangesMapArgs.
*/
class BundleV6 {
  static NAME: string = 'Bundle';
  static VERSION: number = 6;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 6;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ExportBundle exports the current model configuration as bundle.
  */
  exportBundle(params: ExportBundleParams): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Bundle',
        request: 'ExportBundle',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetChanges returns the list of changes required to deploy the given bundle
    data. The changes are sorted by requirements, so that they can be applied in
    order.
    GetChanges has been superseded in favour of GetChangesMapArgs. It's
    preferable to use that new method to add new functionality and move clients
    away from this one.
  */
  getChanges(params: BundleChangesParams): Promise<BundleChangesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Bundle',
        request: 'GetChanges',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetChangesMapArgs returns the list of changes required to deploy the given
    bundle data. The changes are sorted by requirements, so that they can be
    applied in order.
    V4 GetChangesMapArgs is not supported on anything less than v4
  */
  getChangesMapArgs(params: BundleChangesParams): Promise<BundleChangesMapArgsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Bundle',
        request: 'GetChangesMapArgs',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BundleV6;
