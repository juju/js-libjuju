/**
  Juju Firewaller version 7.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BoolResults {
  results: BoolResult[];
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
  "is-controller-cloud"?: boolean;
  name: string;
  region?: string;
  "skip-tls-verify"?: boolean;
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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ExposeInfoResult {
  error?: Error;
  exposed?: boolean;
  "exposed-endpoints"?: Record<string, ExposedEndpoint>;
}

export interface ExposeInfoResults {
  results: ExposeInfoResult[];
}

export interface ExposedEndpoint {
  "expose-to-cidrs"?: string[];
  "expose-to-spaces"?: string[];
}

export interface FanConfigEntry {
  overlay: string;
  underlay: string;
}

export interface IngressRule {
  "port-range": PortRange;
  "source-cidrs": string[];
}

export interface IngressRulesResult {
  error?: Error;
  rules: IngressRule[];
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface MacaroonResult {
  error?: Error;
  result?: Macaroon;
}

export interface MacaroonResults {
  results: MacaroonResult[];
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

export interface OpenMachinePortRangesResult {
  error?: Error;
  "unit-port-ranges": Record<string, OpenUnitPortRanges[]>;
}

export interface OpenMachinePortRangesResults {
  results: OpenMachinePortRangesResult[];
}

export interface OpenUnitPortRanges {
  endpoint: string;
  "port-ranges": PortRange[];
  "subnet-cidrs": string[];
}

export interface PortRange {
  "from-port": number;
  protocol: string;
  "to-port": number;
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface SpaceInfo {
  id: string;
  name: string;
  "provider-id"?: string;
  subnets?: SubnetV3[];
}

export interface SpaceInfos {
  "space-infos"?: SpaceInfo[];
}

export interface SpaceInfosParams {
  "space-ids"?: string[];
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface Subnet {
  cidr: string;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface SubnetV2 {
  Subnet: Subnet;
  cidr: string;
  id?: string;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface SubnetV3 {
  Subnet: Subnet;
  SubnetV2: SubnetV2;
  cidr: string;
  "fan-info"?: FanConfigEntry;
  id?: string;
  "is-public"?: boolean;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-id": string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  FirewallerAPI provides access to the Firewaller API facade.
*/
class FirewallerV7 implements Facade {
  static NAME = "Firewaller";
  static VERSION = 7;

  NAME = "Firewaller";
  VERSION = 7;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetExposeInfo returns the expose flag and per-endpoint expose settings
    for the specified applications.
  */
  getExposeInfo(params: Entities): Promise<ExposeInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "GetExposeInfo",
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelFirewallRules returns the firewall rules that this model is
    configured to open
  */
  modelFirewallRules(params: any): Promise<IngressRulesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "ModelFirewallRules",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    OpenedMachinePortRanges returns a list of the opened port ranges for the
    specified machines where each result is broken down by unit. The list of
    opened ports for each unit is further grouped by endpoint name and includes
    the subnet CIDRs that belong to the space that each endpoint is bound to.
  */
  openedMachinePortRanges(
    params: Entities
  ): Promise<OpenMachinePortRangesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "OpenedMachinePortRanges",
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SpaceInfos returns a comprehensive representation of either all spaces or
    a filtered subset of the known spaces and their associated subnet details.
  */
  spaceInfos(params: SpaceInfosParams): Promise<SpaceInfos> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "SpaceInfos",
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchModelFirewallRules returns a NotifyWatcher that notifies of
    potential changes to a model's configured firewall rules
  */
  watchModelFirewallRules(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchModelFirewallRules",
        version: 7,
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
        version: 7,
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
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchSubnets returns a new StringsWatcher that watches the specified
    subnet tags or all tags if no entities are specified.
  */
  watchSubnets(params: Entities): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Firewaller",
        request: "WatchSubnets",
        version: 7,
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
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default FirewallerV7;
