/**
  Juju Upgrader version 1.
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


export interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: Number;
  Patch: number;
  Release: string;
  Tag: string;
}

export interface Entities {
  entities: Entity[];
}

export interface EntitiesVersion {
  'agent-tools': EntityVersion[];
}

export interface Entity {
  tag: string;
}

export interface EntityVersion {
  tag: string;
  tools: Version;
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

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface Tools {
  sha256?: string;
  size: number;
  url: string;
  version: Binary;
}

export interface ToolsResult {
  error?: Error;
  tools: Tools[];
}

export interface ToolsResults {
  results: ToolsResult[];
}

export interface Version {
  version: Binary;
}

export interface VersionResult {
  error: Error;
  version: Number;
}

export interface VersionResults {
  results: VersionResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class UpgraderV1 {
  static NAME: string = 'Upgrader';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**

  */
  desiredVersion(params: Entities): Promise<VersionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Upgrader',
        request: 'DesiredVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  setTools(params: EntitiesVersion): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Upgrader',
        request: 'SetTools',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  tools(params: Entities): Promise<ToolsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Upgrader',
        request: 'Tools',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  watchAPIVersion(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Upgrader',
        request: 'WatchAPIVersion',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UpgraderV1;
