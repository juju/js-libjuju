/**
  Juju Storage version 6.
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

export interface AddStorageDetails {
  "storage-tags": string[];
}

export interface AddStorageResult {
  error: Error;
  result: AddStorageDetails;
}

export interface AddStorageResults {
  results: AddStorageResult[];
}

export interface BulkImportStorageParams {
  storage: ImportStorageParams[];
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

export interface FilesystemAttachmentDetails {
  FilesystemAttachmentInfo: FilesystemAttachmentInfo;
  life?: string;
  "mount-point"?: string;
  "read-only"?: boolean;
}

export interface FilesystemAttachmentInfo {
  "mount-point": string;
  "read-only": boolean;
}

export interface FilesystemDetails {
  "filesystem-tag": string;
  info: FilesystemInfo;
  life?: string;
  "machine-attachments"?: Record<string, FilesystemAttachmentDetails>;
  status: EntityStatus;
  storage?: StorageDetails;
  "unit-attachments"?: Record<string, FilesystemAttachmentDetails>;
  "volume-tag"?: string;
}

export interface FilesystemDetailsListResult {
  error: Error;
  result: FilesystemDetails[];
}

export interface FilesystemDetailsListResults {
  results: FilesystemDetailsListResult[];
}

export interface FilesystemFilter {
  machines: string[];
}

export interface FilesystemFilters {
  filters: FilesystemFilter[];
}

export interface FilesystemInfo {
  "filesystem-id": string;
  pool: string;
  size: number;
}

export interface ImportStorageDetails {
  "storage-tag": string;
}

export interface ImportStorageParams {
  kind: number;
  pool: string;
  "provider-id": string;
  "storage-name": string;
}

export interface ImportStorageResult {
  error: Error;
  result: ImportStorageDetails;
}

export interface ImportStorageResults {
  results: ImportStorageResult[];
}

export interface RemoveStorage {
  storage: RemoveStorageInstance[];
}

export interface RemoveStorageInstance {
  "destroy-attachments"?: boolean;
  "destroy-storage"?: boolean;
  force?: boolean;
  "max-wait"?: number;
  tag: string;
}

export interface StorageAddParams {
  name: string;
  storage: StorageConstraints;
  unit: string;
}

export interface StorageAttachmentDetails {
  life?: string;
  location?: string;
  "machine-tag": string;
  "storage-tag": string;
  "unit-tag": string;
}

export interface StorageAttachmentId {
  "storage-tag": string;
  "unit-tag": string;
}

export interface StorageAttachmentIds {
  ids: StorageAttachmentId[];
}

export interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
}

export interface StorageDetachmentParams {
  force?: boolean;
  ids: StorageAttachmentIds;
  "max-wait"?: number;
}

export interface StorageDetails {
  attachments?: Record<string, StorageAttachmentDetails>;
  kind: number;
  life?: string;
  "owner-tag": string;
  persistent: boolean;
  status: EntityStatus;
  "storage-tag": string;
}

export interface StorageDetailsListResult {
  error: Error;
  result: StorageDetails[];
}

export interface StorageDetailsListResults {
  results: StorageDetailsListResult[];
}

export interface StorageDetailsResult {
  error: Error;
  result: StorageDetails;
}

export interface StorageDetailsResults {
  results: StorageDetailsResult[];
}

export interface StorageFilter {
  [key: string]: AdditionalProperties;
}

export interface StorageFilters {
  filters: StorageFilter[];
}

export interface StoragePool {
  attrs: AdditionalProperties;
  name: string;
  provider: string;
}

export interface StoragePoolArgs {
  pools: StoragePool[];
}

export interface StoragePoolDeleteArg {
  name: string;
}

export interface StoragePoolDeleteArgs {
  pools: StoragePoolDeleteArg[];
}

export interface StoragePoolFilter {
  names: string[];
  providers: string[];
}

export interface StoragePoolFilters {
  filters: StoragePoolFilter[];
}

export interface StoragePoolsResult {
  error: Error;
  "storage-pools": StoragePool[];
}

export interface StoragePoolsResults {
  results: StoragePoolsResult[];
}

export interface StoragesAddParams {
  storages: StorageAddParams[];
}

export interface VolumeAttachmentDetails {
  VolumeAttachmentInfo: VolumeAttachmentInfo;
  "bus-address"?: string;
  "device-link"?: string;
  "device-name"?: string;
  life?: string;
  "plan-info"?: VolumeAttachmentPlanInfo;
  "read-only"?: boolean;
}

export interface VolumeAttachmentInfo {
  "bus-address": string;
  "device-link": string;
  "device-name": string;
  "plan-info": VolumeAttachmentPlanInfo;
  "read-only": boolean;
}

export interface VolumeAttachmentPlanInfo {
  "device-attributes": Record<string, string>;
  "device-type": string;
}

export interface VolumeDetails {
  info: VolumeInfo;
  life?: string;
  "machine-attachments"?: Record<string, VolumeAttachmentDetails>;
  status: EntityStatus;
  storage?: StorageDetails;
  "unit-attachments"?: Record<string, VolumeAttachmentDetails>;
  "volume-tag": string;
}

export interface VolumeDetailsListResult {
  error: Error;
  result: VolumeDetails[];
}

export interface VolumeDetailsListResults {
  results: VolumeDetailsListResult[];
}

export interface VolumeFilter {
  machines: string[];
}

export interface VolumeFilters {
  filters: VolumeFilter[];
}

export interface VolumeInfo {
  "hardware-id"?: string;
  persistent: boolean;
  pool?: string;
  size: number;
  "volume-id": string;
  wwn?: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  StorageAPI implements the latest version (v6) of the Storage API.
*/
class StorageV6 implements Facade {
  static NAME = "Storage";
  static VERSION = 6;

