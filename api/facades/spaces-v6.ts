/**
  Juju Spaces version 6.
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


interface CreateSpaceParams {
  cidrs: string[];
  'provider-id'?: string;
  public: boolean;
  'space-tag': string;
}

interface CreateSpacesParams {
  spaces: CreateSpaceParams[];
}

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

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface ListSpacesResults {
  results: Space[];
}

interface MoveSubnetsParam {
  force: boolean;
  'space-tag': string;
  subnets: string[];
}

interface MoveSubnetsParams {
  args: MoveSubnetsParam[];
}

interface MoveSubnetsResult {
  error?: Error;
  'moved-subnets'?: MovedSubnet[];
  'new-space': string;
}

interface MoveSubnetsResults {
  results: MoveSubnetsResult[];
}

interface MovedSubnet {
  cidr: string;
  'old-space': string;
  subnet: string;
}

interface RemoveSpaceParam {
  'dry-run'?: boolean;
  force?: boolean;
  space: Entity;
}

interface RemoveSpaceParams {
  'space-param': RemoveSpaceParam[];
}

interface RemoveSpaceResult {
  bindings: Entity[];
  constraints: Entity[];
  'controller-settings': string[];
  error: Error;
}

interface RemoveSpaceResults {
  results: RemoveSpaceResult[];
}

interface RenameSpaceParams {
  'from-space-tag': string;
  'to-space-tag': string;
}

interface RenameSpacesParams {
  changes: RenameSpaceParams[];
}

interface ShowSpaceResult {
  applications: string[];
  error?: Error;
  'machine-count': number;
  space: Space;
}

interface ShowSpaceResults {
  results: ShowSpaceResult[];
}

interface Space {
  error?: Error;
  id: string;
  name: string;
  subnets: Subnet[];
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

interface AdditionalProperties {
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
