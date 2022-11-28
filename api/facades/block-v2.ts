/**
  Juju Block version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


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
class BlockV2 {
  static NAME: string = 'Block';
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
    List implements Block.List().
  */
  list(): Promise<BlockResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Block',
        request: 'List',
        version: 2,
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
        type: 'Block',
        request: 'SwitchBlockOff',
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
        type: 'Block',
        request: 'SwitchBlockOn',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default BlockV2;
