/**
  Juju Client version 8.
  This facade is available on:
    Models



  NOTE: This file was generated using the Juju schema
  from Juju 3.6.14 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AllWatcherId {
  "watcher-id": string;
}

export interface ApplicationOfferStatus {
  "active-connected-count": number;
  "application-name": string;
  charm: string;
  endpoints: Record<string, RemoteEndpoint>;
  err?: Error;
  "offer-name": string;
  "total-connected-count": number;
}

export interface ApplicationStatus {
  base: Base;
  "can-upgrade-to": string;
  charm: string;
  "charm-channel"?: string;
  "charm-profile": string;
  "charm-rev"?: number;
  "charm-version": string;
  "endpoint-bindings": Record<string, string>;
  err?: Error;
  exposed: boolean;
  "exposed-endpoints"?: Record<string, ExposedEndpoint>;
  int?: number;
  life: string;
  "meter-statuses": Record<string, MeterStatus>;
  "provider-id"?: string;
  "public-address": string;
  relations: Record<string, string[]>;
  status: DetailedStatus;
  "subordinate-to": string[];
  units: Record<string, UnitStatus>;
  "workload-version": string;
}

export interface Base {
  channel: string;
  name: string;
}

export interface BranchStatus {
  "assigned-units": Record<string, string[]>;
  created: number;
  "created-by": string;
}

export interface DetailedStatus {
  data: AdditionalProperties;
  err?: Error;
  info: string;
  kind: string;
  life: string;
  since: string;
  status: string;
  version: string;
}

export interface EndpointStatus {
  application: string;
  name: string;
  role: string;
  subordinate: boolean;
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

export interface ExposedEndpoint {
  "expose-to-cidrs"?: string[];
  "expose-to-spaces"?: string[];
}

export interface FilesystemAttachmentDetails {
  FilesystemAttachmentInfo: FilesystemAttachmentInfo;
  life?: string;
  "mount-point"?: string;
  "read-only"?: boolean;
}

export interface FilesystemAttachmentInfo {
  "mount-point"?: string;
  "read-only"?: boolean;
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

export interface FilesystemInfo {
  "filesystem-id": string;
  pool: string;
  size: number;
}

export interface FullStatus {
  applications: Record<string, ApplicationStatus>;
  branches: Record<string, BranchStatus>;
  "controller-timestamp": string;
  filesystems?: FilesystemDetails[];
  machines: Record<string, MachineStatus>;
  model: ModelStatusInfo;
  offers: Record<string, ApplicationOfferStatus>;
  relations: RelationStatus[];
  "remote-applications": Record<string, RemoteApplicationStatus>;
  storage?: StorageDetails[];
  volumes?: VolumeDetails[];
}

export interface History {
  error?: Error;
  statuses: DetailedStatus[];
}

export interface LXDProfile {
  config: Record<string, string>;
  description: string;
  devices: Record<string, Record<string, string>>;
}

export interface MachineStatus {
  "agent-status": DetailedStatus;
  base: Base;
  constraints: string;
  containers: Record<string, MachineStatus>;
  "display-name": string;
  "dns-name": string;
  hardware: string;
  "has-vote": boolean;
  hostname?: string;
  id: string;
  "instance-id": string;
  "instance-status": DetailedStatus;
  "ip-addresses"?: string[];
  jobs: string[];
  "lxd-profiles"?: Record<string, LXDProfile>;
  "modification-status": DetailedStatus;
  "network-interfaces"?: Record<string, NetworkInterface>;
  "primary-controller-machine"?: boolean;
  "wants-vote": boolean;
}

export interface MeterStatus {
  color: string;
  message: string;
}

export interface ModelStatusInfo {
  "available-version": string;
  "cloud-tag": string;
  "meter-status": MeterStatus;
  "model-status": DetailedStatus;
  name: string;
  region?: string;
  sla: string;
  type: string;
  version: string;
}

export interface NetworkInterface {
  "dns-nameservers"?: string[];
  gateway?: string;
  "ip-addresses": string[];
  "is-up": boolean;
  "mac-address": string;
  space?: string;
}

export interface RelationStatus {
  endpoints: EndpointStatus[];
  id: number;
  interface: string;
  key: string;
  scope: string;
  status: DetailedStatus;
}

export interface RemoteApplicationStatus {
  endpoints: RemoteEndpoint[];
  err?: Error;
  life: string;
  "offer-name": string;
  "offer-url": string;
  relations: Record<string, string[]>;
  status: DetailedStatus;
}

export interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

export interface StatusHistoryFilter {
  date: string;
  delta: number;
  exclude: string[];
  size: number;
}

export interface StatusHistoryRequest {
  filter: StatusHistoryFilter;
  historyKind: string;
  size: number;
  tag: string;
}

export interface StatusHistoryRequests {
  requests: StatusHistoryRequest[];
}

export interface StatusHistoryResult {
  error?: Error;
  history: History;
}

export interface StatusHistoryResults {
  results: StatusHistoryResult[];
}

export interface StatusParams {
  "include-storage"?: boolean;
  patterns: string[];
}

export interface StorageAttachmentDetails {
  life?: string;
  location?: string;
  "machine-tag": string;
  "storage-tag": string;
  "unit-tag": string;
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

export interface UnitStatus {
  address?: string;
  "agent-status": DetailedStatus;
  charm: string;
  leader?: boolean;
  machine: string;
  "opened-ports": string[];
  "provider-id"?: string;
  "public-address": string;
  subordinates: Record<string, UnitStatus>;
  "workload-status": DetailedStatus;
  "workload-version": string;
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
  "bus-address"?: string;
  "device-link"?: string;
  "device-name"?: string;
  "plan-info"?: VolumeAttachmentPlanInfo;
  "read-only"?: boolean;
}

export interface VolumeAttachmentPlanInfo {
  "device-attributes"?: Record<string, string>;
  "device-type"?: string;
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

*/
class ClientV8 implements Facade {
  static NAME = "Client";
  static VERSION = 8;

  NAME = "Client";
  VERSION = 8;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  fullStatus(params: StatusParams): Promise<FullStatus> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "FullStatus",
        version: 8,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  statusHistory(params: StatusHistoryRequests): Promise<StatusHistoryResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "StatusHistory",
        version: 8,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchAll(params: any): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "WatchAll",
        version: 8,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ClientV8;