  NAME = "Storage";
  VERSION = 6;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AddToUnit validates and creates additional storage instances for units.
    A "CHANGE" block can block this operation.
  */
  addToUnit(params: StoragesAddParams): Promise<AddStorageResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "AddToUnit",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Attach attaches existing storage instances to units.
    A "CHANGE" block can block this operation.
  */
  attach(params: StorageAttachmentIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "Attach",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CreatePool creates a new pool with specified parameters.
  */
  createPool(params: StoragePoolArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "CreatePool",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DetachStorage sets the specified storage attachments to Dying, unless they are
    already Dying or Dead. Any associated, persistent storage will remain
    alive. This call can be forced.
  */
  detachStorage(params: StorageDetachmentParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "DetachStorage",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Import imports existing storage into the model.
    A "CHANGE" block can block this operation.
  */
  import(params: BulkImportStorageParams): Promise<ImportStorageResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "Import",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListFilesystems returns a list of filesystems in the environment matching
    the provided filter. Each result describes a filesystem in detail, including
    the filesystem's attachments.
  */
  listFilesystems(
    params: FilesystemFilters
  ): Promise<FilesystemDetailsListResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "ListFilesystems",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListPools returns a list of pools.
    If filter is provided, returned list only contains pools that match
    the filter.
    Pools can be filtered on names and provider types.
    If both names and types are provided as filter,
    pools that match either are returned.
    This method lists union of pools and environment provider types.
    If no filter is provided, all pools are returned.
  */
  listPools(params: StoragePoolFilters): Promise<StoragePoolsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "ListPools",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListStorageDetails returns storage matching a filter.
  */
  listStorageDetails(
    params: StorageFilters
  ): Promise<StorageDetailsListResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "ListStorageDetails",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListVolumes lists volumes with the given filters. Each filter produces
    an independent list of volumes, or an error if the filter is invalid
    or the volumes could not be listed.
  */
  listVolumes(params: VolumeFilters): Promise<VolumeDetailsListResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "ListVolumes",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Remove sets the specified storage entities to Dying, unless they are
    already Dying or Dead, such that the storage will eventually be removed
    from the model. If the arguments specify that the storage should be
    destroyed, then the associated cloud storage will be destroyed first;
    otherwise it will only be released from Juju's control.
  */
  remove(params: RemoveStorage): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "Remove",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemovePool deletes the named pool
  */
  removePool(params: StoragePoolDeleteArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "RemovePool",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    StorageDetails retrieves and returns detailed information about desired
    storage identified by supplied tags. If specified storage cannot be
    retrieved, individual error is returned instead of storage information.
  */
  storageDetails(params: Entities): Promise<StorageDetailsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "StorageDetails",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdatePool deletes the named pool
  */
  updatePool(params: StoragePoolArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Storage",
        request: "UpdatePool",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default StorageV6;
