/**
  Juju StorageProvisioner version 4.
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


interface BlockDevice {
  BusAddress: string;
  DeviceLinks: string[];
  DeviceName: string;
  FilesystemType: string;
  HardwareId: string;
  InUse: boolean;
  Label: string;
  MountPoint: string;
  SerialId: string;
  Size: number;
  UUID: string;
  WWN: string;
}

interface BlockDeviceResult {
  error?: Error;
  result: BlockDevice;
}

interface BlockDeviceResults {
  results: BlockDeviceResult[];
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

interface Filesystem {
  'filesystem-tag': string;
  info: FilesystemInfo;
  'volume-tag'?: string;
}

interface FilesystemAttachment {
  'filesystem-tag': string;
  info: FilesystemAttachmentInfo;
  'machine-tag': string;
}

interface FilesystemAttachmentInfo {
  'mount-point': string;
  'read-only': boolean;
}

interface FilesystemAttachmentParams {
  'filesystem-id'?: string;
  'filesystem-tag': string;
  'instance-id'?: string;
  'machine-tag': string;
  'mount-point'?: string;
  provider: string;
  'read-only'?: boolean;
}

interface FilesystemAttachmentParamsResult {
  error?: Error;
  result: FilesystemAttachmentParams;
}

interface FilesystemAttachmentParamsResults {
  results: FilesystemAttachmentParamsResult[];
}

interface FilesystemAttachmentResult {
  error?: Error;
  result: FilesystemAttachment;
}

interface FilesystemAttachmentResults {
  results: FilesystemAttachmentResult[];
}

interface FilesystemAttachments {
  'filesystem-attachments': FilesystemAttachment[];
}

interface FilesystemInfo {
  'filesystem-id': string;
  pool: string;
  size: number;
}

interface FilesystemParams {
  attachment?: FilesystemAttachmentParams;
  attributes?: AdditionalProperties;
  'filesystem-tag': string;
  provider: string;
  size: number;
  tags?: AdditionalProperties;
  'volume-tag'?: string;
}

interface FilesystemParamsResult {
  error?: Error;
  result: FilesystemParams;
}

interface FilesystemParamsResults {
  results: FilesystemParamsResult[];
}

interface FilesystemResult {
  error?: Error;
  result: Filesystem;
}

interface FilesystemResults {
  results: FilesystemResult[];
}

interface Filesystems {
  filesystems: Filesystem[];
}

interface LifeResult {
  error?: Error;
  life: string;
}

interface LifeResults {
  results: LifeResult[];
}

interface MachineStorageId {
  'attachment-tag': string;
  'machine-tag': string;
}

interface MachineStorageIds {
  ids: MachineStorageId[];
}

interface MachineStorageIdsWatchResult {
  changes: MachineStorageId[];
  error?: Error;
  'watcher-id': string;
}

interface MachineStorageIdsWatchResults {
  results: MachineStorageIdsWatchResult[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface RemoveFilesystemParams {
  destroy?: boolean;
  'filesystem-id': string;
  provider: string;
}

interface RemoveFilesystemParamsResult {
  error?: Error;
  result: RemoveFilesystemParams;
}

interface RemoveFilesystemParamsResults {
  results: RemoveFilesystemParamsResult[];
}

interface RemoveVolumeParams {
  destroy?: boolean;
  provider: string;
  'volume-id': string;
}

interface RemoveVolumeParamsResult {
  error?: Error;
  result: RemoveVolumeParams;
}

interface RemoveVolumeParamsResults {
  results: RemoveVolumeParamsResult[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface Volume {
  info: VolumeInfo;
  'volume-tag': string;
}

interface VolumeAttachment {
  info: VolumeAttachmentInfo;
  'machine-tag': string;
  'volume-tag': string;
}

interface VolumeAttachmentInfo {
  'bus-address': string;
  'device-link': string;
  'device-name': string;
  'plan-info': VolumeAttachmentPlanInfo;
  'read-only': boolean;
}

interface VolumeAttachmentParams {
  'instance-id'?: string;
  'machine-tag': string;
  provider: string;
  'read-only'?: boolean;
  'volume-id'?: string;
  'volume-tag': string;
}

interface VolumeAttachmentParamsResult {
  error?: Error;
  result: VolumeAttachmentParams;
}

interface VolumeAttachmentParamsResults {
  results: VolumeAttachmentParamsResult[];
}

interface VolumeAttachmentPlan {
  'block-device'?: BlockDevice;
  life?: string;
  'machine-tag': string;
  'plan-info': VolumeAttachmentPlanInfo;
  'volume-tag': string;
}

interface VolumeAttachmentPlanInfo {
  'device-attributes': AdditionalProperties;
  'device-type': string;
}

interface VolumeAttachmentPlanResult {
  error?: Error;
  result: VolumeAttachmentPlan;
}

interface VolumeAttachmentPlanResults {
  results: VolumeAttachmentPlanResult[];
}

interface VolumeAttachmentPlans {
  'volume-plans': VolumeAttachmentPlan[];
}

interface VolumeAttachmentResult {
  error?: Error;
  result: VolumeAttachment;
}

interface VolumeAttachmentResults {
  results: VolumeAttachmentResult[];
}

interface VolumeAttachments {
  'volume-attachments': VolumeAttachment[];
}

interface VolumeInfo {
  'hardware-id'?: string;
  persistent: boolean;
  pool?: string;
  size: number;
  'volume-id': string;
  wwn?: string;
}

interface VolumeParams {
  attachment?: VolumeAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  tags?: AdditionalProperties;
  'volume-tag': string;
}

interface VolumeParamsResult {
  error?: Error;
  result: VolumeParams;
}

interface VolumeParamsResults {
  results: VolumeParamsResult[];
}

interface VolumeResult {
  error?: Error;
  result: Volume;
}

interface VolumeResults {
  results: VolumeResult[];
}

interface Volumes {
  volumes: Volume[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  StorageProvisionerAPIv4 provides the StorageProvisioner API v4 facade.
*/
class StorageProvisionerV4 {
  static NAME: string = 'StorageProvisioner';
  static VERSION: number = 4;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 4;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AttachmentLife returns the lifecycle state of each specified machine
    storage attachment.
  */
  attachmentLife(params: MachineStorageIds): Promise<LifeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'AttachmentLife',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  createVolumeAttachmentPlans(params: VolumeAttachmentPlans): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'CreateVolumeAttachmentPlans',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    EnsureDead calls EnsureDead on each given entity from state. It
    will fail if the entity is not present. If it's Alive, nothing will
    happen (see state/EnsureDead() for units or machines).
  */
  ensureDead(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'EnsureDead',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FilesystemAttachmentParams returns the parameters for creating the filesystem
    attachments with the specified IDs.
  */
  filesystemAttachmentParams(params: MachineStorageIds): Promise<FilesystemAttachmentParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'FilesystemAttachmentParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FilesystemAttachments returns details of filesystem attachments with the specified IDs.
  */
  filesystemAttachments(params: MachineStorageIds): Promise<FilesystemAttachmentResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'FilesystemAttachments',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FilesystemParams returns the parameters for creating the filesystems
    with the specified tags.
  */
  filesystemParams(params: Entities): Promise<FilesystemParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'FilesystemParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Filesystems returns details of filesystems with the specified tags.
  */
  filesystems(params: Entities): Promise<FilesystemResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'Filesystems',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InstanceId returns the provider specific instance id for each given
    machine or an CodeNotProvisioned error, if not set.
  */
  instanceId(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'InstanceId',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Life returns the life status of every supplied entity, where available.
  */
  life(params: Entities): Promise<LifeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'Life',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Remove removes volumes and filesystems from state.
  */
  remove(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'Remove',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveAttachment removes the specified machine storage attachments
    from state.
  */
  removeAttachment(params: MachineStorageIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'RemoveAttachment',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveFilesystemParams returns the parameters for destroying or
    releasing the filesystems with the specified tags.
  */
  removeFilesystemParams(params: Entities): Promise<RemoveFilesystemParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'RemoveFilesystemParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  removeVolumeAttachmentPlan(params: MachineStorageIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'RemoveVolumeAttachmentPlan',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveVolumeParams returns the parameters for destroying
    or releasing the volumes with the specified tags.
  */
  removeVolumeParams(params: Entities): Promise<RemoveVolumeParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'RemoveVolumeParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetFilesystemAttachmentInfo records the details of newly provisioned filesystem
    attachments.
  */
  setFilesystemAttachmentInfo(params: FilesystemAttachments): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetFilesystemAttachmentInfo',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetFilesystemInfo records the details of newly provisioned filesystems.
  */
  setFilesystemInfo(params: Filesystems): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetFilesystemInfo',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus sets the status of each given entity.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetStatus',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetVolumeAttachmentInfo records the details of newly provisioned volume
    attachments.
  */
  setVolumeAttachmentInfo(params: VolumeAttachments): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetVolumeAttachmentInfo',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  setVolumeAttachmentPlanBlockInfo(params: VolumeAttachmentPlans): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetVolumeAttachmentPlanBlockInfo',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetVolumeInfo records the details of newly provisioned volumes.
  */
  setVolumeInfo(params: Volumes): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'SetVolumeInfo',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    VolumeAttachmentParams returns the parameters for creating the volume
    attachments with the specified IDs.
  */
  volumeAttachmentParams(params: MachineStorageIds): Promise<VolumeAttachmentParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'VolumeAttachmentParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    VolumeAttachmentPlans returns details of volume attachment plans with the specified IDs.
  */
  volumeAttachmentPlans(params: MachineStorageIds): Promise<VolumeAttachmentPlanResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'VolumeAttachmentPlans',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    VolumeAttachments returns details of volume attachments with the specified IDs.
  */
  volumeAttachments(params: MachineStorageIds): Promise<VolumeAttachmentResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'VolumeAttachments',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    VolumeBlockDevices returns details of the block devices corresponding to the
    volume attachments with the specified IDs.
  */
  volumeBlockDevices(params: MachineStorageIds): Promise<BlockDeviceResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'VolumeBlockDevices',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    VolumeParams returns the parameters for creating or destroying
    the volumes with the specified tags.
  */
  volumeParams(params: Entities): Promise<VolumeParamsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'VolumeParams',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Volumes returns details of volumes with the specified tags.
  */
  volumes(params: Entities): Promise<VolumeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'Volumes',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchApplications starts a StringsWatcher to watch CAAS applications
    deployed to this model.
  */
  watchApplications(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchApplications',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchBlockDevices watches for changes to the specified machines' block devices.
  */
  watchBlockDevices(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchBlockDevices',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchFilesystemAttachments watches for changes to filesystem attachments
    scoped to the entity with the tag passed to NewState.
  */
  watchFilesystemAttachments(params: Entities): Promise<MachineStorageIdsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchFilesystemAttachments',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchFilesystems watches for changes to filesystems scoped
    to the entity with the tag passed to NewState.
  */
  watchFilesystems(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchFilesystems',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchMachines watches for changes to the specified machines.
  */
  watchMachines(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchMachines',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchVolumeAttachmentPlans watches for changes to volume attachments for a machine for the purpose of allowing
    that machine to run any initialization needed, for that volume to actually appear as a block device (ie: iSCSI)
  */
  watchVolumeAttachmentPlans(params: Entities): Promise<MachineStorageIdsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchVolumeAttachmentPlans',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchVolumeAttachments watches for changes to volume attachments scoped to
    the entity with the tag passed to NewState.
  */
  watchVolumeAttachments(params: Entities): Promise<MachineStorageIdsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchVolumeAttachments',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchVolumes watches for changes to volumes scoped to the
    entity with the tag passed to NewState.
  */
  watchVolumes(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'StorageProvisioner',
        request: 'WatchVolumes',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default StorageProvisionerV4;
