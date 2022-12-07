/**
  Juju Provisioner version 11.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface APIHostPortsResult {
  servers: HostPort[][];
}

export interface Address {
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface Base {
  channel: string;
  name: string;
}

export interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: Number;
  Patch: number;
  Release: string;
  Tag: string;
}

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BoolResults {
  results: BoolResult[];
}

export interface BytesResult {
  result: number[];
}

export interface CharmLXDProfile {
  config: AdditionalProperties;
  description: string;
  devices: AdditionalProperties;
}

export interface CloudImageMetadata {
  arch: string;
  "image-id": string;
  priority: number;
  region: string;
  "root-storage-size"?: number;
  "root-storage-type"?: string;
  source: string;
  stream?: string;
  version: string;
  "virt-type"?: string;
}

export interface ConstraintsResult {
  constraints: Value;
  error?: Error;
}

export interface ConstraintsResults {
  results: ConstraintsResult[];
}

export interface ContainerConfig {
  UpdateBehavior: UpdateBehavior;
  "apt-mirror"?: string;
  "apt-proxy": Settings;
  "authorized-keys": string;
  "cloudinit-userdata"?: AdditionalProperties;
  "container-inherit-properties"?: string;
  "juju-proxy": Settings;
  "legacy-proxy": Settings;
  "provider-type": string;
  "snap-proxy": Settings;
  "snap-store-assertions": string;
  "snap-store-proxy-id": string;
  "snap-store-proxy-url": string;
  "ssl-hostname-verification": boolean;
}

export interface ContainerLXDProfile {
  name: string;
  profile: CharmLXDProfile;
}

export interface ContainerManagerConfig {
  config: AdditionalProperties;
}

export interface ContainerManagerConfigParams {
  type: string;
}

export interface ContainerProfileResult {
  error: Error;
  "lxd-profiles": ContainerLXDProfile[];
}

export interface ContainerProfileResults {
  results: ContainerProfileResult[];
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

export interface DeviceBridgeInfo {
  "bridge-name": string;
  "host-device-name": string;
  "mac-address": string;
}

export interface DistributionGroupResult {
  error?: Error;
  result: string[];
}

export interface DistributionGroupResults {
  results: DistributionGroupResult[];
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

export interface FindToolsParams {
  agentstream: string;
  arch: string;
  major: number;
  minor: number;
  number: Number;
  "os-type": string;
}

export interface FindToolsResult {
  error?: Error;
  list: Tools[];
}

export interface HardwareCharacteristics {
  arch: string;
  "availability-zone": string;
  "cpu-cores": number;
  "cpu-power": number;
  mem: number;
  "root-disk": number;
  "root-disk-source": string;
  tags: string[];
}

export interface HostNetworkChange {
  error?: Error;
  "new-bridges": DeviceBridgeInfo[];
  "reconfigure-delay": number;
}

export interface HostNetworkChangeResults {
  results: HostNetworkChange[];
}

export interface HostPort {
  Address: Address;
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  port: number;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface InstanceInfo {
  characteristics: HardwareCharacteristics;
  "charm-profiles": string[];
  "display-name": string;
  "instance-id": string;
  "network-config": NetworkConfig[];
  nonce: string;
  tag: string;
  "volume-attachments": AdditionalProperties;
  volumes: Volume[];
}

export interface InstancesInfo {
  machines: InstanceInfo[];
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface MachineContainerResult {
  "container-types": string[];
  determined: boolean;
  error?: Error;
}

export interface MachineContainerResults {
  results: MachineContainerResult[];
}

export interface MachineContainers {
  "container-types": string[];
  "machine-tag": string;
}

export interface MachineContainersParams {
  params: MachineContainers[];
}

export interface MachineNetworkConfigResult {
  error?: Error;
  info: NetworkConfig[];
}

export interface MachineNetworkConfigResults {
  results: MachineNetworkConfigResult[];
}

export interface ModelConfigResult {
  config: AdditionalProperties;
}

export interface NetworkConfig {
  address?: string;
  addresses?: Address[];
  cidr: string;
  "config-type"?: string;
  "device-index": number;
  disabled: boolean;
  "dns-search-domains"?: string[];
  "dns-servers"?: string[];
  "gateway-address"?: string;
  "interface-name": string;
  "interface-type": string;
  "is-default-gateway"?: boolean;
  "mac-address": string;
  mtu: number;
  "no-auto-start"?: boolean;
  origin?: string;
  "parent-interface-name": string;
  "provider-address-id": string;
  "provider-id": string;
  "provider-network-id": string;
  "provider-space-id": string;
  "provider-subnet-id": string;
  "provider-vlan-id": string;
  routes?: NetworkRoute[];
  "shadow-addresses"?: Address[];
  "virtual-port-type"?: string;
  "vlan-tag": number;
}

export interface NetworkRoute {
  "destination-cidr": string;
  "gateway-ip": string;
  metric: number;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

export interface ProvisioningInfo {
  ProvisioningNetworkTopology: ProvisioningNetworkTopology;
  base: Base;
  "charm-lxd-profiles"?: string[];
  "cloudinit-userdata"?: AdditionalProperties;
  constraints: Value;
  "controller-config"?: AdditionalProperties;
  "endpoint-bindings"?: AdditionalProperties;
  "image-metadata"?: CloudImageMetadata[];
  jobs: string[];
  placement: string;
  "root-disk"?: VolumeParams;
  "space-subnets": AdditionalProperties;
  "subnet-zones": AdditionalProperties;
  tags?: AdditionalProperties;
  "volume-attachments"?: VolumeAttachmentParams[];
  volumes?: VolumeParams[];
}

export interface ProvisioningInfoResult {
  error?: Error;
  result: ProvisioningInfo;
}

export interface ProvisioningInfoResults {
  results: ProvisioningInfoResult[];
}

export interface ProvisioningNetworkTopology {
  "space-subnets": AdditionalProperties;
  "subnet-zones": AdditionalProperties;
}

export interface SetMachineNetworkConfig {
  config: NetworkConfig[];
  tag: string;
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

export interface Settings {
  AutoNoProxy: string;
  Ftp: string;
  Http: string;
  Https: string;
  NoProxy: string;
}

export interface StatusResult {
  data: AdditionalProperties;
  error?: Error;
  id: string;
  info: string;
  life: string;
  since: string;
  status: string;
}

export interface StatusResults {
  results: StatusResult[];
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

export interface Tools {
  sha256?: string;
  size: number;
  url: string;
  version: Binary;
}

export interface ToolsResult {
  error?: Error;
  tools: Tools[];
}

export interface ToolsResults {
  results: ToolsResult[];
}

export interface UpdateBehavior {
  "enable-os-refresh-update": boolean;
  "enable-os-upgrade": boolean;
}

export interface Value {
  "allocate-public-ip": boolean;
  arch: string;
  container: string;
  cores: number;
  "cpu-power": number;
  "instance-role": string;
  "instance-type": string;
  mem: number;
  "root-disk": number;
  "root-disk-source": string;
  spaces: string[];
  tags: string[];
  "virt-type": string;
  zones: string[];
}

export interface Volume {
  info: VolumeInfo;
  "volume-tag": string;
}

export interface VolumeAttachmentInfo {
  "bus-address": string;
  "device-link": string;
  "device-name": string;
  "plan-info": VolumeAttachmentPlanInfo;
  "read-only": boolean;
}

export interface VolumeAttachmentParams {
  "instance-id"?: string;
  "machine-tag": string;
  provider: string;
  "read-only"?: boolean;
  "volume-id"?: string;
  "volume-tag": string;
}

export interface VolumeAttachmentPlanInfo {
  "device-attributes": AdditionalProperties;
  "device-type": string;
}

export interface VolumeInfo {
  "hardware-id"?: string;
  persistent: boolean;
  pool?: string;
  size: number;
  "volume-id": string;
  wwn?: string;
}

export interface VolumeParams {
  attachment?: VolumeAttachmentParams;
  attributes?: AdditionalProperties;
  provider: string;
  size: number;
  tags?: AdditionalProperties;
  "volume-tag": string;
}

export interface WatchContainer {
  "container-type": string;
  "machine-tag": string;
}

export interface WatchContainers {
  params: WatchContainer[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ProvisionerAPIV11 provides v10 of the provisioner facade.
  It relies on agent-set origin when calling SetHostMachineNetworkConfig.
*/
class ProvisionerV11 implements Facade {
  static NAME = "Provisioner";
  static VERSION = 11;

