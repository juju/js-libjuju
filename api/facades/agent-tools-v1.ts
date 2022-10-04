/**
  Juju AgentTools version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";



/**
  AgentToolsAPI implements the API used by the machine model worker.
*/
class AgentToolsV1 {
  static NAME: string = 'AgentTools';
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
    UpdateToolsAvailable invokes a lookup and further update in environ
    for new patches of the current tool versions.
  */
  updateToolsAvailable(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'AgentTools',
        request: 'UpdateToolsAvailable',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AgentToolsV1;
