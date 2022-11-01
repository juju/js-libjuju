/**
  Juju UpgradeSeries version 3.
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

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface PinApplicationResult {
  'application-name': string;
  error?: Error;
}

interface PinApplicationsResults {
  results: PinApplicationResult[];
}

interface PinnedLeadershipResult {
  result: AdditionalProperties;
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface UpdateChannelArg {
  channel: string;
  force: boolean;
  tag: Entity;
}

interface UpdateChannelArgs {
  args: UpdateChannelArg[];
}

interface UpgradeSeriesStartUnitCompletionParam {
  entities: Entity[];
  message: string;
}

interface UpgradeSeriesStatusParam {
  entity: Entity;
  message: string;
  status: string;
}

interface UpgradeSeriesStatusParams {
  params: UpgradeSeriesStatusParam[];
}

interface UpgradeSeriesStatusResult {
  error: Error;
  status: string;
  target: string;
}

interface UpgradeSeriesStatusResults {
  results: UpgradeSeriesStatusResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API serves methods required by the machine agent upgrade-machine worker.
*/
class UpgradeSeriesV3 {
  static NAME: string = 'UpgradeSeries';
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
    CurrentSeries returns what Juju thinks the current series of the machine is.
    Note that a machine could have been upgraded out-of-band by running
    do-release-upgrade outside of the upgrade-machine workflow,
    making this value incorrect.
  */
  currentSeries(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'CurrentSeries',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FinishUpgradeSeries is the last action in the upgrade workflow and is
    called after all machine and unit statuses are "completed".
    It updates the machine series to reflect the completed upgrade, then
    removes the upgrade-machine lock.
  */
  finishUpgradeSeries(params: UpdateChannelArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'FinishUpgradeSeries',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MachineStatus gets the current upgrade-machine status of a machine.
  */
  machineStatus(params: Entities): Promise<UpgradeSeriesStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'MachineStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PinMachineApplications pins leadership for applications represented by units
    running on the auth'd machine.
  */
  pinMachineApplications(): Promise<PinApplicationsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'PinMachineApplications',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PinnedLeadership returns all pinned applications and the entities that
    require their pinned behaviour, for leadership in the current model.
  */
  pinnedLeadership(): Promise<PinnedLeadershipResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'PinnedLeadership',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetInstanceStatus sets the status of the machine.
  */
  setInstanceStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'SetInstanceStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetMachineStatus sets the current upgrade-machine status of a machine.
  */
  setMachineStatus(params: UpgradeSeriesStatusParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'SetMachineStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetUpgradeSeriesUnitStatus sets the upgrade series status of the unit.
    If no upgrade is in progress an error is returned instead.
  */
  setUpgradeSeriesUnitStatus(params: UpgradeSeriesStatusParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'SetUpgradeSeriesUnitStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    StartUnitCompletion starts the upgrade series completion phase for all subordinate
    units of a given machine.
  */
  startUnitCompletion(params: UpgradeSeriesStartUnitCompletionParam): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'StartUnitCompletion',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    TargetSeries returns the series that a machine has been locked
    for upgrading to.
  */
  targetSeries(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'TargetSeries',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnitsCompleted returns the units running on this machine that have completed
    the upgrade-machine workflow and are in their normal running state.
  */
  unitsCompleted(params: Entities): Promise<EntitiesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'UnitsCompleted',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnitsPrepared returns the units running on this machine that have completed
    their upgrade-machine preparation, and are ready to be stopped and have their
    unit agent services converted for the target series.
  */
  unitsPrepared(params: Entities): Promise<EntitiesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'UnitsPrepared',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnpinMachineApplications unpins leadership for applications represented by
    units running on the auth'd machine.
  */
  unpinMachineApplications(): Promise<PinApplicationsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'UnpinMachineApplications',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpgradeSeriesUnitStatus returns the current preparation status of an
    upgrading unit.
    If no series upgrade is in progress an error is returned instead.
  */
  upgradeSeriesUnitStatus(params: Entities): Promise<UpgradeSeriesStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'UpgradeSeriesUnitStatus',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUpgradeSeriesNotifications returns a NotifyWatcher for observing changes to upgrade series locks.
  */
  watchUpgradeSeriesNotifications(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'UpgradeSeries',
        request: 'WatchUpgradeSeriesNotifications',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UpgradeSeriesV3;
