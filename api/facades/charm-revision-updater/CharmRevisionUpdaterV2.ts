/**
  Juju CharmRevisionUpdater version 2.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmRevisionUpdaterAPI implements the CharmRevisionUpdater interface and is the concrete
  implementation of the api end point.
*/
class CharmRevisionUpdaterV2 {
  static NAME = "CharmRevisionUpdater";
  static VERSION = 2;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    UpdateLatestRevisions retrieves the latest revision information from the charm store for all deployed charms
    and records this information in state.
  */
  updateLatestRevisions(params: any): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CharmRevisionUpdater",
        request: "UpdateLatestRevisions",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmRevisionUpdaterV2;
