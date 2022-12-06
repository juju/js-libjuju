/**
  Juju Firewaller version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BoolResults {
  results: BoolResult[];
}

export interface CloudCredential {
  attrs?: AdditionalProperties;
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
  error: Error;
  result: CloudSpec;
}

export interface CloudSpecResults {
  results: CloudSpecResult[];
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

export interface FirewallRule {
  "known-service": string;
  "whitelist-cidrs"?: string[];
}

export interface KnownServiceArgs {
  "known-services": string[];
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface ListFirewallRulesResults {
  Rules: FirewallRule[];
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface MacaroonResult {
  error: Error;
  result: Macaroon;
}

export interface MacaroonResults {
  results: MacaroonResult[];
}

export interface MachinePortRange {
  "port-range": PortRange;
  "relation-tag": string;
  "unit-tag": string;
}

export interface MachinePorts {
  "machine-tag": string;
  "subnet-tag": string;
}

export interface MachinePortsParams {
  params: MachinePorts[];
}

export interface MachinePortsResult {
  error?: Error;
  ports: MachinePortRange[];
}

export interface MachinePortsResults {
  results: MachinePortsResult[];
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

export interface PortRange {
  "from-port": number;
  protocol: string;
  "to-port": number;
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  FirewallerAPIV5 provides access to the Firewaller v5 API facade.
*/
class FirewallerV5 {
  static NAME = "Firewaller";
  static VERSION = 5;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 5;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    AreManuallyProvisioned returns whether each given entity is
    manually provisioned or not. Only machine tags are accepted.
  */
  areManuallyProvisioned(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "AreManuallyProvisioned",
        version: 5,
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
        type: "Firewaller",
        request: "CloudSpec",
        version: 5,
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
        type: "Firewaller",
        request: "ControllerAPIInfoForModels",
        version: 5,
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
        type: "Firewaller",
        request: "ControllerConfig",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FirewallRules returns the firewall rules for the specified well known service types.
  */
  firewallRules(params: KnownServiceArgs): Promise<ListFirewallRulesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "FirewallRules",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetAssignedMachine returns the assigned machine tag (if any) for
    each given unit.
  */
  getAssignedMachine(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "GetAssignedMachine",
        version: 5,
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
        type: "Firewaller",
        request: "GetCloudSpec",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetExposed returns the exposed flag value for each given application.
  */
  getExposed(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "GetExposed",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetMachineActiveSubnets returns the tags of the all subnets that each machine
    (in args) has open ports on.
  */
  getMachineActiveSubnets(params: Entities): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "GetMachineActiveSubnets",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetMachinePorts returns the port ranges opened on a machine for the specified
    subnet as a map mapping port ranges to the tags of the units that opened
    them.
  */
  getMachinePorts(params: MachinePortsParams): Promise<MachinePortsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "GetMachinePorts",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    InstanceId returns the provider specific instance id for each given
    machine or an CodeNotProvisioned error, if not set.
  */
  instanceId(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "InstanceId",
        version: 5,
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
        type: "Firewaller",
        request: "Life",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MacaroonForRelations returns the macaroon for the specified relations.
  */
  macaroonForRelations(params: Entities): Promise<MacaroonResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "MacaroonForRelations",
        version: 5,
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
        type: "Firewaller",
        request: "ModelConfig",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetRelationsStatus sets the status for the specified relations.
  */
  setRelationsStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "SetRelationsStatus",
        version: 5,
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
        type: "Firewaller",
        request: "Watch",
        version: 5,
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
        type: "Firewaller",
        request: "WatchCloudSpecsChanges",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchEgressAddressesForRelations creates a watcher that notifies when addresses, from which
    connections will originate for the relation, change.
    Each event contains the entire set of addresses which are required for ingress for the relation.
  */
  watchEgressAddressesForRelations(
    params: Entities
  ): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchEgressAddressesForRelations",
        version: 5,
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
        type: "Firewaller",
        request: "WatchForModelConfigChanges",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchIngressAddressesForRelations creates a watcher that returns the ingress networks
    that have been recorded against the specified relations.
  */
  watchIngressAddressesForRelations(
    params: Entities
  ): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchIngressAddressesForRelations",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelMachineStartTimes watches the non-container machines in the model
    for changes to the Life or AgentStartTime fields and reports them as a batch.
  */
  watchModelMachineStartTimes(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchModelMachineStartTimes",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelMachines returns a StringsWatcher that notifies of
    changes to the life cycles of the top level machines in the current
    model.
  */
  watchModelMachines(params: any): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchModelMachines",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchOpenedPorts returns a new StringsWatcher for each given
    model tag.
  */
  watchOpenedPorts(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchOpenedPorts",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUnits starts a StringsWatcher to watch all units belonging to
    to any entity (machine or service) passed in args.
  */
  watchUnits(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchUnits",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default FirewallerV5;
