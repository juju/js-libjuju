/**
  Juju Pinger version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated on Tue, 25 Aug 2020 18:00:56 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";



/**
  pinger describes a resource that can be pinged and stopped.
*/
class PingerV1 {
  static NAME: string = 'Pinger';
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

  */
  ping(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Pinger',
        request: 'Ping',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Pinger',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default PingerV1;
