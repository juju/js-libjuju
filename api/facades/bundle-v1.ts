/**
  Juju Bundle version 1.
  This facade is available on:
    Controllers
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
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

interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv1 provides the Bundle API facade for version 1.
*/
class BundleV1 {
  static NAME: string = 'Bundle';
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
    GetChanges returns the list of changes required to deploy the given bundle
    data. The changes are sorted by requirements, so that they can be applied in
    order.
    V1 GetChanges did not support device.
  */
  getChanges(params: BundleChangesParams): Promise<BundleChangesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Bundle',
        request: 'GetChanges',
        version: 1,
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
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BundleV1;
