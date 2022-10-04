/**
  Juju InstanceMutater version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface CharmLXDProfile {
  config: AdditionalProperties;
  description: string;
  devices: AdditionalProperties;
}

interface CharmProfilingInfoResult {
  'current-profiles': string[];
  error: Error;
  'instance-id': string;
  'model-name': string;
  'profile-changes': ProfileInfoResult[];
}

interface ContainerTypeResult {
  'container-type': string;
  error: Error;
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

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface ProfileInfoResult {
  'application-name': string;
  error: Error;
  profile: CharmLXDProfile;
  revision: number;
}

interface SetProfileArg {
  entity: Entity;
  profiles: string[];
}

interface SetProfileArgs {
  args: SetProfileArg[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
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

*/
class InstanceMutaterV3 {
  static NAME: string = 'InstanceMutater';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    CharmProfilingInfo returns info to update lxd profiles on the machine. If
    the machine is not provisioned, no profile change info will be returned,
    nor will an error.
  */
  charmProfilingInfo(params: Entity): Promise<CharmProfilingInfoResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'CharmProfilingInfo',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ContainerType returns the container type of a machine.
  */
  containerType(params: Entity): Promise<ContainerTypeResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'ContainerType',
        version: 3,
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
        type: 'InstanceMutater',
        request: 'Life',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetCharmProfiles records the given slice of charm profile names.
  */
  setCharmProfiles(params: SetProfileArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'SetCharmProfiles',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModificationStatus updates the instance whilst changes are occurring. This
    is different from SetStatus and SetInstanceStatus, by the fact this holds
    information about the ongoing changes that are happening to instances.
    Consider LXD Profile updates that can modify a instance, but may not cause
    the instance to be placed into a error state. This modification status
    serves the purpose of highlighting that to the operator.
    Only machine tags are accepted.
  */
  setModificationStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'SetModificationStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchContainers starts a watcher to track Containers on a given
    machine.
  */
  watchContainers(params: Entity): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'WatchContainers',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchLXDProfileVerificationNeeded starts a watcher to track Applications with
    LXD Profiles.
  */
  watchLXDProfileVerificationNeeded(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'WatchLXDProfileVerificationNeeded',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchMachines starts a watcher to track machines.
    WatchMachines does not consume the initial event of the watch response, as
    that returns the initial set of machines that are currently available.
  */
  watchMachines(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'WatchMachines',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelMachines starts a watcher to track machines, but not containers.
    WatchModelMachines does not consume the initial event of the watch response, as
    that returns the initial set of machines that are currently available.
  */
  watchModelMachines(): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'InstanceMutater',
        request: 'WatchModelMachines',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default InstanceMutaterV3;
