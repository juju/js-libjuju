/**
  Juju CharmDownloader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


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
  'watcher-id': string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CharmDownloaderAPI implements an API for watching the charms collection for
  any entries that have not been yet downloaded to the blobstore and for
  triggering their download.
*/
class CharmDownloaderV1 {
  static NAME: string = 'CharmDownloader';
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
    DownloadApplicationCharms iterates the list of provided applications and
    downloads any referenced charms that have not yet been persisted to the
    blob store.
  */
  downloadApplicationCharms(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CharmDownloader',
        request: 'DownloadApplicationCharms',
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
  watchApplicationsWithPendingCharms(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CharmDownloader',
        request: 'WatchApplicationsWithPendingCharms',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CharmDownloaderV1;
