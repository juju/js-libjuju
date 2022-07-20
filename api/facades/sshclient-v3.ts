/**
  Juju SSHClient version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
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

interface SSHAddressResult {
  address: string;
  error: Error;
}

interface SSHAddressResults {
  results: SSHAddressResult[];
}

interface SSHAddressesResult {
  addresses: string[];
  error?: Error;
}

interface SSHAddressesResults {
  results: SSHAddressesResult[];
}

interface SSHProxyResult {
  'use-proxy': boolean;
}

interface SSHPublicKeysResult {
  error: Error;
  'public-keys': string[];
}

interface SSHPublicKeysResults {
  results: SSHPublicKeysResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the API required by the sshclient worker.
*/
class SSHClientV3 {
  static NAME: string = 'SSHClient';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
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
        type: 'SSHClient',
        request: 'AllAddresses',
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
        type: 'SSHClient',
        request: 'PrivateAddress',
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
  proxy(): Promise<SSHProxyResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'Proxy',
        version: 3,
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
        type: 'SSHClient',
        request: 'PublicAddress',
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
        type: 'SSHClient',
        request: 'PublicKeys',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SSHClientV3;
