/**
  Juju PayloadsHookContext version 1.
  This facade is available on:
    Unit-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface LookUpPayloadArg {
  id: string;
  name: string;
}

interface LookUpPayloadArgs {
  args: LookUpPayloadArg[];
}

interface Payload {
  class: string;
  id: string;
  labels: string[];
  machine: string;
  status: string;
  type: string;
  unit: string;
}

interface PayloadResult {
  Entity: Entity;
  error?: Error;
  'not-found': boolean;
  payload: Payload;
  tag: string;
}

interface PayloadResults {
  results: PayloadResult[];
}

interface SetPayloadStatusArg {
  Entity: Entity;
  status: string;
  tag: string;
}

interface SetPayloadStatusArgs {
  args: SetPayloadStatusArg[];
}

interface TrackPayloadArgs {
  payloads: Payload[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  UnitFacade serves payload-specific API methods.
*/
class PayloadsHookContextV1 {
  static NAME: string = 'PayloadsHookContext';
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
    List builds the list of payload being tracked for
    the given unit and IDs. If no IDs are provided then all tracked
    payloads for the unit are returned.
  */
  list(params: Entities): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'PayloadsHookContext',
        request: 'List',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LookUp identifies the payload with the provided name and raw ID.
  */
  lookUp(params: LookUpPayloadArgs): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'PayloadsHookContext',
        request: 'LookUp',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus sets the raw status of a payload.
  */
  setStatus(params: SetPayloadStatusArgs): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'PayloadsHookContext',
        request: 'SetStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Track stores a payload to be tracked in state.
  */
  track(params: TrackPayloadArgs): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'PayloadsHookContext',
        request: 'Track',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Untrack marks the identified payload as no longer being tracked.
  */
  untrack(params: Entities): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'PayloadsHookContext',
        request: 'Untrack',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default PayloadsHookContextV1;
