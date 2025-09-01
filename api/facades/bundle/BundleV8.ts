/**
  Juju Bundle version 8.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0-beta7 at the git SHA 1123177894.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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

*/
class BundleV8 implements Facade {
  static NAME = "Bundle";
  static VERSION = 8;

  NAME = "Bundle";
  VERSION = 8;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  exportBundle(params: ExportBundleParams): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Bundle",
        request: "ExportBundle",
        version: 8,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  getChangesMapArgs(params: BundleChangesParams): Promise<BundleChangesMapArgsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Bundle",
        request: "GetChangesMapArgs",
        version: 8,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

}

export default BundleV8;
