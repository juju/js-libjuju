/**
  Juju Deployer version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface APIHostPortsResult {
  servers: HostPort[][];
}

export interface Address {
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

export interface DeployerConnectionValues {
  'api-addresses': string[];
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityPassword {
  password: string;
  tag: string;
}

export interface EntityPasswords {
  changes: EntityPassword[];
}

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface HostPort {
  Address: Address;
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  DeployerAPI provides access to the Deployer API facade.
*/
class DeployerV1 {
  static NAME: string = 'Deployer';
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
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(): Promise<StringsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'APIAddresses',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'APIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ConnectionInfo returns all the address information that the
    deployer task needs in one call.
  */
  connectionInfo(): Promise<DeployerConnectionValues> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'ConnectionInfo',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Life returns the life status of every supplied entity, where available.
  */
  life(params: Entities): Promise<LifeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'Life',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUUID returns the model UUID that this facade is deploying into.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'ModelUUID',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Remove removes every given entity from state, calling EnsureDead
    first, then Remove. It will fail if the entity is not present.
  */
  remove(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'Remove',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetPasswords sets the given password for each supplied entity, if possible.
  */
  setPasswords(params: EntityPasswords): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'SetPasswords',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus sets the status of the specified entities.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'SetStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'WatchAPIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnits starts a StringsWatcher to watch all units belonging to
    to any entity (machine or service) passed in args.
  */
  watchUnits(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Deployer',
        request: 'WatchUnits',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default DeployerV1;
