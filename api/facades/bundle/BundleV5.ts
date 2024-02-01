/**
  Juju Bundle version 5.
  This facade is available on:
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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
  changes?: BundleChangesMapArgs[];
  errors?: string[];
}

export interface BundleChangesParams {
  bundleURL: string;
  yaml: string;
}

export interface BundleChangesResults {
  changes?: BundleChange[];
  errors?: string[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ExportBundleParams {
  "include-charm-defaults"?: boolean;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv5 provides the Bundle API facade for version 5. It is otherwise
  identical to V4 with the exception that the V5 adds an arg to export
  bundle to control what is exported..
*/
class BundleV5 implements Facade {
  static NAME = "Bundle";
  static VERSION = 5;

  NAME = "Bundle";
  VERSION = 5;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Bundle",
        request: "ExportBundle",
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
        type: "Bundle",
        request: "GetChanges",
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
  getChangesMapArgs(
    params: BundleChangesParams
  ): Promise<BundleChangesMapArgsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Bundle",
        request: "GetChangesMapArgs",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default BundleV5;
