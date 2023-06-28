/**
  Juju CharmDownloader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmDownloaderAPI implements an API for watching the charms collection for
  any entries that have not been yet downloaded to the blobstore and for
  triggering their download.
*/
class CharmDownloaderV1 implements Facade {
  static NAME = "CharmDownloader";
  static VERSION = 1;

  NAME = "CharmDownloader";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    DownloadApplicationCharms iterates the list of provided applications and
    downloads any referenced charms that have not yet been persisted to the
    blob store.
  */
  downloadApplicationCharms(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CharmDownloader",
        request: "DownloadApplicationCharms",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchApplicationsWithPendingCharms registers and returns a watcher instance
    that reports the ID of applications that reference a charm which has not yet
    been downloaded.
  */
  watchApplicationsWithPendingCharms(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "CharmDownloader",
        request: "WatchApplicationsWithPendingCharms",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CharmDownloaderV1;
