/**
  Juju InstanceMutater version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface CharmLXDProfile {
  config: Record<string, string>;
  description: string;
  devices: Record<string, Record<string, string>>;
}

export interface CharmProfilingInfoResult {
  "current-profiles": string[];
  error: Error;
  "instance-id": string;
  "model-name": string;
  "profile-changes": ProfileInfoResult[];
}

export interface ContainerTypeResult {
  "container-type": string;
  error: Error;
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

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface ProfileInfoResult {
  "application-name": string;
  error: Error;
  profile: CharmLXDProfile;
  revision: number;
}

export interface SetProfileArg {
  entity: Entity;
  profiles: string[];
}

export interface SetProfileArgs {
  args: SetProfileArg[];
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class InstanceMutaterV3 implements Facade {
  static NAME = "InstanceMutater";
  static VERSION = 3;

  NAME = "InstanceMutater";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "InstanceMutater",
        request: "CharmProfilingInfo",
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
        type: "InstanceMutater",
        request: "ContainerType",
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
        type: "InstanceMutater",
        request: "Life",
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
        type: "InstanceMutater",
        request: "SetCharmProfiles",
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
        type: "InstanceMutater",
        request: "SetModificationStatus",
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
        type: "InstanceMutater",
        request: "WatchContainers",
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
  watchLXDProfileVerificationNeeded(
    params: Entities
  ): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "InstanceMutater",
        request: "WatchLXDProfileVerificationNeeded",
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
  watchMachines(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "InstanceMutater",
        request: "WatchMachines",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelMachines starts a watcher to track machines, but not containers.
    WatchModelMachines does not consume the initial event of the watch response, as
    that returns the initial set of machines that are currently available.
  */
  watchModelMachines(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "InstanceMutater",
        request: "WatchModelMachines",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default InstanceMutaterV3;