  NAME = "Provisioner";
  VERSION = 11;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(params: any): Promise<StringsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "APIAddresses",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(params: any): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "APIHostPorts",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AvailabilityZone returns a provider-specific availability zone for each given machine entity
  */
  availabilityZone(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "AvailabilityZone",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CACert returns the certificate used to validate the state connection.
  */
  cACert(params: any): Promise<BytesResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "CACert",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Constraints returns the constraints for each given machine entity.
  */
  constraints(params: Entities): Promise<ConstraintsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "Constraints",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ContainerConfig returns information from the model config that is
    needed for container cloud-init.
  */
  containerConfig(params: any): Promise<ContainerConfig> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "ContainerConfig",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ContainerManagerConfig returns information from the model config that is
    needed for configuring the container manager.
  */
  containerManagerConfig(
    params: ContainerManagerConfigParams
  ): Promise<ContainerManagerConfig> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "ContainerManagerConfig",
        version: 11,
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
        type: "Provisioner",
        request: "ControllerAPIInfoForModels",
        version: 11,
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
        type: "Provisioner",
        request: "ControllerConfig",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DistributionGroup returns, for each given machine entity,
    a slice of instance.Ids that belong to the same distribution
    group as that machine. This information may be used to
    distribute instances for high availability.
  */
  distributionGroup(params: Entities): Promise<DistributionGroupResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "DistributionGroup",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DistributionGroupByMachineId returns, for each given machine entity,
    a slice of machine.Ids that belong to the same distribution
    group as that machine. This information may be used to
    distribute instances for high availability.
  */
  distributionGroupByMachineId(params: Entities): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "DistributionGroupByMachineId",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    EnsureDead calls EnsureDead on each given entity from state. It
    will fail if the entity is not present. If it's Alive, nothing will
    happen (see state/EnsureDead() for units or machines).
  */
  ensureDead(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "EnsureDead",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FindTools returns a List containing all tools matching the given parameters.
  */
  findTools(params: FindToolsParams): Promise<FindToolsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "FindTools",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetContainerInterfaceInfo returns information to configure networking for a
    container. It accepts container tags as arguments.
  */
  getContainerInterfaceInfo(
    params: Entities
  ): Promise<MachineNetworkConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "GetContainerInterfaceInfo",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetContainerProfileInfo returns information to configure a lxd profile(s) for a
    container based on the charms deployed to the container. It accepts container
    tags as arguments. Unlike machineLXDProfileNames which has the environ
    write the lxd profiles and returns the names of profiles already written.
  */
  getContainerProfileInfo(params: Entities): Promise<ContainerProfileResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "GetContainerProfileInfo",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    HostChangesForContainers returns the set of changes that need to be done
    to the host machine to prepare it for the containers to be created.
    Pass in a list of the containers that you want the changes for.
  */
  hostChangesForContainers(
    params: Entities
  ): Promise<HostNetworkChangeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "HostChangesForContainers",
        version: 11,
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
        type: "Provisioner",
        request: "InstanceId",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    InstanceStatus returns the instance status for each given entity.
    Only machine tags are accepted.
  */
  instanceStatus(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "InstanceStatus",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    KeepInstance returns the keep-instance value for each given machine entity.
  */
  keepInstance(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "KeepInstance",
        version: 11,
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
        type: "Provisioner",
        request: "Life",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MachinesWithTransientErrors returns status data for machines with provisioning
    errors which are transient.
  */
  machinesWithTransientErrors(params: any): Promise<StatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "MachinesWithTransientErrors",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MarkMachinesForRemoval indicates that the specified machines are
    ready to have any provider-level resources cleaned up and then be
    removed.
  */
  markMachinesForRemoval(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "MarkMachinesForRemoval",
        version: 11,
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
        type: "Provisioner",
        request: "ModelConfig",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelUUID returns the model UUID that the current connection is for.
  */
  modelUUID(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "ModelUUID",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PrepareContainerInterfaceInfo allocates an address and returns information to
    configure networking for a container. It accepts container tags as arguments.
  */
  prepareContainerInterfaceInfo(
    params: Entities
  ): Promise<MachineNetworkConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "PrepareContainerInterfaceInfo",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProvisioningInfo returns the provisioning information for each given machine entity.
    It supports all positive space constraints.
  */
  provisioningInfo(params: Entities): Promise<ProvisioningInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "ProvisioningInfo",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ReleaseContainerAddresses finds addresses allocated to a container and marks
    them as Dead, to be released and removed. It accepts container tags as
    arguments.
  */
  releaseContainerAddresses(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "ReleaseContainerAddresses",
        version: 11,
        params: params,
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
        type: "Provisioner",
        request: "Remove",
        version: 11,
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
        type: "Provisioner",
        request: "SetCharmProfiles",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  setHostMachineNetworkConfig(params: SetMachineNetworkConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SetHostMachineNetworkConfig",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetInstanceInfo sets the provider specific machine id, nonce,
    metadata and network info for each given machine. Once set, the
    instance id cannot be changed.
  */
  setInstanceInfo(params: InstancesInfo): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SetInstanceInfo",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetInstanceStatus updates the instance status for each given
    entity. Only machine tags are accepted.
  */
  setInstanceStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SetInstanceStatus",
        version: 11,
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
        type: "Provisioner",
        request: "SetModificationStatus",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetObservedNetworkConfig reads the network config for the machine
    identified by the input args.
    This config is merged with the new network config supplied in the
    same args and updated if it has changed.
  */
  setObservedNetworkConfig(params: SetMachineNetworkConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SetObservedNetworkConfig",
        version: 11,
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
        type: "Provisioner",
        request: "SetPasswords",
        version: 11,
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
        type: "Provisioner",
        request: "SetStatus",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetSupportedContainers updates the list of containers supported by the machines passed in args.
  */
  setSupportedContainers(
    params: MachineContainersParams
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SetSupportedContainers",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Status returns the status of each given entity.
  */
  status(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "Status",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SupportedContainers returns the list of containers supported by the machines passed in args.
  */
  supportedContainers(params: Entities): Promise<MachineContainerResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "SupportedContainers",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Tools finds the tools necessary for the given agents.
  */
  tools(params: Entities): Promise<ToolsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "Tools",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "WatchAPIHostPorts",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchAllContainers starts a StringsWatcher to watch all containers deployed to
    any machine passed in args.
  */
  watchAllContainers(params: WatchContainers): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "WatchAllContainers",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchContainers starts a StringsWatcher to watch containers deployed to
    any machine passed in args.
  */
  watchContainers(params: WatchContainers): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "WatchContainers",
        version: 11,
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
        type: "Provisioner",
        request: "WatchForModelConfigChanges",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchMachineErrorRetry returns a NotifyWatcher that notifies when
    the provisioner should retry provisioning machines with transient errors.
  */
  watchMachineErrorRetry(params: any): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Provisioner",
        request: "WatchMachineErrorRetry",
        version: 11,
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
        type: "Provisioner",
        request: "WatchModelMachineStartTimes",
        version: 11,
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
        type: "Provisioner",
        request: "WatchModelMachines",
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ProvisionerV11;
