/**
  Juju CAASModelOperator version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface DockerImageInfo {
  auth?: string;
  email?: string;
  identitytoken?: string;
  'image-name': string;
  password?: string;
  registrytoken?: string;
  repository?: string;
  serveraddress?: string;
  username?: string;
}

export interface EntityPassword {
  password: string;
  tag: string;
}

export interface EntityPasswords {
  changes: EntityPassword[];
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

export interface ModelOperatorInfo {
  'api-addresses': string[];
  'image-details': DockerImageInfo;
  version: Number;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API represents the controller model operator facade.
*/
class CAASModelOperatorV1 {
  static NAME: string = 'CAASModelOperator';
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
        type: 'CAASModelOperator',
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
        type: 'CAASModelOperator',
        request: 'APIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelOperatorProvisioningInfo returns the information needed for provisioning
    a new model operator into a caas cluster.
  */
  modelOperatorProvisioningInfo(): Promise<ModelOperatorInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASModelOperator',
        request: 'ModelOperatorProvisioningInfo',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUUID returns the model UUID that this facade is used to operate.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASModelOperator',
        request: 'ModelUUID',
        version: 1,
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
        type: 'CAASModelOperator',
        request: 'SetPasswords',
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
        type: 'CAASModelOperator',
        request: 'WatchAPIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASModelOperatorV1;
