/**
  Juju Pinger version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

/**
  pinger describes a resource that can be pinged and stopped.
*/
class PingerV1 {
  static NAME = "Pinger";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
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
