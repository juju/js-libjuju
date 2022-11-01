/**
  Juju Subnets version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface CIDRParams {
  cidrs: string[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ListSubnetsResults {
  results: Subnet[];
}

interface Subnet {
  cidr: string;
  life: string;
  'provider-id'?: string;
  'provider-network-id'?: string;
  'provider-space-id'?: string;
  'space-tag': string;
  status?: string;
  'vlan-tag': number;
  zones: string[];
}

interface SubnetV2 {
  Subnet: Subnet;
  cidr: string;
  id?: string;
  life: string;
  'provider-id'?: string;
  'provider-network-id'?: string;
  'provider-space-id'?: string;
  'space-tag': string;
  status?: string;
  'vlan-tag': number;
  zones: string[];
}

interface SubnetsFilters {
  'space-tag': string;
  zone: string;
}

interface SubnetsResult {
  error: Error;
  subnets: SubnetV2[];
}

interface SubnetsResults {
  results: SubnetsResult[];
}

interface ZoneResult {
  available: boolean;
  error?: Error;
  name: string;
}

interface ZoneResults {
  results: ZoneResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the subnets API facade for version 5.
*/
class SubnetsV5 {
  static NAME: string = 'Subnets';
  static VERSION: number = 5;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 5;
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
  allZones(): Promise<ZoneResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Subnets',
        request: 'AllZones',
        version: 5,
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
        type: 'Subnets',
        request: 'ListSubnets',
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
        type: 'Subnets',
        request: 'SubnetsByCIDR',
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SubnetsV5;
