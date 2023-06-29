/**
  Juju Block version 2.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Block {
  id: string;
  message?: string;
  tag: string;
  type: string;
}

export interface BlockResult {
  error?: Error;
  result: Block;
}

export interface BlockResults {
  results: BlockResult[];
}

export interface BlockSwitchParams {
  message?: string;
  type: string;
}

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
  API implements Block interface and is the concrete
  implementation of the api end point.
*/
class BlockV2 implements Facade {
  static NAME = "Block";
  static VERSION = 2;

  NAME = "Block";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    List implements Block.List().
  */
  list(params: any): Promise<BlockResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Block",
        request: "List",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SwitchBlockOff implements Block.SwitchBlockOff().
  */
  switchBlockOff(params: BlockSwitchParams): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Block",
        request: "SwitchBlockOff",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SwitchBlockOn implements Block.SwitchBlockOn().
  */
  switchBlockOn(params: BlockSwitchParams): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Block",
        request: "SwitchBlockOn",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default BlockV2;
