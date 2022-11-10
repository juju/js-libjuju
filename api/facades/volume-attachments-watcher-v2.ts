/**
  Juju VolumeAttachmentsWatcher version 2.
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


export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface MachineStorageId {
  'attachment-tag': string;
  'machine-tag': string;
}

export interface MachineStorageIdsWatchResult {
  changes: MachineStorageId[];
  error?: Error;
  'watcher-id': string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  srvMachineStorageIdsWatcher defines the API wrapping a state.StringsWatcher
  watching machine/storage attachments. This watcher notifies about storage
  entities (volumes/filesystems) being attached to and detached from machines.
  
  TODO(axw) state needs a new watcher, this is a bt of a hack. State watchers
  could do with some deduplication of logic, and I don't want to add to that
  spaghetti right now.
*/
class VolumeAttachmentsWatcherV2 {
  static NAME: string = 'VolumeAttachmentsWatcher';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvMachineStorageIdsWatcher.
  */
  next(): Promise<MachineStorageIdsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'VolumeAttachmentsWatcher',
        request: 'Next',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Stop stops the watcher.
  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'VolumeAttachmentsWatcher',
        request: 'Stop',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default VolumeAttachmentsWatcherV2;
