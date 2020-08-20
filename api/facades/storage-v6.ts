/**
  Juju Storage version 6.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddStorageDetails {
  'storage-tags': string[];
}

interface AddStorageResult {
  error: Error;
  result: AddStorageDetails;
}

interface AddStorageResults {
  results: AddStorageResult[];
}

interface BulkImportStorageParams {
  storage: ImportStorageParams[];
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

interface FilesystemAttachmentDetails {
  FilesystemAttachmentInfo: FilesystemAttachmentInfo;
  life?: string;
  'mount-point'?: string;
  'read-only'?: boolean;
}

interface FilesystemAttachmentInfo {
  'mount-point': string;
  'read-only': boolean;
}

interface FilesystemDetails {
  'filesystem-tag': string;
  info: FilesystemInfo;
  life?: string;
  'machine-attachments'?: AdditionalProperties;
  status: EntityStatus;
  storage?: StorageDetails;
  'unit-attachments'?: AdditionalProperties;
  'volume-tag'?: string;
}

interface FilesystemDetailsListResult {
  error: Error;
  result: FilesystemDetails[];
}

interface FilesystemDetailsListResults {
  results: FilesystemDetailsListResult[];
}

interface FilesystemFilter {
  machines: string[];
}

interface FilesystemFilters {
  filters: FilesystemFilter[];
}

interface FilesystemInfo {
  'filesystem-id': string;
  pool: string;
  size: number;
}

interface ImportStorageDetails {
  'storage-tag': string;
}

interface ImportStorageParams {
  kind: number;
  pool: string;
  'provider-id': string;
  'storage-name': string;
}

interface ImportStorageResult {
  error: Error;
  result: ImportStorageDetails;
}

interface ImportStorageResults {
  results: ImportStorageResult[];
}

interface RemoveStorage {
  storage: RemoveStorageInstance[];
}

interface RemoveStorageInstance {
  'destroy-attachments'?: boolean;
  'destroy-storage'?: boolean;
  force?: boolean;
  'max-wait'?: number;
  tag: string;
}

interface StorageAddParams {
  name: string;
  storage: StorageConstraints;
  unit: string;
}

interface StorageAttachmentDetails {
  life?: string;
  location?: string;
  'machine-tag': string;
  'storage-tag': string;
  'unit-tag': string;
}

interface StorageAttachmentId {
  'storage-tag': string;
  'unit-tag': string;
}

interface StorageAttachmentIds {
  ids: StorageAttachmentId[];
}

interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
}

interface StorageDetachmentParams {
  force?: boolean;
  ids: StorageAttachmentIds;
  'max-wait'?: number;
}

interface StorageDetails {
  attachments?: AdditionalProperties;
  kind: number;
  life?: string;
  'owner-tag': string;
  persistent: boolean;
  status: EntityStatus;
  'storage-tag': string;
}

interface StorageDetailsListResult {
  error: Error;
  result: StorageDetails[];
}

interface StorageDetailsListResults {
  results: StorageDetailsListResult[];
}

interface StorageDetailsResult {
  error: Error;
  result: StorageDetails;
}

interface StorageDetailsResults {
  results: StorageDetailsResult[];
}

interface StorageFilter {
  [key: string]: AdditionalProperties;
}

interface StorageFilters {
  filters: StorageFilter[];
}

interface StoragePool {
  attrs: AdditionalProperties;
  name: string;
  provider: string;
}

interface StoragePoolArgs {
  pools: StoragePool[];
}

interface StoragePoolDeleteArg {
  name: string;
}

interface StoragePoolDeleteArgs {
  pools: StoragePoolDeleteArg[];
}

interface StoragePoolFilter {
  names: string[];
  providers: string[];
}

interface StoragePoolFilters {
  filters: StoragePoolFilter[];
}

interface StoragePoolsResult {
  error: Error;
  'storage-pools': StoragePool[];
}

interface StoragePoolsResults {
  results: StoragePoolsResult[];
}

interface StoragesAddParams {
  storages: StorageAddParams[];
}

interface VolumeAttachmentDetails {
  VolumeAttachmentInfo: VolumeAttachmentInfo;
  'bus-address'?: string;
  'device-link'?: string;
  'device-name'?: string;
  life?: string;
  'plan-info'?: VolumeAttachmentPlanInfo;
  'read-only'?: boolean;
}

interface VolumeAttachmentInfo {
  'bus-address': string;
  'device-link': string;
  'device-name': string;
  'plan-info': VolumeAttachmentPlanInfo;
  'read-only': boolean;
}

interface VolumeAttachmentPlanInfo {
  'device-attributes': AdditionalProperties;
  'device-type': string;
}

interface VolumeDetails {
  info: VolumeInfo;
  life?: string;
  'machine-attachments'?: AdditionalProperties;
  status: EntityStatus;
  storage?: StorageDetails;
  'unit-attachments'?: AdditionalProperties;
  'volume-tag': string;
}

interface VolumeDetailsListResult {
  error: Error;
  result: VolumeDetails[];
}

interface VolumeDetailsListResults {
  results: VolumeDetailsListResult[];
}

interface VolumeFilter {
  machines: string[];
}

interface VolumeFilters {
  filters: VolumeFilter[];
}

interface VolumeInfo {
  'hardware-id'?: string;
  persistent: boolean;
  pool?: string;
  size: number;
  'volume-id': string;
  wwn?: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  StorageAPI implements the latest version (v6) of the Storage API.
*/
class StorageV6 {
  static NAME: string = 'Storage';
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
    AddToUnit validates and creates additional storage instances for units.
    A "CHANGE" block can block this operation.
  */
  addToUnit(params: StoragesAddParams): Promise<AddStorageResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Storage',
        request: 'AddToUnit',
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
        type: 'Storage',
        request: 'Attach',
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
        type: 'Storage',
        request: 'CreatePool',
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
        type: 'Storage',
        request: 'DetachStorage',
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
        type: 'Storage',
        request: 'Import',
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
  listFilesystems(params: FilesystemFilters): Promise<FilesystemDetailsListResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Storage',
        request: 'ListFilesystems',
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
        type: 'Storage',
        request: 'ListPools',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListStorageDetails returns storage matching a filter.
  */
  listStorageDetails(params: StorageFilters): Promise<StorageDetailsListResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Storage',
        request: 'ListStorageDetails',
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
        type: 'Storage',
        request: 'ListVolumes',
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
        type: 'Storage',
        request: 'Remove',
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
        type: 'Storage',
        request: 'RemovePool',
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
        type: 'Storage',
        request: 'StorageDetails',
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
        type: 'Storage',
        request: 'UpdatePool',
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default StorageV6;
