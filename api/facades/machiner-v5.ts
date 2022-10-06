/**
  Juju Machiner version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface APIHostPortsResult {
  servers: HostPort[][];
}

interface Address {
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
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

interface HostPort {
  Address: Address;
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface JobsResult {
  error?: Error;
  jobs: string[];
}

interface JobsResults {
  results: JobsResult[];
}

interface LifeResult {
  error?: Error;
  life: string;
}

interface LifeResults {
  results: LifeResult[];
}

interface MachineAddresses {
  addresses: Address[];
  tag: string;
}

interface NetworkConfig {
  address?: string;
  addresses?: Address[];
  cidr: string;
  'config-type'?: string;
  'device-index': number;
  disabled: boolean;
  'dns-search-domains'?: string[];
  'dns-servers'?: string[];
  'gateway-address'?: string;
  'interface-name': string;
  'interface-type': string;
  'is-default-gateway'?: boolean;
  'mac-address': string;
  mtu: number;
  'no-auto-start'?: boolean;
  origin?: string;
  'parent-interface-name': string;
  'provider-address-id': string;
  'provider-id': string;
  'provider-network-id': string;
  'provider-space-id': string;
  'provider-subnet-id': string;
  'provider-vlan-id': string;
  routes?: NetworkRoute[];
  'shadow-addresses'?: Address[];
  'virtual-port-type'?: string;
  'vlan-tag': number;
}

interface NetworkRoute {
  'destination-cidr': string;
  'gateway-ip': string;
  metric: number;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface RecordAgentStartInformationArg {
  hostname?: string;
  tag: string;
}

interface RecordAgentStartInformationArgs {
  args: RecordAgentStartInformationArg[];
}

interface SetMachineNetworkConfig {
  config: NetworkConfig[];
  tag: string;
}

interface SetMachinesAddresses {
  'machine-addresses': MachineAddresses[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  MachinerAPI implements the API used by the machiner worker.
*/
class MachinerV5 {
  static NAME: string = 'Machiner';
  static VERSION: number = 5;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 5;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(): Promise<StringsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Machiner',
        request: 'APIAddresses',
        version: 5,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Machiner',
        request: 'APIHostPorts',
        version: 5,
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
        type: 'Machiner',
        request: 'EnsureDead',
        version: 5,
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
        type: 'Machiner',
        request: 'Jobs',
        version: 5,
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
        type: 'Machiner',
        request: 'Life',
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RecordAgentStartInformation syncs the machine model with information
    reported by a machine agent when it starts.
  */
  recordAgentStartInformation(params: RecordAgentStartInformationArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Machiner',
        request: 'RecordAgentStartInformation',
        version: 5,
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
        type: 'Machiner',
        request: 'RecordAgentStartTime',
        version: 5,
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
        type: 'Machiner',
        request: 'SetMachineAddresses',
        version: 5,
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
  setObservedNetworkConfig(params: SetMachineNetworkConfig): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Machiner',
        request: 'SetObservedNetworkConfig',
        version: 5,
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
        type: 'Machiner',
        request: 'SetStatus',
        version: 5,
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
        type: 'Machiner',
        request: 'Watch',
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Machiner',
        request: 'WatchAPIHostPorts',
        version: 5,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MachinerV5;
