/**
  Juju InstancePoller version 4.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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

interface BoolResult {
  error?: Error;
  result: boolean;
}

interface BoolResults {
  results: BoolResult[];
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

interface MachineAddressesResult {
  addresses: Address[];
  error?: Error;
}

interface MachineAddressesResults {
  results: MachineAddressesResult[];
}

interface ModelConfigResult {
  config: AdditionalProperties;
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

interface ProviderNetworkConfig {
  config: NetworkConfig[];
  tag: string;
}

interface SetMachinesAddresses {
  'machine-addresses': MachineAddresses[];
}

interface SetProviderNetworkConfig {
  args: ProviderNetworkConfig[];
}

interface SetProviderNetworkConfigResult {
  addresses: Address[];
  error?: Error;
  modified: boolean;
}

interface SetProviderNetworkConfigResults {
  results: SetProviderNetworkConfigResult[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StatusResult {
  data: AdditionalProperties;
  error?: Error;
  id: string;
  info: string;
  life: string;
  since: string;
  status: string;
}

interface StatusResults {
  results: StatusResult[];
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

interface AdditionalProperties {
  [key: string]: any;
}

/**
  InstancePollerAPI provides access to the InstancePoller API facade.
*/
class InstancePollerV4 {
  static NAME: string = 'InstancePoller';
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
    AreManuallyProvisioned returns whether each given entity is
    manually provisioned or not. Only machine tags are accepted.
  */
  areManuallyProvisioned(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'AreManuallyProvisioned',
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
        type: 'InstancePoller',
        request: 'InstanceId',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InstanceStatus returns the instance status for each given entity.
    Only machine tags are accepted.
  */
  instanceStatus(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'InstanceStatus',
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
        type: 'InstancePoller',
        request: 'Life',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'ModelConfig',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProviderAddresses returns the list of all known provider addresses
    for each given entity. Only machine tags are accepted.
  */
  providerAddresses(params: Entities): Promise<MachineAddressesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'ProviderAddresses',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetInstanceStatus updates the instance status for each given entity.
    Only machine tags are accepted.
  */
  setInstanceStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'SetInstanceStatus',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetProviderAddresses updates the list of known provider addresses
    for each given entity. Only machine tags are accepted.
  */
  setProviderAddresses(params: SetMachinesAddresses): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'SetProviderAddresses',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetProviderNetworkConfig updates the provider addresses for one or more
    machines.
    
    What's more, if the client request includes provider-specific IDs (e.g.
    network, subnet or address IDs), this method will also iterate any present
    link layer devices (and their addresses) and merge in any missing
    provider-specific information.
  */
  setProviderNetworkConfig(params: SetProviderNetworkConfig): Promise<SetProviderNetworkConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'SetProviderNetworkConfig',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Status returns the status of each given entity.
  */
  status(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'Status',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForModelConfigChanges returns a NotifyWatcher that observes
    changes to the model configuration.
    Note that although the NotifyWatchResult contains an Error field,
    it's not used because we are only returning a single watcher,
    so we use the regular error return.
  */
  watchForModelConfigChanges(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'WatchForModelConfigChanges',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelMachineStartTimes watches the non-container machines in the model
    for changes to the Life or AgentStartTime fields and reports them as a batch.
  */
  watchModelMachineStartTimes(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'WatchModelMachineStartTimes',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelMachines returns a StringsWatcher that notifies of
    changes to the life cycles of the top level machines in the current
    model.
  */
  watchModelMachines(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstancePoller',
        request: 'WatchModelMachines',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default InstancePollerV4;
