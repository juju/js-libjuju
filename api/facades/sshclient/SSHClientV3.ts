/**
  Juju SSHClient version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
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

export interface SSHAddressResult {
  address?: string;
  error?: Error;
}

export interface SSHAddressResults {
  results: SSHAddressResult[];
}

export interface SSHAddressesResult {
  addresses: string[];
  error?: Error;
}

export interface SSHAddressesResults {
  results: SSHAddressesResult[];
}

export interface SSHProxyResult {
  "use-proxy": boolean;
}

export interface SSHPublicKeysResult {
  error?: Error;
  "public-keys"?: string[];
}

export interface SSHPublicKeysResults {
  results: SSHPublicKeysResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the API required by the sshclient worker.
*/
class SSHClientV3 implements Facade {
  static NAME = "SSHClient";
  static VERSION = 3;

  NAME = "SSHClient";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AllAddresses reports all addresses that might have SSH listening for each
    entity in args. The result is sorted with public addresses first.
    Machines and units are supported as entity types.
  */
  allAddresses(params: Entities): Promise<SSHAddressesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "AllAddresses",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PrivateAddress reports the preferred private network address for one or
    more entities. Machines and units are supported.
  */
  privateAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PrivateAddress",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Proxy returns whether SSH connections should be proxied through the
    controller hosts for the model associated with the API connection.
  */
  proxy(params: any): Promise<SSHProxyResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "Proxy",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PublicAddress reports the preferred public network address for one
    or more entities. Machines and units are supported.
  */
  publicAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PublicAddress",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PublicKeys returns the public SSH hosts for one or more
    entities. Machines and units are supported.
  */
  publicKeys(params: Entities): Promise<SSHPublicKeysResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PublicKeys",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SSHClientV3;
