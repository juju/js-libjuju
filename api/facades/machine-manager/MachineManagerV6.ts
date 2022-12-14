/**
  Juju MachineManager version 6.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddMachineParams {
  addresses: Address[];
  constraints: Value;
  "container-type": string;
  disks?: Constraints[];
  "hardware-characteristics": HardwareCharacteristics;
  "instance-id": string;
  jobs: string[];
  nonce: string;
  "parent-id": string;
  placement?: Placement;
  series: string;
}

export interface AddMachines {
  params: AddMachineParams[];
}

export interface AddMachinesResult {
  error?: Error;
  machine: string;
}

export interface AddMachinesResults {
  machines: AddMachinesResult[];
}

export interface Address {
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface Constraints {
  Count: number;
  Pool: string;
  Size: number;
}

export interface DestroyMachineInfo {
  "destroyed-storage": Entity[];
  "destroyed-units": Entity[];
  "detached-storage": Entity[];
}

export interface DestroyMachineResult {
  error: Error;
  info: DestroyMachineInfo;
}

export interface DestroyMachineResults {
  results: DestroyMachineResult[];
}

export interface DestroyMachinesParams {
  force?: boolean;
  keep?: boolean;
  "machine-tags": string[];
  "max-wait"?: number;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
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

export interface HardwareCharacteristics {
  arch: string;
  "availability-zone": string;
  "cpu-cores": number;
  "cpu-power": number;
  mem: number;
  "root-disk": number;
  "root-disk-source": string;
  tags: string[];
}

export interface InstanceType {
  arches: string[];
  cost?: number;
  "cpu-cores": number;
  deprecated?: boolean;
  memory: number;
  name?: string;
  "root-disk"?: number;
  "virt-type"?: string;
}

export interface InstanceTypesResult {
  "cost-currency": string;
  "cost-divisor": number;
  "cost-unit": string;
  error: Error;
  "instance-types": InstanceType[];
}

export interface InstanceTypesResults {
  results: InstanceTypesResult[];
}

export interface ModelInstanceTypesConstraint {
  value: Value;
}

export interface ModelInstanceTypesConstraints {
  constraints: ModelInstanceTypesConstraint[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface Placement {
  directive: string;
  scope: string;
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface UpdateSeriesArg {
  force: boolean;
  series: string;
  tag: Entity;
}

export interface UpdateSeriesArgs {
  args: UpdateSeriesArg[];
}

export interface UpgradeSeriesNotificationParam {
  entity: Entity;
  "watcher-id": string;
}

export interface UpgradeSeriesNotificationParams {
  params: UpgradeSeriesNotificationParam[];
}

export interface UpgradeSeriesUnitsResult {
  error?: Error;
  "unit-names": string[];
}

export interface UpgradeSeriesUnitsResults {
  Results: UpgradeSeriesUnitsResult[];
}

export interface Value {
  "allocate-public-ip": boolean;
  arch: string;
  container: string;
  cores: number;
  "cpu-power": number;
  "instance-role": string;
  "instance-type": string;
  mem: number;
  "root-disk": number;
  "root-disk-source": string;
  spaces: string[];
  tags: string[];
  "virt-type": string;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  MachineManagerAPIV6 defines the Version 6 of Machine Manager API.
  Changes input parameters to DestroyMachineWithParams and ForceDestroyMachine.
*/
class MachineManagerV6 implements Facade {
  static NAME = "MachineManager";
  static VERSION = 6;

  NAME = "MachineManager";
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
    AddMachines adds new machines with the supplied parameters.
  */
  addMachines(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "AddMachines",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyMachine removes a set of machines from the model.
  */
  destroyMachine(params: Entities): Promise<DestroyMachineResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "DestroyMachine",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyMachineWithParams removes a set of machines from the model.
  */
  destroyMachineWithParams(
    params: DestroyMachinesParams
  ): Promise<DestroyMachineResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "DestroyMachineWithParams",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ForceDestroyMachine forcibly removes a set of machines from the model.
    TODO (anastasiamac 2019-4-24) From Juju 3.0 this call will be removed in favour of DestroyMachinesWithParams.
    Also from ModelManger v6 this call is less useful as it does not support MaxWait customisation.
  */
  forceDestroyMachine(params: Entities): Promise<DestroyMachineResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "ForceDestroyMachine",
        version: 6,
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
  getUpgradeSeriesMessages(
    params: UpgradeSeriesNotificationParams
  ): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "GetUpgradeSeriesMessages",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    InstanceTypes returns instance type information for the cloud and region
    in which the current model is deployed.
  */
  instanceTypes(
    params: ModelInstanceTypesConstraints
  ): Promise<InstanceTypesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "InstanceTypes",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpgradeSeriesComplete marks a machine as having completed a managed series
    upgrade.
  */
  upgradeSeriesComplete(params: UpdateSeriesArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "UpgradeSeriesComplete",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpgradeSeriesPrepare prepares a machine for a OS series upgrade.
  */
  upgradeSeriesPrepare(params: UpdateSeriesArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "UpgradeSeriesPrepare",
        version: 6,
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
  upgradeSeriesValidate(
    params: UpdateSeriesArgs
  ): Promise<UpgradeSeriesUnitsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "UpgradeSeriesValidate",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUpgradeSeriesNotifications returns a watcher that fires on upgrade
    series events.
  */
  watchUpgradeSeriesNotifications(
    params: Entities
  ): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "WatchUpgradeSeriesNotifications",
        version: 6,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MachineManagerV6;
