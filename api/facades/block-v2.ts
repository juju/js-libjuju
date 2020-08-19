/**
  Juju Block version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Block {
  id: string;
  message?: string;
  tag: string;
  type: string;
}

interface BlockResult {
  error?: Error;
  result: Block;
}

interface BlockResults {
  results: BlockResult[];
}

interface BlockSwitchParams {
  message?: string;
  type: string;
}

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
