/**
  Juju DiskManager version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BlockDevice {
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

export interface MachineBlockDevices {
  "block-devices"?: BlockDevice[];
  machine: string;
}

export interface SetMachineBlockDevices {
  "machine-block-devices": MachineBlockDevices[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  DiskManagerAPI provides access to the DiskManager API facade.
*/
class DiskManagerV2 implements Facade {
  static NAME = "DiskManager";
  static VERSION = 2;

  NAME = "DiskManager";
  VERSION = 2;

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
  setMachineBlockDevices(
    params: SetMachineBlockDevices
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "DiskManager",
        request: "SetMachineBlockDevices",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default DiskManagerV2;
