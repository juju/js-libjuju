/**
  Juju Uniter version 18.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface Action {
  "execution-group"?: string;
  name: string;
  parallel?: boolean;
  parameters?: AdditionalProperties;
  receiver: string;
  tag: string;
}

export interface ActionExecutionResult {
  "action-tag": string;
  message?: string;
  results?: AdditionalProperties;
  status: string;
}

export interface ActionExecutionResults {
  results: ActionExecutionResult[];
}

export interface ActionMessage {
  message: string;
  timestamp: string;
}

export interface ActionMessageParams {
  messages: EntityString[];
}

export interface ActionResult {
  action: Action;
  completed: string;
  enqueued: string;
  error: Error;
  log: ActionMessage[];
  message: string;
  output: AdditionalProperties;
  started: string;
  status: string;
}

export interface ActionResults {
  results: ActionResult[];
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

export interface ApplicationStatusResult {
  application: StatusResult;
  error?: Error;
  units: AdditionalProperties;
}

export interface ApplicationStatusResults {
  results: ApplicationStatusResult[];
}

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BoolResults {
  results: BoolResult[];
}

export interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

export interface CharmURL {
  url: string;
}

export interface CharmURLs {
  urls: CharmURL[];
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
  "is-controller-cloud"?: boolean;
  name: string;
  region?: string;
  "skip-tls-verify"?: boolean;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

export interface CommitHookChangesArg {
  "add-storage"?: StorageAddParams[];
  "close-ports"?: EntityPortRange[];
  "open-ports"?: EntityPortRange[];
  "pod-spec"?: PodSpec;
  "relation-unit-settings"?: RelationUnitSettings[];
  "secret-creates"?: CreateSecretArg[];
  "secret-deletes"?: DeleteSecretArg[];
  "secret-grants"?: GrantRevokeSecretArg[];
  "secret-revokes"?: GrantRevokeSecretArg[];
  "secret-updates"?: UpdateSecretArg[];
  "set-raw-k8s-spec"?: PodSpec;
  tag: string;
  "unit-state"?: SetUnitStateArg;
  "update-network-info": boolean;
}

export interface CommitHookChangesArgs {
  args: CommitHookChangesArg[];
}

export interface ConfigSettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

export interface ConfigSettingsResults {
  results: ConfigSettingsResult[];
}

export interface CreateSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  content?: SecretContentParams;
  description?: string;
  "expire-time"?: string;
  label?: string;
  "owner-tag": string;
  params?: AdditionalProperties;
  "rotate-policy"?: string;
  uri?: string;
}

export interface CreateSecretArgs {
  args: CreateSecretArg[];
}

export interface CreateSecretURIsArg {
  count: number;
}

export interface DeleteSecretArg {
  revisions?: number[];
  uri: string;
}

export interface DeleteSecretArgs {
  args: DeleteSecretArg[];
}

export interface Endpoint {
  "application-name": string;
  relation: CharmRelation;
}

export interface Entities {
  entities: Entity[];
}

export interface EntitiesCharmURL {
  entities: EntityCharmURL[];
}

export interface Entity {
  tag: string;
}

export interface EntityCharmURL {
  "charm-url": string;
  tag: string;
}

export interface EntityPortRange {
  endpoint: string;
  "from-port": number;
  protocol: string;
  tag: string;
  "to-port": number;
}

export interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
  tag: string;
}

export interface EntityString {
  tag: string;
  value: string;
}

export interface EntityWorkloadVersion {
  tag: string;
  "workload-version": string;
}

export interface EntityWorkloadVersions {
  entities: EntityWorkloadVersion[];
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

export interface GetLeadershipSettingsBulkResults {
  results: GetLeadershipSettingsResult[];
}

export interface GetLeadershipSettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

export interface GetSecretConsumerInfoArgs {
  "consumer-tag": string;
  uris: string[];
}

export interface GetSecretContentArg {
  label?: string;
  peek?: boolean;
  update?: boolean;
  uri: string;
}

export interface GetSecretContentArgs {
  args: GetSecretContentArg[];
}

export interface GoalState {
  relations: AdditionalProperties;
  units: AdditionalProperties;
}

export interface GoalStateResult {
  error: Error;
  result: GoalState;
}

export interface GoalStateResults {
  results: GoalStateResult[];
}

export interface GoalStateStatus {
  since: string;
  status: string;
}

export interface GrantRevokeSecretArg {
  role: string;
  "scope-tag": string;
  "subject-tags": string[];
  uri: string;
}

export interface GrantRevokeSecretArgs {
  args: GrantRevokeSecretArg[];
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

export interface IntResult {
  error?: Error;
  result: number;
}

export interface IntResults {
  results: IntResult[];
}

export interface InterfaceAddress {
  cidr: string;
  hostname: string;
  value: string;
}

export interface LifeResult {
  error?: Error;
  life: string;
}

export interface LifeResults {
  results: LifeResult[];
}

export interface ListSecretResult {
  "create-time": string;
  description?: string;
  label?: string;
  "latest-expire-time"?: string;
  "latest-revision": number;
  "next-rotate-time"?: string;
  "owner-tag": string;
  revisions: SecretRevision[];
  "rotate-policy"?: string;
  "update-time": string;
  uri: string;
  value?: SecretValueResult;
  version: number;
}

export interface ListSecretResults {
  results: ListSecretResult[];
}

export interface MergeLeadershipSettingsBulkParams {
  params: MergeLeadershipSettingsParam[];
}

export interface MergeLeadershipSettingsParam {
  "application-tag"?: string;
  settings: AdditionalProperties;
  "unit-tag"?: string;
}

export interface MeterStatusResult {
  code: string;
  error?: Error;
  info: string;
}

export interface MeterStatusResults {
  results: MeterStatusResult[];
}

export interface Metric {
  key: string;
  labels?: AdditionalProperties;
  time: string;
  value: string;
}

export interface MetricBatch {
  "charm-url": string;
  created: string;
  metrics: Metric[];
  uuid: string;
}

export interface MetricBatchParam {
  batch: MetricBatch;
  tag: string;
}

export interface MetricBatchParams {
  batches: MetricBatchParam[];
}

export interface ModelConfigResult {
  config: AdditionalProperties;
}

export interface ModelResult {
  error?: Error;
  name: string;
  type: string;
  uuid: string;
}

export interface NetworkInfo {
  addresses: InterfaceAddress[];
  "interface-name": string;
  "mac-address": string;
}

export interface NetworkInfoParams {
  bindings: string[];
  "relation-id"?: number;
  unit: string;
}

export interface NetworkInfoResult {
  "bind-addresses": NetworkInfo[];
  "egress-subnets": string[];
  error: Error;
  "ingress-addresses": string[];
}

export interface NetworkInfoResults {
  results: AdditionalProperties;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface OpenMachinePortRangesByEndpointResult {
  error?: Error;
  "unit-port-ranges": AdditionalProperties;
}

export interface OpenMachinePortRangesByEndpointResults {
  results: OpenMachinePortRangesByEndpointResult[];
}

export interface OpenUnitPortRangesByEndpoint {
  endpoint: string;
  "port-ranges": PortRange[];
}

export interface PodSpec {
  spec?: string;
  tag: string;
}

export interface PortRange {
  "from-port": number;
  protocol: string;
  "to-port": number;
}

export interface RelationIds {
  "relation-ids": number[];
}

export interface RelationResult {
  bool?: boolean;
  endpoint: Endpoint;
  error?: Error;
  id: number;
  key: string;
  life: string;
  "other-application"?: string;
}

export interface RelationResults {
  results: RelationResult[];
}

export interface RelationStatusArg {
  message: string;
  "relation-id": number;
  status: string;
  "unit-tag": string;
}

export interface RelationStatusArgs {
  args: RelationStatusArg[];
}

export interface RelationUnit {
  relation: string;
  unit: string;
}

export interface RelationUnitPair {
  "local-unit": string;
  relation: string;
  "remote-unit": string;
}

export interface RelationUnitPairs {
  "relation-unit-pairs": RelationUnitPair[];
}

export interface RelationUnitSettings {
  "application-settings": AdditionalProperties;
  relation: string;
  settings: AdditionalProperties;
  unit: string;
}

export interface RelationUnitStatus {
  "in-scope": boolean;
  "relation-tag": string;
  suspended: boolean;
}

export interface RelationUnitStatusResult {
  error?: Error;
  results: RelationUnitStatus[];
}

export interface RelationUnitStatusResults {
  results: RelationUnitStatusResult[];
}

export interface RelationUnits {
  "relation-units": RelationUnit[];
}

export interface RelationUnitsChange {
  "app-changed"?: AdditionalProperties;
  changed: AdditionalProperties;
  departed?: string[];
}

export interface RelationUnitsWatchResult {
  changes: RelationUnitsChange;
  error?: Error;
  "watcher-id": string;
}

export interface RelationUnitsWatchResults {
  results: RelationUnitsWatchResult[];
}

export interface ResolvedModeResult {
  error?: Error;
  mode: string;
}

export interface ResolvedModeResults {
  results: ResolvedModeResult[];
}

export interface SecretConsumerInfoResult {
  error?: Error;
  label: string;
  revision: number;
}

export interface SecretConsumerInfoResults {
  results: SecretConsumerInfoResult[];
}

export interface SecretContentParams {
  data: AdditionalProperties;
  "provider-id": string;
}

export interface SecretContentResult {
  content: SecretContentParams;
  error?: Error;
}

export interface SecretContentResults {
  results: SecretContentResult[];
}

export interface SecretRevision {
  "create-time"?: string;
  "expire-time"?: string;
  "provider-id"?: string;
  revision: number;
  "update-time"?: string;
}

export interface SecretRotatedArg {
  "original-revision": number;
  skip: boolean;
  uri: string;
}

export interface SecretRotatedArgs {
  args: SecretRotatedArg[];
}

export interface SecretStoreConfig {
  params?: AdditionalProperties;
  type: string;
}

export interface SecretTriggerChange {
  "next-trigger-time": string;
  revision?: number;
  uri: string;
}

export interface SecretTriggerWatchResult {
  changes: SecretTriggerChange[];
  error?: Error;
  "watcher-id": string;
}

export interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

export interface SetStatus {
  entities: EntityStatusArgs[];
}

export interface SetUnitStateArg {
  "charm-state"?: AdditionalProperties;
  "meter-status-state"?: string;
  "relation-state"?: AdditionalProperties;
  "secret-state"?: string;
  "storage-state"?: string;
  tag: string;
  "uniter-state"?: string;
}

export interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

export interface SettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

export interface SettingsResults {
  results: SettingsResult[];
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

export interface StorageAddParams {
  name: string;
  storage: StorageConstraints;
  unit: string;
}

export interface StorageAttachment {
  kind: number;
  life: string;
  location: string;
  "owner-tag": string;
  "storage-tag": string;
  "unit-tag": string;
}

export interface StorageAttachmentId {
  "storage-tag": string;
  "unit-tag": string;
}

export interface StorageAttachmentIds {
  ids: StorageAttachmentId[];
}

export interface StorageAttachmentIdsResult {
  error?: Error;
  result: StorageAttachmentIds;
}

export interface StorageAttachmentIdsResults {
  results: StorageAttachmentIdsResult[];
}

export interface StorageAttachmentResult {
  error?: Error;
  result: StorageAttachment;
}

export interface StorageAttachmentResults {
  results: StorageAttachmentResult[];
}

export interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
}

export interface StringBoolResult {
  error?: Error;
  ok: boolean;
  result: string;
}

export interface StringBoolResults {
  results: StringBoolResult[];
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

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface UnitRefreshResult {
  Error: Error;
  Life: string;
  Resolved: string;
  "provider-id"?: string;
}

export interface UnitRefreshResults {
  Results: UnitRefreshResult[];
}

export interface UnitSettings {
  version: number;
}

export interface UnitStateResult {
  "charm-state": AdditionalProperties;
  error: Error;
  "meter-status-state": string;
  "relation-state": AdditionalProperties;
  "secret-state": string;
  "storage-state": string;
  "uniter-state": string;
}

export interface UnitStateResults {
  results: UnitStateResult[];
}

export interface UpdateSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  content?: SecretContentParams;
  description?: string;
  "expire-time"?: string;
  label?: string;
  params?: AdditionalProperties;
  "rotate-policy"?: string;
  uri: string;
}

export interface UpdateSecretArgs {
  args: UpdateSecretArg[];
}

export interface UpgradeSeriesStatusParam {
  entity: Entity;
  message: string;
  status: string;
}

export interface UpgradeSeriesStatusParams {
  params: UpgradeSeriesStatusParam[];
}

export interface UpgradeSeriesStatusResult {
  error: Error;
  status: string;
  target: string;
}

export interface UpgradeSeriesStatusResults {
  results: UpgradeSeriesStatusResult[];
}

export interface UpsertSecretArg {
  content: SecretContentParams;
  description: string;
  "expire-time": string;
  label: string;
  params: AdditionalProperties;
  "rotate-policy": string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UniterAPI implements the latest version (v18) of the Uniter API.
*/
class UniterV18 implements Facade {
  static NAME = "Uniter";
  static VERSION = 18;

