/**
  Juju Client version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 19 May 2021 21:37:19 GMT using
  the Juju schema from  Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface APIHostPortsResult {
  servers: HostPort[][];
}

interface AddCharm {
  channel: string;
  force: boolean;
  url: string;
}

interface AddCharmWithAuthorization {
  channel: string;
  force: boolean;
  macaroon: Macaroon;
  url: string;
}

interface AddMachineParams {
  addresses: Address[];
  constraints: Value;
  'container-type': string;
  disks?: Constraints[];
  'hardware-characteristics': HardwareCharacteristics;
  'instance-id': string;
  jobs: string[];
  nonce: string;
  'parent-id': string;
  placement?: Placement;
  series: string;
}

interface AddMachines {
  params: AddMachineParams[];
}

interface AddMachinesResult {
  error?: Error;
  machine: string;
}

interface AddMachinesResults {
  machines: AddMachinesResult[];
}

interface Address {
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface AgentVersionResult {
  version: Number;
}

interface AllWatcherId {
  'watcher-id': string;
}

interface ApplicationOfferStatus {
  'active-connected-count': number;
  'application-name': string;
  charm: string;
  endpoints: AdditionalProperties;
  err?: Error;
  'offer-name': string;
  'total-connected-count': number;
}

interface ApplicationStatus {
  'can-upgrade-to': string;
  charm: string;
  'charm-profile': string;
  'charm-version': string;
  'endpoint-bindings': AdditionalProperties;
  err?: Error;
  exposed: boolean;
  'exposed-endpoints'?: AdditionalProperties;
  int?: number;
  life: string;
  'meter-statuses': AdditionalProperties;
  'provider-id'?: string;
  'public-address': string;
  relations: AdditionalProperties;
  series: string;
  status: DetailedStatus;
  'subordinate-to': string[];
  units: AdditionalProperties;
  'workload-version': string;
}

interface Binary {
  Arch: string;
  Build: number;
  Major: number;
  Minor: number;
  Number: Number;
  Patch: number;
  Series: string;
  Tag: string;
}

interface BranchStatus {
  'assigned-units': AdditionalProperties;
  created: number;
  'created-by': string;
}

interface BundleChange {
  args: object[];
  id: string;
  method: string;
  requires: string[];
}

interface BundleChangesParams {
  bundleURL: string;
  yaml: string;
}

interface BundleChangesResults {
  changes: BundleChange[];
  errors: string[];
}

interface BytesResult {
  result: number[];
}

interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

interface Constraints {
  Count: number;
  Pool: string;
  Size: number;
}

interface DestroyMachines {
  force: boolean;
  'machine-names': string[];
}

interface DetailedStatus {
  data: AdditionalProperties;
  err?: Error;
  info: string;
  kind: string;
  life: string;
  since: string;
  status: string;
  version: string;
}

interface EndpointStatus {
  application: string;
  name: string;
  role: string;
  subordinate: boolean;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

interface ExposedEndpoint {
  'expose-to-cidrs': string[];
  'expose-to-spaces': string[];
}

interface FindToolsParams {
  agentstream: string;
  arch: string;
  major: number;
  minor: number;
  number: Number;
  series: string;
}

interface FindToolsResult {
  error?: Error;
  list: Tools[];
}

interface FullStatus {
  applications: AdditionalProperties;
  branches: AdditionalProperties;
  'controller-timestamp': string;
  machines: AdditionalProperties;
  model: ModelStatusInfo;
  offers: AdditionalProperties;
  relations: RelationStatus[];
  'remote-applications': AdditionalProperties;
}

interface GetConstraintsResults {
  constraints: Value;
}

interface HardwareCharacteristics {
  arch: string;
  'availability-zone': string;
  'cpu-cores': number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  tags: string[];
}

interface History {
  error?: Error;
  statuses: DetailedStatus[];
}

interface HostPort {
  Address: Address;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface LXDProfile {
  config: AdditionalProperties;
  description: string;
  devices: AdditionalProperties;
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface MachineHardware {
  arch: string;
  'availability-zone': string;
  cores: number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  tags: string[];
}

interface MachineStatus {
  'agent-status': DetailedStatus;
  constraints: string;
  containers: AdditionalProperties;
  'display-name': string;
  'dns-name': string;
  hardware: string;
  'has-vote': boolean;
  id: string;
  'instance-id': string;
  'instance-status': DetailedStatus;
  'ip-addresses'?: string[];
  jobs: string[];
  'lxd-profiles'?: AdditionalProperties;
  'modification-status': DetailedStatus;
  'network-interfaces'?: AdditionalProperties;
  'primary-controller-machine'?: boolean;
  series: string;
  'wants-vote': boolean;
}

interface MeterStatus {
  color: string;
  message: string;
}

interface ModelConfigResults {
  config: AdditionalProperties;
}

interface ModelInfo {
  'agent-version': Number;
  'cloud-credential-tag'?: string;
  'cloud-credential-validity'?: boolean;
  'cloud-region'?: string;
  'cloud-tag': string;
  'controller-uuid': string;
  'default-series'?: string;
  'is-controller': boolean;
  life: string;
  machines: ModelMachineInfo[];
  migration?: ModelMigrationStatus;
  name: string;
  'owner-tag': string;
  'provider-type'?: string;
  sla: ModelSLAInfo;
  status?: EntityStatus;
  type: string;
  users: ModelUserInfo[];
  uuid: string;
}

interface ModelMachineInfo {
  'display-name'?: string;
  'ha-primary'?: boolean;
  hardware?: MachineHardware;
  'has-vote'?: boolean;
  id: string;
  'instance-id'?: string;
  message?: string;
  status?: string;
  'wants-vote'?: boolean;
}

interface ModelMigrationStatus {
  end?: string;
  start: string;
  status: string;
}

interface ModelSLA {
  ModelSLAInfo: ModelSLAInfo;
  creds: number[];
  level: string;
  owner: string;
}

interface ModelSLAInfo {
  level: string;
  owner: string;
}

interface ModelSet {
  config: AdditionalProperties;
}

interface ModelStatusInfo {
  'available-version': string;
  'cloud-tag': string;
  'meter-status': MeterStatus;
  'model-status': DetailedStatus;
  name: string;
  region?: string;
  sla: string;
  type: string;
  version: string;
}

interface ModelUnset {
  keys: string[];
}

interface ModelUserInfo {
  access: string;
  'display-name': string;
  'last-connection': string;
  user: string;
}

interface ModelUserInfoResult {
  error: Error;
  result: ModelUserInfo;
}

interface ModelUserInfoResults {
  results: ModelUserInfoResult[];
}

interface NetworkInterface {
  'dns-nameservers'?: string[];
  gateway?: string;
  'ip-addresses': string[];
  'is-up': boolean;
  'mac-address': string;
  space?: string;
}

interface Number {
  Build: number;
  Major: number;
  Minor: number;
  Patch: number;
  Tag: string;
}

interface Placement {
  directive: string;
  scope: string;
}

interface PrivateAddress {
  target: string;
}

interface PrivateAddressResults {
  'private-address': string;
}

interface ProvisioningScriptParams {
  'data-dir': string;
  'disable-package-commands': boolean;
  'machine-id': string;
  nonce: string;
}

interface ProvisioningScriptResult {
  script: string;
}

interface PublicAddress {
  target: string;
}

interface PublicAddressResults {
  'public-address': string;
}

interface RelationStatus {
  endpoints: EndpointStatus[];
  id: number;
  interface: string;
  key: string;
  scope: string;
  status: DetailedStatus;
}

interface RemoteApplicationStatus {
  endpoints: RemoteEndpoint[];
  err?: Error;
  life: string;
  'offer-name': string;
  'offer-url': string;
  relations: AdditionalProperties;
  status: DetailedStatus;
}

interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

interface ResolveCharmResult {
  error: string;
  url: string;
}

interface ResolveCharmResults {
  urls: ResolveCharmResult[];
}

interface ResolveCharms {
  references: string[];
}

interface Resolved {
  retry: boolean;
  'unit-name': string;
}

interface SetConstraints {
  application: string;
  constraints: Value;
}

interface SetModelAgentVersion {
  force?: boolean;
  version: Number;
}

interface StatusHistoryFilter {
  date: string;
  delta: number;
  exclude: string[];
  size: number;
}

interface StatusHistoryRequest {
  filter: StatusHistoryFilter;
  historyKind: string;
  size: number;
  tag: string;
}

interface StatusHistoryRequests {
  requests: StatusHistoryRequest[];
}

interface StatusHistoryResult {
  error?: Error;
  history: History;
}

interface StatusHistoryResults {
  results: StatusHistoryResult[];
}

interface StatusParams {
  patterns: string[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface Tools {
  sha256?: string;
  size: number;
  url: string;
  version: Binary;
}

interface UnitStatus {
  address?: string;
  'agent-status': DetailedStatus;
  charm: string;
  leader?: boolean;
  machine: string;
  'opened-ports': string[];
  'provider-id'?: string;
  'public-address': string;
  subordinates: AdditionalProperties;
  'workload-status': DetailedStatus;
  'workload-version': string;
}

interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-type': string;
  mem: number;
  'root-disk': number;
  'root-disk-source': string;
  spaces: string[];
  tags: string[];
  'virt-type': string;
  zones: string[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Client serves client-specific API methods.
*/
class ClientV2 {
  static NAME: string = 'Client';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    APIHostPorts returns the API host/port addresses stored in state.
  */
  aPIHostPorts(): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'APIHostPorts',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AbortCurrentUpgrade aborts and archives the current upgrade
    synchronisation record, if any.
  */
  abortCurrentUpgrade(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AbortCurrentUpgrade',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    NOTE: AddCharm is deprecated as of juju 2.9 and charms facade version 3.
    Please discontinue use and move to the charms facade version.
    
    TODO: remove in juju 3.0
  */
  addCharm(params: AddCharm): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AddCharm',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddCharmWithAuthorization adds the given charm URL (which must include
    revision) to the model, if it does not exist yet. Local charms are not
    supported, only charm store URLs. See also AddLocalCharm().
    
