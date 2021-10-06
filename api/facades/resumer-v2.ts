/**
  Juju Resumer version 2.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";



/**
  ResumerAPI implements the API used by the resumer worker.
*/
class ResumerV2 {
  static NAME: string = 'Resumer';
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

  */
  resumeTransactions(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Resumer',
        request: 'ResumeTransactions',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ResumerV2;
