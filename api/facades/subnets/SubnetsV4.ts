/**
  Juju Subnets version 4.
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

export interface AddSubnetParams {
  cidr?: string;
  "provider-network-id"?: string;
  "space-tag": string;
  "subnet-provider-id"?: string;
  "vlan-tag"?: number;
  zones?: string[];
}

export interface AddSubnetsParams {
  subnets: AddSubnetParams[];
}

export interface CIDRParams {
  cidrs: string[];
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

export interface ListSubnetsResults {
  results: Subnet[];
}

export interface Subnet {
  cidr: string;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface SubnetV2 {
  Subnet: Subnet;
  cidr: string;
  id?: string;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface SubnetsFilters {
  "space-tag"?: string;
  zone?: string;
}

export interface SubnetsResult {
  error?: Error;
  subnets?: SubnetV2[];
}

export interface SubnetsResults {
  results: SubnetsResult[];
}

export interface ZoneResult {
  available: boolean;
  error?: Error;
  name: string;
}

export interface ZoneResults {
  results: ZoneResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the subnets API facade for version 4.
*/
class SubnetsV4 implements Facade {
  static NAME = "Subnets";
  static VERSION = 4;

  NAME = "Subnets";
  VERSION = 4;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AddSubnets adds existing subnets to Juju.
  */
  addSubnets(params: AddSubnetsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Subnets",
        request: "AddSubnets",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AllZones returns all availability zones known to Juju. If a
    zone is unusable, unavailable, or deprecated the Available
    field will be false.
  */
  allZones(params: any): Promise<ZoneResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Subnets",
        request: "AllZones",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListSubnets returns the matching subnets after applying
    optional filters.
  */
  listSubnets(params: SubnetsFilters): Promise<ListSubnetsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Subnets",
        request: "ListSubnets",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SubnetsByCIDR returns the collection of subnets matching each CIDR in the input.
  */
  subnetsByCIDR(params: CIDRParams): Promise<SubnetsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Subnets",
        request: "SubnetsByCIDR",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SubnetsV4;
