/**
  Juju Client version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
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
  "can-upgrade-to": string;
  charm: string;
  "charm-channel"?: string;
  "charm-profile": string;
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
  series: string;
  status: DetailedStatus;
  "subordinate-to": string[];
  units: Record<string, UnitStatus>;
  "workload-version": string;
}

export interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: Number;
  Patch: number;
  Release: string;
  Tag: string;
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

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ExposedEndpoint {
  "expose-to-cidrs"?: string[];
  "expose-to-spaces"?: string[];
}

export interface FindToolsParams {
  agentstream: string;
  arch: string;
  major: number;
  minor: number;
  number: Number;
  "os-type": string;
}

export interface FindToolsResult {
  error?: Error;
  list: Tools[];
}

export interface FullStatus {
  applications: Record<string, ApplicationStatus>;
  branches: Record<string, BranchStatus>;
  "controller-timestamp": string;
  machines: Record<string, MachineStatus>;
  model: ModelStatusInfo;
  offers: Record<string, ApplicationOfferStatus>;
  relations: RelationStatus[];
  "remote-applications": Record<string, RemoteApplicationStatus>;
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
  series: string;
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

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
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
  patterns: string[];
}

export interface Tools {
  sha256?: string;
  size: number;
  url: string;
  version: Binary;
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Client serves client-specific API methods.
*/
class ClientV5 implements Facade {
  static NAME = "Client";
  static VERSION = 5;

  NAME = "Client";
  VERSION = 5;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    FindTools returns a List containing all tools matching the given parameters.
  */
  findTools(params: FindToolsParams): Promise<FindToolsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "FindTools",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FullStatus gives the information needed for juju status over the api
  */
  fullStatus(params: StatusParams): Promise<FullStatus> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "FullStatus",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    StatusHistory returns a slice of past statuses for several entities.
  */
  statusHistory(params: StatusHistoryRequests): Promise<StatusHistoryResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "StatusHistory",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAll initiates a watcher for entities in the connected model.
  */
  watchAll(params: any): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Client",
        request: "WatchAll",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ClientV5;
