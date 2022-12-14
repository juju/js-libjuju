/**
  Juju Machiner version 4.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface APIHostPortsResult {
  servers: HostPort[][];
}

export interface Address {
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
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

export interface HostPort {
  Address: Address;
  port: number;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface JobsResult {
  error?: Error;
  jobs: string[];
}

export interface JobsResults {
  results: JobsResult[];
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface MachineAddresses {
  addresses: Address[];
  tag: string;
}

export interface NetworkConfig {
  address?: string;
  addresses?: Address[];
  cidr: string;
  "config-type"?: string;
  "device-index": number;
  disabled: boolean;
  "dns-search-domains"?: string[];
  "dns-servers"?: string[];
  "gateway-address"?: string;
  "interface-name": string;
  "interface-type": string;
  "is-default-gateway"?: boolean;
  "mac-address": string;
  mtu: number;
  "no-auto-start"?: boolean;
  origin?: string;
  "parent-interface-name": string;
  "provider-address-id": string;
  "provider-id": string;
  "provider-network-id": string;
  "provider-space-id": string;
  "provider-subnet-id": string;
  "provider-vlan-id": string;
  routes?: NetworkRoute[];
  "shadow-addresses"?: Address[];
  "vlan-tag": number;
}

export interface NetworkRoute {
  "destination-cidr": string;
  "gateway-ip": string;
  metric: number;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface SetMachineNetworkConfig {
  config: NetworkConfig[];
  tag: string;
}

export interface SetMachinesAddresses {
  "machine-addresses": MachineAddresses[];
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MachinerAPI implements the API used by the machiner worker.
*/
class MachinerV4 implements Facade {
  static NAME = "Machiner";
  static VERSION = 4;

  NAME = "Machiner";
  VERSION = 4;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(params: any): Promise<StringsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "APIAddresses",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(params: any): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "APIHostPorts",
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
        type: "Machiner",
        request: "EnsureDead",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Jobs returns the jobs assigned to the given entities.
  */
  jobs(params: Entities): Promise<JobsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "Jobs",
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
        type: "Machiner",
        request: "Life",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelUUID returns the model UUID to connect to the model
    that the current connection is for.
  */
  modelUUID(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "ModelUUID",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RecordAgentStartTime updates the agent start time field in the machine doc.
  */
  recordAgentStartTime(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "RecordAgentStartTime",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  setMachineAddresses(params: SetMachinesAddresses): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "SetMachineAddresses",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetObservedNetworkConfig reads the network config for the machine
    identified by the input args.
    This config is merged with the new network config supplied in the
    same args and updated if it has changed.
  */
  setObservedNetworkConfig(params: SetMachineNetworkConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "SetObservedNetworkConfig",
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
        type: "Machiner",
        request: "SetStatus",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateStatus updates the status data of each given entity.
    TODO(fwereade): WTF. This method exists *only* for the convenience of the
    *client* API -- and is itself completely broken -- but we still expose it
    in every facade with a StatusSetter? FFS.
  */
  updateStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "UpdateStatus",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Watch starts an NotifyWatcher for each given entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "Watch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Machiner",
        request: "WatchAPIHostPorts",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MachinerV4;
