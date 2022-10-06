/**
  Juju DiskManager version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
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

interface MachineBlockDevices {
  'block-devices'?: BlockDevice[];
  machine: string;
}

interface SetMachineBlockDevices {
  'machine-block-devices': MachineBlockDevices[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  DiskManagerAPI provides access to the DiskManager API facade.
*/
class DiskManagerV2 {
  static NAME: string = 'DiskManager';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**

  */
  setMachineBlockDevices(params: SetMachineBlockDevices): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'DiskManager',
        request: 'SetMachineBlockDevices',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default DiskManagerV2;
