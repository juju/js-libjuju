/**
  Juju FilesystemAttachmentsWatcher version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface MachineStorageId {
  "attachment-tag": string;
  "machine-tag": string;
}

export interface MachineStorageIdsWatchResult {
  changes: MachineStorageId[];
  error?: Error;
  "watcher-id": string;
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
class FilesystemAttachmentsWatcherV2 implements Facade {
  static NAME = "FilesystemAttachmentsWatcher";
  static VERSION = 2;

  NAME = "FilesystemAttachmentsWatcher";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
  next(params: any): Promise<MachineStorageIdsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FilesystemAttachmentsWatcher",
        request: "Next",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Stop stops the watcher.
  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FilesystemAttachmentsWatcher",
        request: "Stop",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default FilesystemAttachmentsWatcherV2;
