/**
  Juju Subnets version 4.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddSubnetParams {
  cidr?: string;
  'provider-network-id'?: string;
  'space-tag': string;
  'subnet-provider-id'?: string;
  'vlan-tag'?: number;
  zones?: string[];
}

interface AddSubnetsParams {
  subnets: AddSubnetParams[];
}

interface CIDRParams {
  cidrs: string[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
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
  API provides the subnets API facade for version 4.
*/
class SubnetsV4 {
  static NAME: string = 'Subnets';
  static VERSION: number = 4;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 4;
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
        type: 'Subnets',
        request: 'AddSubnets',
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
  allZones(): Promise<ZoneResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Subnets',
        request: 'AllZones',
        version: 4,
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
        type: 'Subnets',
        request: 'SubnetsByCIDR',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SubnetsV4;
