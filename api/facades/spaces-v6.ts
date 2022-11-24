/**
  Juju Spaces version 6.
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


export interface CreateSpaceParams {
  cidrs: string[];
  'provider-id'?: string;
  public: boolean;
  'space-tag': string;
}

export interface CreateSpacesParams {
  spaces: CreateSpaceParams[];
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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ListSpacesResults {
  results: Space[];
}

export interface MoveSubnetsParam {
  force: boolean;
  'space-tag': string;
  subnets: string[];
}

export interface MoveSubnetsParams {
  args: MoveSubnetsParam[];
}

export interface MoveSubnetsResult {
  error?: Error;
  'moved-subnets'?: MovedSubnet[];
  'new-space': string;
}

export interface MoveSubnetsResults {
  results: MoveSubnetsResult[];
}

export interface MovedSubnet {
  cidr: string;
  'old-space': string;
  subnet: string;
}

export interface RemoveSpaceParam {
  'dry-run'?: boolean;
  force?: boolean;
  space: Entity;
}

export interface RemoveSpaceParams {
  'space-param': RemoveSpaceParam[];
}

export interface RemoveSpaceResult {
  bindings: Entity[];
  constraints: Entity[];
  'controller-settings': string[];
  error: Error;
}

export interface RemoveSpaceResults {
  results: RemoveSpaceResult[];
}

export interface RenameSpaceParams {
  'from-space-tag': string;
  'to-space-tag': string;
}

export interface RenameSpacesParams {
  changes: RenameSpaceParams[];
}

export interface ShowSpaceResult {
  applications: string[];
  error?: Error;
  'machine-count': number;
  space: Space;
}

export interface ShowSpaceResults {
  results: ShowSpaceResult[];
}

export interface Space {
  error?: Error;
  id: string;
  name: string;
  subnets: Subnet[];
}

export interface Subnet {
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the spaces API facade for version 6.
*/
class SpacesV6 {
  static NAME: string = 'Spaces';
  static VERSION: number = 6;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 6;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    CreateSpaces creates a new Juju network space, associating the
    specified subnets with it (optional; can be empty).
  */
  createSpaces(params: CreateSpacesParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'CreateSpaces',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListSpaces lists all the available spaces and their associated subnets.
  */
  listSpaces(): Promise<ListSpacesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'ListSpaces',
        version: 6,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MoveSubnets ensures that the input subnets are in the input space.
  */
  moveSubnets(params: MoveSubnetsParams): Promise<MoveSubnetsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'MoveSubnets',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ReloadSpaces refreshes spaces from substrate
  */
  reloadSpaces(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'ReloadSpaces',
        version: 6,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveSpace removes a space.
    Returns SpaceResults if entities/settings are found which makes the deletion not possible.
  */
  removeSpace(params: RemoveSpaceParams): Promise<RemoveSpaceResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'RemoveSpace',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RenameSpace renames a space.
  */
  renameSpace(params: RenameSpacesParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'RenameSpace',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ShowSpace shows the spaces for a set of given entities.
  */
  showSpace(params: Entities): Promise<ShowSpaceResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Spaces',
        request: 'ShowSpace',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SpacesV6;
