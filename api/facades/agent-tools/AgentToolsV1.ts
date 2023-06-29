/**
  Juju AgentTools version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

/**
  AgentToolsAPI implements the API used by the machine model worker.
*/
class AgentToolsV1 implements Facade {
  static NAME = "AgentTools";
  static VERSION = 1;

  NAME = "AgentTools";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    UpdateToolsAvailable invokes a lookup and further update in environ
    for new patches of the current tool versions.
  */
  updateToolsAvailable(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "AgentTools",
        request: "UpdateToolsAvailable",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AgentToolsV1;
