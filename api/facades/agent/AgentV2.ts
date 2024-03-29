/**
  Juju Agent version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent

  NOTE: This file was generated using the Juju schema
  from Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AgentGetEntitiesResult {
  "container-type": string;
  error?: Error;
  jobs: string[];
  life: string;
}

export interface AgentGetEntitiesResults {
  entities: AgentGetEntitiesResult[];
}

export interface CloudCredential {
  attrs?: Record<string, string>;
  "auth-type": string;
  redacted?: string[];
}

export interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  "identity-endpoint"?: string;
  name: string;
  region?: string;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudSpecResult {
  error?: Error;
  result?: CloudSpec;
}

export interface CloudSpecResults {
  results?: CloudSpecResult[];
}

export interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

export interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

export interface ControllerConfigResult {
  config: AdditionalProperties;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityPassword {
  password: string;
  tag: string;
}

export interface EntityPasswords {
  changes: EntityPassword[];
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

export interface IsMasterResult {
  master: boolean;
}

export interface ModelConfigResult {
  config: AdditionalProperties;
}

export interface ModelTag {
  [key: string]: AdditionalProperties;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface StateServingInfo {
  "api-port": number;
  "ca-private-key": string;
  cert: string;
  "controller-api-port"?: number;
  "private-key": string;
  "shared-secret": string;
  "state-port": number;
  "system-identity": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  AgentAPIV2 implements the version 2 of the API provided to an agent.
*/
class AgentV2 implements Facade {
  static NAME = "Agent";
  static VERSION = 2;

  NAME = "Agent";
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
    ClearReboot will clear the reboot flag on provided machines, if it exists.
  */
  clearReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "ClearReboot",
        version: 2,
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
        type: "Agent",
        request: "CloudSpec",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(
    params: Entities
  ): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "ControllerAPIInfoForModels",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(params: any): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "ControllerConfig",
        version: 2,
        params: params,
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
        type: "Agent",
        request: "GetCloudSpec",
        version: 2,
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
        type: "Agent",
        request: "GetEntities",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  isMaster(params: any): Promise<IsMasterResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "IsMaster",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(params: any): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "ModelConfig",
        version: 2,
        params: params,
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
        type: "Agent",
        request: "SetPasswords",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  stateServingInfo(params: any): Promise<StateServingInfo> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "StateServingInfo",
        version: 2,
        params: params,
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
        type: "Agent",
        request: "WatchCloudSpecsChanges",
        version: 2,
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
        type: "Agent",
        request: "WatchCredentials",
        version: 2,
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
  watchForModelConfigChanges(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Agent",
        request: "WatchForModelConfigChanges",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AgentV2;
