/**
  Juju Bundle version 5.
  This facade is available on:
    Controllers
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface BundleChange {
  args: object[];
  id: string;
  method: string;
  requires: string[];
}

interface BundleChangesMapArgs {
  args: AdditionalProperties;
  id: string;
  method: string;
  requires: string[];
}

interface BundleChangesMapArgsResults {
  changes: BundleChangesMapArgs[];
  errors: string[];
}

interface BundleChangesParams {
  bundleURL: string;
  yaml: string;
}

interface BundleChangesResults {
  changes: BundleChange[];
  errors: string[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ExportBundleParams {
  'include-charm-defaults': boolean;
}

interface StringResult {
  error?: Error;
  result: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv5 provides the Bundle API facade for version 5. It is otherwise
  identical to V4 with the exception that the V5 adds an arg to export
  bundle to control what is exported..
*/
class BundleV5 {
  static NAME: string = 'Bundle';
  static VERSION: number = 5;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 5;
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
        version: 5,
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
        version: 5,
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
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BundleV5;