  NAME = "Uniter";
  VERSION = 18;

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
        type: "Uniter",
        request: "APIAddresses",
        version: 18,
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
        type: "Uniter",
        request: "APIHostPorts",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ActionStatus returns the status of Actions by Tags passed in.
  */
  actionStatus(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ActionStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Actions returns the Actions by Tags passed and ensures that the Unit asking
    for them is the same Unit that has the Actions.
  */
  actions(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Actions",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AddMetricBatches adds the metrics for the specified unit.
  */
  addMetricBatches(params: MetricBatchParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "AddMetricBatches",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationStatus returns the status of the Applications and its workloads
    if the given unit is the leader.
  */
  applicationStatus(params: Entities): Promise<ApplicationStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ApplicationStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AssignedMachine returns the machine tag for each given unit tag, or
    an error satisfying params.IsCodeNotAssigned when a unit has no
    assigned machine.
  */
  assignedMachine(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "AssignedMachine",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AvailabilityZone returns the availability zone for each given unit, if applicable.
  */
  availabilityZone(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "AvailabilityZone",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    BeginActions marks the actions represented by the passed in Tags as running.
  */
  beginActions(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "BeginActions",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CanApplyLXDProfile is a shim to call the LXDProfileAPIv2 version of this method.
  */
  canApplyLXDProfile(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CanApplyLXDProfile",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmArchiveSha256 returns the SHA256 digest of the charm archive
    (bundle) data for each charm url in the given parameters.
  */
  charmArchiveSha256(params: CharmURLs): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CharmArchiveSha256",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmModifiedVersion returns the most CharmModifiedVersion for all given
    units or applications.
  */
  charmModifiedVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CharmModifiedVersion",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmURL returns the charm URL for all given units or applications.
  */
  charmURL(params: Entities): Promise<StringBoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CharmURL",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ClearResolved removes any resolved setting from each given unit.
  */
  clearResolved(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ClearResolved",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CloudAPIVersion returns the cloud API version, if available.
  */
  cloudAPIVersion(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CloudAPIVersion",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CloudSpec returns the cloud spec used by the model in which the
    authenticated unit or application resides.
    A check is made beforehand to ensure that the request is made by an entity
    that has been granted the appropriate trust.
  */
  cloudSpec(params: any): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CloudSpec",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CommitHookChanges batches together all required API calls for applying
    a set of changes after a hook successfully completes and executes them in a
    single transaction.
  */
  commitHookChanges(params: CommitHookChangesArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CommitHookChanges",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ConfigSettings returns the complete set of application charm config
    settings available to each given unit.
  */
  configSettings(params: Entities): Promise<ConfigSettingsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ConfigSettings",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CreateSecretURIs creates new secret URIs.
  */
  createSecretURIs(params: CreateSecretURIsArg): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CreateSecretURIs",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CreateSecrets creates new secrets.
  */
  createSecrets(params: CreateSecretArgs): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CreateSecrets",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CurrentModel returns the name and UUID for the current juju model.
  */
  currentModel(params: any): Promise<ModelResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "CurrentModel",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Destroy advances all given Alive units' lifecycles as far as
    possible. See state/Unit.Destroy().
  */
  destroy(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Destroy",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyAllSubordinates destroys all subordinates of each given unit.
  */
  destroyAllSubordinates(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "DestroyAllSubordinates",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyUnitStorageAttachments marks each storage attachment of the
    specified units as Dying.
  */
  destroyUnitStorageAttachments(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "DestroyUnitStorageAttachments",
        version: 18,
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
        type: "Uniter",
        request: "EnsureDead",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    EnterScope ensures each unit has entered its scope in the relation,
    for all of the given relation/unit pairs. See also
    state.RelationUnit.EnterScope().
  */
  enterScope(params: RelationUnits): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "EnterScope",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FinishActions saves the result of a completed Action
  */
  finishActions(params: ActionExecutionResults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "FinishActions",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetConsumerSecretsRevisionInfo returns the latest secret revisions for the specified secrets.
  */
  getConsumerSecretsRevisionInfo(
    params: GetSecretConsumerInfoArgs
  ): Promise<SecretConsumerInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetConsumerSecretsRevisionInfo",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  getMeterStatus(params: Entities): Promise<MeterStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetMeterStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetPodSpec gets the pod specs for a set of applications.
  */
  getPodSpec(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetPodSpec",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetPrincipal returns the result of calling PrincipalName() and
    converting it to a tag, on each given unit.
  */
  getPrincipal(params: Entities): Promise<StringBoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetPrincipal",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetRawK8sSpec gets the raw k8s specs for a set of applications.
  */
  getRawK8sSpec(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetRawK8sSpec",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretContentInfo returns the secret values for the specified secrets.
  */
  getSecretContentInfo(
    params: GetSecretContentArgs
  ): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetSecretContentInfo",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretMetadata returns metadata for the caller's secrets.
  */
  getSecretMetadata(params: any): Promise<ListSecretResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetSecretMetadata",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetSecretStoreConfig gets the config needed to create a client to the model's secret store.
  */
  getSecretStoreConfig(params: any): Promise<SecretStoreConfig> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GetSecretStoreConfig",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GoalStates returns information of charm units and relations.
  */
  goalStates(params: Entities): Promise<GoalStateResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "GoalStates",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    HasSubordinates returns the whether each given unit has any subordinates.
  */
  hasSubordinates(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "HasSubordinates",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    LXDProfileName is a shim to call the LXDProfileAPIv2 version of this method.
  */
  lXDProfileName(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "LXDProfileName",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    LXDProfileRequired is a shim to call the LXDProfileAPIv2 version of this method.
  */
  lXDProfileRequired(params: CharmURLs): Promise<BoolResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "LXDProfileRequired",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    LeaveScope signals each unit has left its scope in the relation,
    for all of the given relation/unit pairs. See also
    state.RelationUnit.LeaveScope().
  */
  leaveScope(params: RelationUnits): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "LeaveScope",
        version: 18,
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
        type: "Uniter",
        request: "Life",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    LogActionsMessages records the log messages against the specified actions.
  */
  logActionsMessages(params: ActionMessageParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "LogActionsMessages",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Merge merges in the provided leadership settings. Only leaders for
    the given service may perform this operation.
  */
  merge(params: MergeLeadershipSettingsBulkParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Merge",
        version: 18,
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
        type: "Uniter",
        request: "ModelConfig",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelUUID returns the model UUID that this unit resides in.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ModelUUID",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    NetworkInfo returns network interfaces/addresses for specified bindings.
  */
  networkInfo(params: NetworkInfoParams): Promise<NetworkInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "NetworkInfo",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    OpenedMachinePortRangesByEndpoint returns the port ranges opened by each
    unit on the provided machines grouped by application endpoint.
  */
  openedMachinePortRangesByEndpoint(
    params: Entities
  ): Promise<OpenMachinePortRangesByEndpointResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "OpenedMachinePortRangesByEndpoint",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PrivateAddress returns the private address for each given unit, if set.
  */
  privateAddress(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "PrivateAddress",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ProviderType returns the provider type used by the current juju
    model.

    TODO(dimitern): Refactor the uniter to call this instead of calling
    ModelConfig() just to get the provider type. Once we have machine
    addresses, this might be completely unnecessary though.
  */
  providerType(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ProviderType",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    PublicAddress returns the public address for each given unit, if set.
  */
  publicAddress(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "PublicAddress",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Read reads leadership settings for the provided service ID. Any
    unit of the service may perform this operation.
  */
  read(params: Entities): Promise<GetLeadershipSettingsBulkResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Read",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ReadLocalApplicationSettings returns the local application settings for a
    particular relation when invoked by the leader unit.
  */
  readLocalApplicationSettings(params: RelationUnit): Promise<SettingsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ReadLocalApplicationSettings",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ReadRemoteSettings returns the remote settings of each given set of
    relation/local unit/remote unit.
  */
  readRemoteSettings(params: RelationUnitPairs): Promise<SettingsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ReadRemoteSettings",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ReadSettings returns the local settings of each given set of
    relation/unit.

    NOTE(achilleasa): Using this call to read application data is deprecated
    and will not work for k8s charms (see LP1876097). Instead, clients should
    use ReadLocalApplicationSettings.
  */
  readSettings(params: RelationUnits): Promise<SettingsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "ReadSettings",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Refresh retrieves the latest values for attributes on this unit.
  */
  refresh(params: Entities): Promise<UnitRefreshResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Refresh",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Relation returns information about all given relation/unit pairs,
    including their id, key and the local endpoint.
  */
  relation(params: RelationUnits): Promise<RelationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Relation",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RelationById returns information about all given relations,
    specified by their ids, including their key and the local
    endpoint.
  */
  relationById(params: RelationIds): Promise<RelationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "RelationById",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RelationsStatus returns for each unit the corresponding relation and status information.
  */
  relationsStatus(params: Entities): Promise<RelationUnitStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "RelationsStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveSecrets removes the specified secrets.
  */
  removeSecrets(params: DeleteSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "RemoveSecrets",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveStorageAttachments removes the specified storage
    attachments from state.
  */
  removeStorageAttachments(
    params: StorageAttachmentIds
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "RemoveStorageAttachments",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RequestReboot sets the reboot flag on the provided machines
  */
  requestReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "RequestReboot",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Resolved returns the current resolved setting for each given unit.
  */
  resolved(params: Entities): Promise<ResolvedModeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "Resolved",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SLALevel returns the model's SLA level.
  */
  sLALevel(params: any): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SLALevel",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SecretsGrant grants access to a secret for the specified subjects.
  */
  secretsGrant(params: GrantRevokeSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SecretsGrant",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SecretsRevoke revokes access to a secret for the specified subjects.
  */
  secretsRevoke(params: GrantRevokeSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SecretsRevoke",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SecretsRotated records when secrets were last rotated.
  */
  secretsRotated(params: SecretRotatedArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SecretsRotated",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetAgentStatus will set status for agents of Units passed in args, if one
    of the args is not an Unit it will fail.
  */
  setAgentStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetAgentStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetApplicationStatus sets the status for all the Applications in args if the given Unit is
    the leader.
  */
  setApplicationStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetApplicationStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetCharmURL sets the charm URL for each given unit. An error will
    be returned if a unit is dead, or the charm URL is not known.
  */
  setCharmURL(params: EntitiesCharmURL): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetCharmURL",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetRelationStatus updates the status of the specified relations.
  */
  setRelationStatus(params: RelationStatusArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetRelationStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetState sets the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  setState(params: SetUnitStateArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetState",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetStatus will set status for a entities passed in args. If the entity is
    a Unit it will instead set status to its agent, to emulate backwards
    compatibility.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetUnitStatus sets status for all elements passed in args, the difference
    with SetStatus is that if an entity is a Unit it will set its status instead
    of its agent.
  */
  setUnitStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetUnitStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetUpgradeSeriesUnitStatus sets the upgrade series status of the unit.
    If no upgrade is in progress an error is returned instead.
  */
  setUpgradeSeriesUnitStatus(
    params: UpgradeSeriesStatusParams
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetUpgradeSeriesUnitStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetWorkloadVersion sets the workload version for each given unit. An error will
    be returned if a unit is dead.
  */
  setWorkloadVersion(params: EntityWorkloadVersions): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "SetWorkloadVersion",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    State returns the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  state(params: Entities): Promise<UnitStateResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "State",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    StorageAttachmentLife returns the lifecycle state of the storage attachments
    with the specified tags.
  */
  storageAttachmentLife(params: StorageAttachmentIds): Promise<LifeResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "StorageAttachmentLife",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    StorageAttachments returns the storage attachments with the specified tags.
  */
  storageAttachments(
    params: StorageAttachmentIds
  ): Promise<StorageAttachmentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "StorageAttachments",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UnitStatus returns the workload status information for the unit.
  */
  unitStatus(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "UnitStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UnitStorageAttachments returns the IDs of storage attachments for a collection of units.
  */
  unitStorageAttachments(
    params: Entities
  ): Promise<StorageAttachmentIdsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "UnitStorageAttachments",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateNetworkInfo refreshes the network settings for a unit's bound
    endpoints.
  */
  updateNetworkInfo(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "UpdateNetworkInfo",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateSecrets updates the specified secrets.
  */
  updateSecrets(params: UpdateSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "UpdateSecrets",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpgradeSeriesUnitStatus returns the current preparation status of an
    upgrading unit.
    If no series upgrade is in progress an error is returned instead.
  */
  upgradeSeriesUnitStatus(
    params: Entities
  ): Promise<UpgradeSeriesStatusResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "UpgradeSeriesUnitStatus",
        version: 18,
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
        type: "Uniter",
        request: "Watch",
        version: 18,
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
        type: "Uniter",
        request: "WatchAPIHostPorts",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchActionNotifications returns a StringsWatcher for observing
    incoming action calls to a unit. See also state/watcher.go
    Unit.WatchActionNotifications(). This method is called from
    api/uniter/uniter.go WatchActionNotifications().
  */
  watchActionNotifications(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchActionNotifications",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchConfigSettingsHash returns a StringsWatcher that yields a hash
    of the config values every time the config changes. The uniter can
    save this hash and use it to decide whether the config-changed hook
    needs to be run (or whether this was just an agent restart with no
    substantive config change).
  */
  watchConfigSettingsHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchConfigSettingsHash",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchConsumedSecretsChanges sets up a watcher to notify of changes to secret revisions for the specified consumers.
  */
  watchConsumedSecretsChanges(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchConsumedSecretsChanges",
        version: 18,
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
        type: "Uniter",
        request: "WatchForModelConfigChanges",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchInstanceData is a shim to call the LXDProfileAPIv2 version of this method.
  */
  watchInstanceData(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchInstanceData",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchLeadershipSettings will block the caller until leadership settings
    for the given service ID change.
  */
  watchLeadershipSettings(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchLeadershipSettings",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  watchMeterStatus(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchMeterStatus",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchObsolete returns a watcher for notifying when:
      - a secret owned by the entity is deleted
      - a secret revision owed by the entity no longer
        has any consumers

    Obsolete revisions results are "uri/revno" and deleted
    secret results are "uri".
  */
  watchObsolete(params: Entities): Promise<StringsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchObsolete",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchRelationUnits returns a RelationUnitsWatcher for observing
    changes to every unit in the supplied relation that is visible to
    the supplied unit. See also state/watcher.go:RelationUnit.Watch().
  */
  watchRelationUnits(
    params: RelationUnits
  ): Promise<RelationUnitsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchRelationUnits",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchSecretRevisionsExpiryChanges sets up a watcher to notify of changes to secret revision expiry config.
  */
  watchSecretRevisionsExpiryChanges(
    params: Entities
  ): Promise<SecretTriggerWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchSecretRevisionsExpiryChanges",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchSecretsRotationChanges sets up a watcher to notify of changes to secret rotation config.
  */
  watchSecretsRotationChanges(
    params: Entities
  ): Promise<SecretTriggerWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchSecretsRotationChanges",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchStorageAttachments creates watchers for a collection of storage
    attachments, each of which can be used to watch changes to storage
    attachment info.
  */
  watchStorageAttachments(
    params: StorageAttachmentIds
  ): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchStorageAttachments",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchTrustConfigSettingsHash returns a StringsWatcher that yields a
    hash of the application config values whenever they change. The
    uniter can use the hash to determine whether the actual values have
    changed since it last saw the config.
  */
  watchTrustConfigSettingsHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchTrustConfigSettingsHash",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUnitAddressesHash returns a StringsWatcher that yields the
    hashes of the addresses for the unit whenever the addresses
    change. The uniter can use the hash to determine whether the actual
    address values have changed since it last saw the config.
  */
  watchUnitAddressesHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchUnitAddressesHash",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUnitRelations returns a StringsWatcher, for each given
    unit, that notifies of changes to the lifecycles of relations
    relevant to that unit. For principal units, this will be all of the
    relations for the application. For subordinate units, only
    relations with the principal unit's application will be monitored.
  */
  watchUnitRelations(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchUnitRelations",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUnitStorageAttachments creates watchers for a collection of units,
    each of which can be used to watch for lifecycle changes to the corresponding
    unit's storage attachments.
  */
  watchUnitStorageAttachments(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchUnitStorageAttachments",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchUpgradeSeriesNotifications returns a NotifyWatcher for observing changes to upgrade series locks.
  */
  watchUpgradeSeriesNotifications(
    params: Entities
  ): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WatchUpgradeSeriesNotifications",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WorkloadVersion returns the workload version for all given units or applications.
  */
  workloadVersion(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Uniter",
        request: "WorkloadVersion",
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UniterV18;
