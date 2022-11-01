/**
  Juju CharmRevisionUpdater version 2.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmRevisionUpdaterAPI implements the CharmRevisionUpdater interface and is the concrete
  implementation of the api end point.
*/
class CharmRevisionUpdaterV2 {
  static NAME: string = 'CharmRevisionUpdater';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
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
  updateLatestRevisions(): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CharmRevisionUpdater',
        request: 'UpdateLatestRevisions',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CharmRevisionUpdaterV2;