    The authorization macaroon, args.CharmStoreMacaroon, may be omitted, in
    which case this call is equivalent to AddCharm.
    
    NOTE: AddCharmWithAuthorization is deprecated as of juju 2.9 and charms
    facade version 3. Please discontinue use and move to the charms facade
    version.
    
    TODO: remove in juju 3.0
  */
  addCharmWithAuthorization(params: AddCharmWithAuthorization): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AddCharmWithAuthorization',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddMachines adds new machines with the supplied parameters.
  */
  addMachines(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AddMachines',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddMachinesV2 adds new machines with the supplied parameters.
  */
  addMachinesV2(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AddMachinesV2',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AgentVersion returns the current version that the API server is running.
  */
  agentVersion(): Promise<AgentVersionResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'AgentVersion',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CACert returns the certificate used to validate the state connection.
  */
  cACert(): Promise<BytesResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'CACert',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyMachines removes a given set of machines.
  */
  destroyMachines(params: DestroyMachines): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'DestroyMachines',
        version: 2,
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
        type: 'Client',
        request: 'FindTools',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FullStatus gives the information needed for juju status over the api
  */
  fullStatus(params: StatusParams): Promise<FullStatus> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'FullStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetBundleChanges returns the list of changes required to deploy the given
    bundle data. The changes are sorted by requirements, so that they can be
    applied in order.
    This call is deprecated, clients should use the GetChanges endpoint on the
    Bundle facade.
    Note: any new feature in the future like devices will never be supported here.
  */
  getBundleChanges(params: BundleChangesParams): Promise<BundleChangesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'GetBundleChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetModelConstraints returns the constraints for the model.
  */
  getModelConstraints(): Promise<GetConstraintsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'GetModelConstraints',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InjectMachines injects a machine into state with provisioned status.
  */
  injectMachines(params: AddMachines): Promise<AddMachinesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'InjectMachines',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelGet implements the server-side part of the
    model-config CLI command.
  */
  modelGet(): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ModelGet',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelInfo returns information about the current model.
  */
  modelInfo(): Promise<ModelInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ModelInfo',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelSet implements the server-side part of the
    set-model-config CLI command.
  */
  modelSet(params: ModelSet): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ModelSet',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUnset implements the server-side part of the
    set-model-config CLI command.
  */
  modelUnset(params: ModelUnset): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ModelUnset',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUserInfo returns information on all users in the model.
  */
  modelUserInfo(): Promise<ModelUserInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ModelUserInfo',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PrivateAddress implements the server side of Client.PrivateAddress.
  */
  privateAddress(params: PrivateAddress): Promise<PrivateAddressResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'PrivateAddress',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProvisioningScript returns a shell script that, when run,
    provisions a machine agent on the machine executing the script.
  */
  provisioningScript(params: ProvisioningScriptParams): Promise<ProvisioningScriptResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ProvisioningScript',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PublicAddress implements the server side of Client.PublicAddress.
  */
  publicAddress(params: PublicAddress): Promise<PublicAddressResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'PublicAddress',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ResolveCharm resolves the best available charm URLs with series, for charm
    locations without a series specified.
    
    NOTE: ResolveCharms is deprecated as of juju 2.9 and charms facade version 3.
    Please discontinue use and move to the charms facade version.
    
    TODO: remove in juju 3.0
  */
  resolveCharms(params: ResolveCharms): Promise<ResolveCharmResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'ResolveCharms',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Resolved implements the server side of Client.Resolved.
  */
  resolved(params: Resolved): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'Resolved',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RetryProvisioning marks a provisioning error as transient on the machines.
  */
  retryProvisioning(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'RetryProvisioning',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SLALevel returns the current sla level for the model.
  */
  sLALevel(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'SLALevel',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelAgentVersion sets the model agent version.
  */
  setModelAgentVersion(params: SetModelAgentVersion): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'SetModelAgentVersion',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetModelConstraints sets the constraints for the model.
  */
  setModelConstraints(params: SetConstraints): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'SetModelConstraints',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetSLALevel sets the sla level on the model.
  */
  setSLALevel(params: ModelSLA): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'SetSLALevel',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    StatusHistory returns a slice of past statuses for several entities.
  */
  statusHistory(params: StatusHistoryRequests): Promise<StatusHistoryResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'StatusHistory',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAll initiates a watcher for entities in the connected model.
  */
  watchAll(): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Client',
        request: 'WatchAll',
        version: 2,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ClientV2;
