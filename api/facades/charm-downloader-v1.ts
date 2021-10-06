/**
  Juju CharmDownloader version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface AdditionalProperties {
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
