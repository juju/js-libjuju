/**
  Juju CAASModelOperator version 1.
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

export interface APIHostPortsResult {
  servers: HostPort[][];
}

export interface Address {
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface DockerImageInfo {
  auth?: string;
  email?: string;
  identitytoken?: string;
  "image-name": string;
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface HostPort {
  Address: Address;
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  port: number;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface ModelOperatorInfo {
  "api-addresses": string[];
  "image-details": DockerImageInfo;
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
  error?: Error;
  result?: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API represents the controller model operator facade.
*/
class CAASModelOperatorV1 implements Facade {
  static NAME = "CAASModelOperator";
  static VERSION = 1;

  NAME = "CAASModelOperator";
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
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(params: any): Promise<StringsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "APIAddresses",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(params: any): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "APIHostPorts",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelOperatorProvisioningInfo returns the information needed for provisioning
    a new model operator into a caas cluster.
  */
  modelOperatorProvisioningInfo(params: any): Promise<ModelOperatorInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "ModelOperatorProvisioningInfo",
        version: 1,
        params: params,
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
  modelUUID(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "ModelUUID",
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
        type: "CAASModelOperator",
        request: "SetPasswords",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "WatchAPIHostPorts",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelOperatorProvisioningInfo provides a watcher for changes that affect the
    information returned by ModelOperatorProvisioningInfo.
  */
  watchModelOperatorProvisioningInfo(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CAASModelOperator",
        request: "WatchModelOperatorProvisioningInfo",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CAASModelOperatorV1;
