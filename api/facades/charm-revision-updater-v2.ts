/**
  Juju CharmRevisionUpdater version 2.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
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
