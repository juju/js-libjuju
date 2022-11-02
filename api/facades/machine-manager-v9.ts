/**
  Juju MachineManager version 9.
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


interface AddMachineParams {
  addresses: Address[];
  base?: Base;
  constraints: Value;
  'container-type': string;
  disks?: Constraints[];
  'hardware-characteristics': HardwareCharacteristics;
  'instance-id': string;
  jobs: string[];
  nonce: string;
  'parent-id': string;
  placement?: Placement;
}

interface AddMachines {
  params: AddMachineParams[];
}

interface AddMachinesResult {
  error?: Error;
  machine: string;
}

interface AddMachinesResults {
  machines: AddMachinesResult[];
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

interface Base {
  channel: string;
  name: string;
}

interface Constraints {
  Count: number;
  Pool: string;
  Size: number;
}

interface DestroyMachineInfo {
  'destroyed-containers'?: DestroyMachineResult[];
  'destroyed-storage'?: Entity[];
  'destroyed-units'?: Entity[];
  'detached-storage'?: Entity[];
  'machine-id': string;
}

interface DestroyMachineResult {
  error: Error;
  info: DestroyMachineInfo;
}

interface DestroyMachineResults {
  results: DestroyMachineResult[];
}

interface DestroyMachinesParams {
  force?: boolean;
  keep?: boolean;
  'machine-tags': string[];
  'max-wait'?: number;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
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

interface HardwareCharacteristics {
  arch: string;
  'availability-zone': string;
  'cpu-cores': number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  tags: string[];
}

interface InstanceType {
  arches: string[];
  cost?: number;
  'cpu-cores': number;
  deprecated?: boolean;
  memory: number;
  name?: string;
  'root-disk'?: number;
  'virt-type'?: string;
}

interface InstanceTypesResult {
  'cost-currency': string;
  'cost-divisor': number;
  'cost-unit': string;
  error: Error;
  'instance-types': InstanceType[];
}

interface InstanceTypesResults {
  results: InstanceTypesResult[];
}

interface ModelInstanceTypesConstraint {
  value: Value;
}

interface ModelInstanceTypesConstraints {
  constraints: ModelInstanceTypesConstraint[];
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface Placement {
  directive: string;
  scope: string;
}

interface ProvisioningScriptParams {
  'data-dir': string;
  'disable-package-commands': boolean;
  'machine-id': string;
  nonce: string;
}

interface ProvisioningScriptResult {
  script: string;
}

interface RetryProvisioningArgs {
  all: boolean;
  machines?: string[];
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface StringsResults {
  results: StringsResult[];
}

interface UpdateChannelArg {
  channel: string;
  force: boolean;
  tag: Entity;
}

interface UpdateChannelArgs {
  args: UpdateChannelArg[];
}

interface UpgradeSeriesNotificationParam {
  entity: Entity;
  'watcher-id': string;
}

interface UpgradeSeriesNotificationParams {
  params: UpgradeSeriesNotificationParam[];
}

interface UpgradeSeriesUnitsResult {
  error?: Error;
  'unit-names': string[];
}

interface UpgradeSeriesUnitsResults {
  Results: UpgradeSeriesUnitsResult[];
}

interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-role': string;
  'instance-type': string;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  spaces: string[];
  tags: string[];
  'virt-type': string;
  zones: string[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  MachineManagerAPI provides access to the MachineManager API facade.
*/
class MachineManagerV9 {
  static NAME: string = 'MachineManager';
  static VERSION: number = 9;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 9;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AddMachines adds new machines with the supplied parameters.
    The args will contain Base info.
  */
  addMachines(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'AddMachines',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyMachineWithParams removes a set of machines from the model.
  */
  destroyMachineWithParams(params: DestroyMachinesParams): Promise<DestroyMachineResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'DestroyMachineWithParams',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetUpgradeSeriesMessages returns all new messages associated with upgrade
    series events. Messages that have already been retrieved once are not
    returned by this method.
  */
  getUpgradeSeriesMessages(params: UpgradeSeriesNotificationParams): Promise<StringsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'GetUpgradeSeriesMessages',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InstanceTypes returns instance type information for the cloud and region
    in which the current model is deployed.
  */
  instanceTypes(params: ModelInstanceTypesConstraints): Promise<InstanceTypesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'InstanceTypes',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProvisioningScript returns a shell script that, when run,
    provisions a machine agent on the machine executing the script.
  */
  provisioningScript(params: ProvisioningScriptParams): Promise<ProvisioningScriptResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'ProvisioningScript',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RetryProvisioning marks a provisioning error as transient on the machines.
  */
  retryProvisioning(params: RetryProvisioningArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'RetryProvisioning',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpgradeSeriesComplete marks a machine as having completed a managed series
    upgrade.
  */
  upgradeSeriesComplete(params: UpdateChannelArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'UpgradeSeriesComplete',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpgradeSeriesPrepare prepares a machine for a OS series upgrade.
  */
  upgradeSeriesPrepare(params: UpdateChannelArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'UpgradeSeriesPrepare',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpgradeSeriesValidate validates that the incoming arguments correspond to a
    valid series upgrade for the target machine.
    If they do, a list of the machine's current units is returned for use in
    soliciting user confirmation of the command.
  */
  upgradeSeriesValidate(params: UpdateChannelArgs): Promise<UpgradeSeriesUnitsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'UpgradeSeriesValidate',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUpgradeSeriesNotifications returns a watcher that fires on upgrade
    series events.
  */
  watchUpgradeSeriesNotifications(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineManager',
        request: 'WatchUpgradeSeriesNotifications',
        version: 9,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MachineManagerV9;
