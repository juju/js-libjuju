/**
  Juju Upgrader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: number;
  Patch: number;
  Release: string;
  Tag: string;
}

export interface Entities {
  entities: Entity[];
}

export interface EntitiesVersion {
  "agent-tools": EntityVersion[];
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
  version: number;
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
  static NAME = "Upgrader";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Upgrader",
        request: "DesiredVersion",
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
        type: "Upgrader",
        request: "SetTools",
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
        type: "Upgrader",
        request: "Tools",
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
        type: "Upgrader",
        request: "WatchAPIVersion",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UpgraderV1;
