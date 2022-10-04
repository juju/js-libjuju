/**
  Juju MachineUndertaker version 1.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entities {
  entities: Entity[];
}

interface EntitiesResult {
  entities: Entity[];
  error?: Error;
}

interface EntitiesResults {
  results: EntitiesResult[];
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface ProviderInterfaceInfo {
  'interface-name': string;
  'mac-address': string;
  'provider-id': string;
}

interface ProviderInterfaceInfoResult {
  error?: Error;
  interfaces: ProviderInterfaceInfo[];
  'machine-tag': string;
}

interface ProviderInterfaceInfoResults {
  results: ProviderInterfaceInfoResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the API facade used by the machine undertaker.
*/
class MachineUndertakerV1 {
  static NAME: string = 'MachineUndertaker';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AllMachineRemovals returns tags for all of the machines that have
    been marked for removal in the requested model.
  */
  allMachineRemovals(params: Entities): Promise<EntitiesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineUndertaker',
        request: 'AllMachineRemovals',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CompleteMachineRemovals removes the specified machines from the
    model database. It should only be called once any provider-level
    cleanup has been done for those machines.
  */
  completeMachineRemovals(params: Entities): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineUndertaker',
        request: 'CompleteMachineRemovals',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetMachineProviderInterfaceInfo returns the provider details for
    all network interfaces attached to the machines requested.
  */
  getMachineProviderInterfaceInfo(params: Entities): Promise<ProviderInterfaceInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineUndertaker',
        request: 'GetMachineProviderInterfaceInfo',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchMachineRemovals returns a watcher that will signal each time a
    machine is marked for removal.
  */
  watchMachineRemovals(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'MachineUndertaker',
        request: 'WatchMachineRemovals',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default MachineUndertakerV1;
