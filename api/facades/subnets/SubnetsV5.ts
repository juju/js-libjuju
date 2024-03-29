/**
  Juju Subnets version 5.
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

export interface CIDRParams {
  cidrs: string[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
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
  API provides the subnets API facade for version 5.
*/
class SubnetsV5 implements Facade {
  static NAME = "Subnets";
  static VERSION = 5;

  NAME = "Subnets";
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
    AllZones returns all availability zones known to Juju. If a
    zone is unusable, unavailable, or deprecated the Available
    field will be false.
  */
  allZones(params: any): Promise<ZoneResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Subnets",
        request: "AllZones",
        version: 5,
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
        version: 5,
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
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SubnetsV5;
