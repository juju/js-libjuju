/**
  Juju CAASOperator version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface APIHostPortsResult {
  servers: HostPort[][];
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

interface ApplicationCharm {
  'charm-modified-version': number;
  'deployment-mode'?: string;
  'force-upgrade'?: boolean;
  sha256: string;
  url: string;
}

interface ApplicationCharmResult {
  error: Error;
  result: ApplicationCharm;
}

interface ApplicationCharmResults {
  results: ApplicationCharmResult[];
}

interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: Number;
  Patch: number;
  Release: string;
  Tag: string;
}

interface Entities {
  entities: Entity[];
}

interface EntitiesVersion {
  'agent-tools': EntityVersion[];
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

interface EntityString {
  tag: string;
  value: string;
}

interface EntityVersion {
  tag: string;
  tools: Version;
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

interface HostPort {
  Address: Address;
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface LifeResult {
  error?: Error;
  life: string;
}

interface LifeResults {
  results: LifeResult[];
}

interface ModelResult {
  error?: Error;
  name: string;
  type: string;
  uuid: string;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface SetPodSpecParams {
  specs: EntityString[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface Version {
  version: Binary;
}

interface WatchContainerStartArg {
  container?: string;
  entity: Entity;
}

interface WatchContainerStartArgs {
  args: WatchContainerStartArg[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade is the CAAS operator API facade.
*/
class CAASOperatorV1 {
  static NAME: string = 'CAASOperator';
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
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(): Promise<StringsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'APIAddresses',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'APIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Charm returns the charm info for all given applications.
  */
  charm(params: Entities): Promise<ApplicationCharmResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'Charm',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CurrentModel returns the name and UUID for the current juju model.
  */
  currentModel(): Promise<ModelResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'CurrentModel',
        version: 1,
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
        type: 'CAASOperator',
        request: 'Life',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUUID returns the model UUID that this facade is used to operate.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'ModelUUID',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Remove removes every given entity from state, calling EnsureDead
    first, then Remove. It will fail if the entity is not present.
  */
  remove(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'Remove',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetPodSpec sets the container specs for a set of applications.
    TODO(juju3) - remove
  */
  setPodSpec(params: SetPodSpecParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'SetPodSpec',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus sets the status of each given entity.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'SetStatus',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetTools updates the recorded tools version for the agents.
  */
  setTools(params: EntitiesVersion): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'SetTools',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Watch starts an NotifyWatcher for each given entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'Watch',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'WatchAPIHostPorts',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchContainerStart starts a StringWatcher to watch for container start events
    on the CAAS api for a specific application and container.
  */
  watchContainerStart(params: WatchContainerStartArgs): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'WatchContainerStart',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnits starts a StringsWatcher to watch changes to the
    lifecycle states of units for the specified applications in
    this model.
  */
  watchUnits(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CAASOperator',
        request: 'WatchUnits',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CAASOperatorV1;
