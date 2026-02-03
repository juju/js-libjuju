/**
  Juju SSHClient version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju  at the git SHA 8cc1409ebd.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface CloudCredential {
  attrs?: Record<string, string>;
  "auth-type": string;
  redacted?: string[];
}

export interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  "identity-endpoint"?: string;
  "is-controller-cloud"?: boolean;
  name: string;
  region?: string;
  "skip-tls-verify"?: boolean;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudSpecResult {
  error?: Error;
  result?: CloudSpec;
}

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

export interface PublicSSHHostKeyResult {
  error?: Error;
  "jump-server-public-key": number[];
  "public-key": number[];
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

export interface SSHVirtualHostKeyRequestArg {
  hostname: string;
}

export interface VirtualHostnameTargetArg {
  container?: string;
  tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class SSHClientV5 implements Facade {
  static NAME = "SSHClient";
  static VERSION = 5;

  NAME = "SSHClient";
  VERSION = 5;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  allAddresses(params: Entities): Promise<SSHAddressesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "AllAddresses",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modelCredentialForSSH(params: any): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "ModelCredentialForSSH",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  privateAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PrivateAddress",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  proxy(params: any): Promise<SSHProxyResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "Proxy",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  publicAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PublicAddress",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  publicHostKeyForTarget(
    params: SSHVirtualHostKeyRequestArg
  ): Promise<PublicSSHHostKeyResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PublicHostKeyForTarget",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  publicKeys(params: Entities): Promise<SSHPublicKeysResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "PublicKeys",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  virtualHostname(params: VirtualHostnameTargetArg): Promise<SSHAddressResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SSHClient",
        request: "VirtualHostname",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SSHClientV5;
