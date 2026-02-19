/**
  Juju MachineManager version 11.


  NOTE: This file was generated using the Juju schema
  from Juju 4.0.1 at the git SHA 22e0b6a.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddMachineParams {
  addresses: Address[];
  base?: Base;
  constraints: Value;
  "container-type": string;
  disks?: Directive[];
  "hardware-characteristics": HardwareCharacteristics;
  "instance-id": string;
  jobs: string[];
  nonce: string;
  "parent-id": string;
  placement?: Placement;
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

export interface Base {
  channel: string;
  name: string;
}

export interface DestroyMachineInfo {
  "destroyed-containers"?: DestroyMachineResult[];
  "destroyed-storage"?: Entity[];
  "destroyed-units"?: Entity[];
  "detached-storage"?: Entity[];
  "machine-id": string;
}

export interface DestroyMachineResult {
  error?: Error;
  info?: DestroyMachineInfo;
}

export interface DestroyMachineResults {
  results?: DestroyMachineResult[];
}

export interface DestroyMachinesParams {
  "dry-run"?: boolean;
  force?: boolean;
  keep?: boolean;
  "machine-tags": string[];
  "max-wait"?: number;
}

export interface Directive {
  Count: number;
  Pool: string;
  Size: number;
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface HardwareCharacteristics {
  arch?: string;
  "availability-zone"?: string;
  "cpu-cores"?: number;
  "cpu-power"?: number;
  mem?: number;
  "root-disk"?: number;
  "root-disk-source"?: string;
  tags?: string[];
  "virt-type"?: string;
}

export interface InstanceType {
  arches: string[];
  cost?: number;
  "cpu-cores": number;
  memory: number;
  name?: string;
  "root-disk"?: number;
  "virt-type"?: string;
}

export interface InstanceTypesResult {
  "cost-currency"?: string;
  "cost-divisor"?: number;
  "cost-unit"?: string;
  error?: Error;
  "instance-types"?: InstanceType[];
}

export interface InstanceTypesResults {
  results: InstanceTypesResult[];
}

export interface ModelInstanceTypesConstraint {
  value?: Value;
}

export interface ModelInstanceTypesConstraints {
  constraints: ModelInstanceTypesConstraint[];
}

export interface Placement {
  directive: string;
  scope: string;
}

export interface ProvisioningScriptParams {
  "data-dir": string;
  "disable-package-commands": boolean;
  "machine-id": string;
  nonce: string;
}

export interface ProvisioningScriptResult {
  script: string;
}

export interface RetryProvisioningArgs {
  all: boolean;
  machines?: string[];
}

export interface Value {
  "allocate-public-ip"?: boolean;
  arch?: string;
  container?: string;
  cores?: number;
  "cpu-power"?: number;
  "image-id"?: string;
  "instance-role"?: string;
  "instance-type"?: string;
  mem?: number;
  "root-disk"?: number;
  "root-disk-source"?: string;
  spaces?: string[];
  tags?: string[];
  "virt-type"?: string;
  zones?: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class MachineManagerV11 implements Facade {
  static NAME = "MachineManager";
  static VERSION = 11;

  NAME = "MachineManager";
  VERSION = 11;

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
  addMachines(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "AddMachines",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  destroyMachineWithParams(
    params: DestroyMachinesParams
  ): Promise<DestroyMachineResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "DestroyMachineWithParams",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  instanceTypes(
    params: ModelInstanceTypesConstraints
  ): Promise<InstanceTypesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "InstanceTypes",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  provisioningScript(
    params: ProvisioningScriptParams
  ): Promise<ProvisioningScriptResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "ProvisioningScript",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  retryProvisioning(params: RetryProvisioningArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "MachineManager",
        request: "RetryProvisioning",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default MachineManagerV11;
