/**
  Juju PayloadsHookContext version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface LookUpPayloadArg {
  id: string;
  name: string;
}

export interface LookUpPayloadArgs {
  args: LookUpPayloadArg[];
}

export interface Payload {
  class: string;
  id: string;
  labels: string[];
  machine: string;
  status: string;
  type: string;
  unit: string;
}

export interface PayloadResult {
  Entity: Entity;
  error?: Error;
  "not-found": boolean;
  payload: Payload;
  tag: string;
}

export interface PayloadResults {
  results: PayloadResult[];
}

export interface SetPayloadStatusArg {
  Entity: Entity;
  status: string;
  tag: string;
}

export interface SetPayloadStatusArgs {
  args: SetPayloadStatusArg[];
}

export interface TrackPayloadArgs {
  payloads: Payload[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UnitFacade serves payload-specific API methods.
*/
class PayloadsHookContextV1 implements Facade {
  static NAME = "PayloadsHookContext";
  static VERSION = 1;

  NAME = "PayloadsHookContext";
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
    List builds the list of payload being tracked for
    the given unit and IDs. If no IDs are provided then all tracked
    payloads for the unit are returned.
  */
  list(params: Entities): Promise<PayloadResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "PayloadsHookContext",
        request: "List",
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
        type: "PayloadsHookContext",
        request: "LookUp",
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
        type: "PayloadsHookContext",
        request: "SetStatus",
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
        type: "PayloadsHookContext",
        request: "Track",
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
        type: "PayloadsHookContext",
        request: "Untrack",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default PayloadsHookContextV1;
