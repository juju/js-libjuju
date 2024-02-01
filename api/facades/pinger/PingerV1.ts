/**
  Juju Pinger version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

/**
  pinger describes a resource that can be pinged and stopped.
*/
class PingerV1 implements Facade {
  static NAME = "Pinger";
  static VERSION = 1;

  NAME = "Pinger";
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

  */
  ping(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Pinger",
        request: "Ping",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Pinger",
        request: "Stop",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default PingerV1;
