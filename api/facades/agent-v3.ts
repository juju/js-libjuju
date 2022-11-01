/**
  Juju Agent version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AgentGetEntitiesResult {
  'container-type': string;
  error?: Error;
  jobs: string[];
  life: string;
}

interface AgentGetEntitiesResults {
  entities: AgentGetEntitiesResult[];
}

interface CloudCredential {
  attrs?: AdditionalProperties;
  'auth-type': string;
  redacted?: string[];
}

interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  'identity-endpoint'?: string;
  'is-controller-cloud'?: boolean;
  name: string;
  region?: string;
  'skip-tls-verify'?: boolean;
  'storage-endpoint'?: string;
  type: string;
}

interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

interface CloudSpecResults {
  results: CloudSpecResult[];
}

interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

interface ControllerConfigResult {
  config: AdditionalProperties;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityPassword {
  password: string;
  tag: string;
}

interface EntityPasswords {
  changes: EntityPassword[];
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

interface IsMasterResult {
  master: boolean;
}

interface ModelConfigResult {
  config: AdditionalProperties;
}

interface ModelTag {
  [key: string]: AdditionalProperties;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface StateServingInfo {
  'api-port': number;
  'ca-private-key': string;
  cert: string;
  'controller-api-port'?: number;
  'private-key': string;
  'shared-secret': string;
  'state-port': number;
  'system-identity': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  AgentAPI implements the version 3 of the API provided to an agent.
*/
class AgentV3 {
  static NAME: string = 'Agent';
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
    ClearReboot will clear the reboot flag on provided machines, if it exists.
  */
  clearReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'ClearReboot',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudSpec returns the model's cloud spec.
  */
  cloudSpec(params: Entities): Promise<CloudSpecResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'CloudSpec',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(params: Entities): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'ControllerAPIInfoForModels',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'ControllerConfig',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetCloudSpec constructs the CloudSpec for a validated and authorized model.
  */
  getCloudSpec(params: ModelTag): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'GetCloudSpec',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  getEntities(params: Entities): Promise<AgentGetEntitiesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'GetEntities',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  isMaster(): Promise<IsMasterResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'IsMaster',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'ModelConfig',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetPasswords sets the given password for each supplied entity, if possible.
  */
  setPasswords(params: EntityPasswords): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'SetPasswords',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  stateServingInfo(): Promise<StateServingInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'StateServingInfo',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCloudSpecsChanges returns a watcher for cloud spec changes.
  */
  watchCloudSpecsChanges(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'WatchCloudSpecsChanges',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCredentials watches for changes to the specified credentials.
  */
  watchCredentials(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'WatchCredentials',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForModelConfigChanges returns a NotifyWatcher that observes
    changes to the model configuration.
    Note that although the NotifyWatchResult contains an Error field,
    it's not used because we are only returning a single watcher,
    so we use the regular error return.
  */
  watchForModelConfigChanges(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Agent',
        request: 'WatchForModelConfigChanges',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AgentV3;
