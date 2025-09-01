/**
  Juju Application version 20.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0-beta7 at the git SHA 1123177894.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddApplicationUnits {
  application: string;
  "attach-storage"?: string[];
  "num-units": number;
  placement: Placement[];
  policy?: string;
}

export interface AddApplicationUnitsResults {
  units: string[];
}

export interface AddRelation {
  endpoints: string[];
  "via-cidrs"?: string[];
}

export interface AddRelationResults {
  endpoints: Record<string, CharmRelation>;
}

export interface ApplicationCharmRelations {
  application: string;
}

export interface ApplicationCharmRelationsResults {
  "charm-relations": string[];
}

export interface ApplicationConfigUnsetArgs {
  Args: ApplicationUnset[];
}

export interface ApplicationConstraint {
  constraints: Value;
  error?: Error;
}

export interface ApplicationDeploy {
  Force: boolean;
  application: string;
  "attach-storage"?: string[];
  channel: string;
  "charm-origin"?: CharmOrigin;
  "charm-url": string;
  config?: Record<string, string>;
  "config-yaml": string;
  constraints: Value;
  devices?: Record<string, Constraints>;
  "endpoint-bindings"?: Record<string, string>;
  "num-units": number;
  placement?: Placement[];
  policy?: string;
  resources?: Record<string, string>;
  storage?: Record<string, Directive>;
}

export interface ApplicationExpose {
  application: string;
  "exposed-endpoints"?: Record<string, ExposedEndpoint>;
}

export interface ApplicationGet {
  application: string;
  branch: string;
}

export interface ApplicationGetArgs {
  args: ApplicationGet[];
}

export interface ApplicationGetConfigResults {
  Results: ConfigResult[];
}

export interface ApplicationGetConstraintsResults {
  results: ApplicationConstraint[];
}

export interface ApplicationGetResults {
  application: string;
  "application-config"?: AdditionalProperties;
  base: Base;
  channel: string;
  charm: string;
  config: AdditionalProperties;
  constraints: Value;
  "endpoint-bindings"?: Record<string, string>;
}

export interface ApplicationInfoResult {
  error?: Error;
  result?: ApplicationResult;
}

export interface ApplicationInfoResults {
  results: ApplicationInfoResult[];
}

export interface ApplicationMergeBindings {
  "application-tag": string;
  bindings: Record<string, string>;
  force: boolean;
}

export interface ApplicationMergeBindingsArgs {
  args: ApplicationMergeBindings[];
}

export interface ApplicationOfferDetailsV5 {
  "application-description": string;
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  users?: OfferUserDetails[];
}

export interface ApplicationResult {
  base?: Base;
  channel?: string;
  charm?: string;
  constraints?: Value;
  "endpoint-bindings"?: Record<string, string>;
  exposed: boolean;
  "exposed-endpoints"?: Record<string, ExposedEndpoint>;
  life: string;
  principal: boolean;
  remote: boolean;
  tag: string;
}

export interface ApplicationSetCharmV2 {
  application: string;
  channel: string;
  "charm-origin"?: CharmOrigin;
  "charm-url": string;
  "config-settings"?: Record<string, string>;
  "config-settings-yaml"?: string;
  "endpoint-bindings"?: Record<string, string>;
  force: boolean;
  "force-base": boolean;
  "force-units": boolean;
  generation: string;
  "resource-ids"?: Record<string, string>;
  "storage-directives"?: Record<string, StorageDirectives>;
}

export interface ApplicationUnexpose {
  application: string;
  "exposed-endpoints": string[];
}

export interface ApplicationUnset {
  application: string;
  branch: string;
  options: string[];
}

export interface ApplicationsDeploy {
  applications: ApplicationDeploy[];
}

export interface Base {
  channel: string;
  name: string;
}

export interface CharmOrigin {
  architecture?: string;
  base?: Base;
  branch?: string;
  hash?: string;
  id: string;
  "instance-key"?: string;
  revision?: number;
  risk?: string;
  source: string;
  track?: string;
  type: string;
}

export interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

export interface CharmURLOriginResult {
  "charm-origin": CharmOrigin;
  error?: Error;
  url: string;
}

export interface ConfigResult {
  config: AdditionalProperties;
  error?: Error;
}

export interface ConfigSet {
  application: string;
  config: Record<string, string>;
  "config-yaml": string;
  generation: string;
}

export interface ConfigSetArgs {
  Args: ConfigSet[];
}

export interface Constraints {
  Attributes: Record<string, string>;
  Count: number;
  Type: string;
}

export interface ConsumeApplicationArgV5 {
  ApplicationOfferDetailsV5: ApplicationOfferDetailsV5;
  "application-alias"?: string;
  "application-description": string;
  endpoints?: RemoteEndpoint[];
  "external-controller"?: ExternalControllerInfo;
  macaroon?: Macaroon;
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  users?: OfferUserDetails[];
}

export interface ConsumeApplicationArgsV5 {
  args?: ConsumeApplicationArgV5[];
}

export interface DeployFromRepositoryArg {
  ApplicationName: string;
  AttachStorage: string[];
  CharmName: string;
  ConfigYAML: string;
  Cons: Value;
  Devices: Record<string, Constraints>;
  DryRun: boolean;
  Placement: Placement[];
  Trust: boolean;
  base?: Base;
  channel?: string;
  "endpoint-bindings"?: Record<string, string>;
  force?: boolean;
  "num-units"?: number;
  resources?: Record<string, string>;
  revision?: number;
  storage: Record<string, Directive>;
}

export interface DeployFromRepositoryArgs {
  Args: DeployFromRepositoryArg[];
}

export interface DeployFromRepositoryInfo {
  architecture: string;
  base?: Base;
  channel: string;
  "effective-channel"?: string;
  name: string;
  revision: number;
}

export interface DeployFromRepositoryResult {
  Errors: Error[];
  Info: DeployFromRepositoryInfo;
  PendingResourceUploads: PendingResourceUpload[];
}

export interface DeployFromRepositoryResults {
  Results: DeployFromRepositoryResult[];
}

export interface DestroyApplicationInfo {
  "destroyed-storage"?: Entity[];
  "destroyed-units"?: Entity[];
  "detached-storage"?: Entity[];
}

export interface DestroyApplicationParams {
  "application-tag": string;
  "destroy-storage"?: boolean;
  "dry-run"?: boolean;
  force: boolean;
  "max-wait"?: number;
}

export interface DestroyApplicationResult {
  error?: Error;
  info?: DestroyApplicationInfo;
}

export interface DestroyApplicationResults {
  results?: DestroyApplicationResult[];
}

export interface DestroyApplicationsParams {
  applications: DestroyApplicationParams[];
}

export interface DestroyConsumedApplicationParams {
  "application-tag": string;
  force?: boolean;
  "max-wait"?: number;
}

export interface DestroyConsumedApplicationsParams {
  applications: DestroyConsumedApplicationParams[];
}

export interface DestroyRelation {
  endpoints?: string[];
  force?: boolean;
  "max-wait"?: number;
  "relation-id": number;
}

export interface DestroyUnitInfo {
  "destroyed-storage"?: Entity[];
  "detached-storage"?: Entity[];
}

export interface DestroyUnitParams {
  "destroy-storage"?: boolean;
  "dry-run"?: boolean;
  force?: boolean;
  "max-wait"?: number;
  "unit-tag": string;
}

export interface DestroyUnitResult {
  error?: Error;
  info?: DestroyUnitInfo;
}

export interface DestroyUnitResults {
  results?: DestroyUnitResult[];
}

export interface DestroyUnitsParams {
  units: DestroyUnitParams[];
}

export interface Directive {
  Count: number;
  Pool: string;
  Size: number;
}

export interface EndpointRelationData {
  ApplicationData: AdditionalProperties;
  "cross-model": boolean;
  endpoint: string;
  "related-endpoint": string;
  "relation-id": number;
  "unit-relation-data": Record<string, RelationData>;
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
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

export interface ExposedEndpoint {
  "expose-to-cidrs"?: string[];
  "expose-to-spaces"?: string[];
}

export interface ExternalControllerInfo {
  addrs: string[];
  "ca-cert": string;
  "controller-alias": string;
  "controller-tag": string;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface OfferUserDetails {
  access: string;
  "display-name": string;
  user: string;
}

export interface PendingResourceUpload {
  Filename: string;
  Name: string;
  Type: string;
}

export interface Placement {
  directive: string;
  scope: string;
}

export interface RelationData {
  InScope: boolean;
  UnitData: AdditionalProperties;
}

export interface RelationSuspendedArg {
  message: string;
  "relation-id": number;
  suspended: boolean;
}

export interface RelationSuspendedArgs {
  args: RelationSuspendedArg[];
}

export interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

export interface ScaleApplicationInfo {
  "num-units": number;
}

export interface ScaleApplicationParams {
  "application-tag": string;
  force: boolean;
  scale: number;
  "scale-change"?: number;
}

export interface ScaleApplicationResult {
  error?: Error;
  info?: ScaleApplicationInfo;
}

export interface ScaleApplicationResults {
  results?: ScaleApplicationResult[];
}

export interface ScaleApplicationsParams {
  applications: ScaleApplicationParams[];
}

export interface SetConstraints {
  application: string;
  constraints: Value;
}

export interface StorageDirectives {
  count?: number;
  pool?: string;
  size?: number;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface UnitInfoResult {
  error?: Error;
  result?: UnitResult;
}

export interface UnitInfoResults {
  results: UnitInfoResult[];
}

export interface UnitResult {
  address?: string;
  charm: string;
  leader?: boolean;
  life?: string;
  machine?: string;
  "opened-ports": string[];
  "provider-id"?: string;
  "public-address"?: string;
  "relation-data"?: EndpointRelationData[];
  tag: string;
  "workload-version": string;
}

export interface UnitsResolved {
  all?: boolean;
  retry?: boolean;
  tags?: Entities;
}

export interface Value {
  "allocate-public-ip"?: boolean;
  arch?: string;
  container?: string;
  cores?: number;
  "cpu-power"?: number;
  "image-id"?: string;
  "instance-role"?: string;
  "instance-type"?: string;
  mem?: number;
  "root-disk"?: number;
  "root-disk-source"?: string;
  spaces?: string[];
  tags?: string[];
  "virt-type"?: string;
  zones?: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class ApplicationV20 implements Facade {
  static NAME = "Application";
  static VERSION = 20;

  NAME = "Application";
  VERSION = 20;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  addRelation(params: AddRelation): Promise<AddRelationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "AddRelation",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  addUnits(params: AddApplicationUnits): Promise<AddApplicationUnitsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "AddUnits",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  applicationsInfo(params: Entities): Promise<ApplicationInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ApplicationsInfo",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  charmConfig(params: ApplicationGetArgs): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "CharmConfig",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  charmRelations(params: ApplicationCharmRelations): Promise<ApplicationCharmRelationsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "CharmRelations",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  consume(params: ConsumeApplicationArgsV5): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Consume",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  deploy(params: ApplicationsDeploy): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Deploy",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  deployFromRepository(params: DeployFromRepositoryArgs): Promise<DeployFromRepositoryResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DeployFromRepository",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  destroyApplication(params: DestroyApplicationsParams): Promise<DestroyApplicationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyApplication",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  destroyConsumedApplications(params: DestroyConsumedApplicationsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyConsumedApplications",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  destroyRelation(params: DestroyRelation): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyRelation",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  destroyUnit(params: DestroyUnitsParams): Promise<DestroyUnitResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyUnit",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  expose(params: ApplicationExpose): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Expose",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  get(params: ApplicationGet): Promise<ApplicationGetResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Get",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  getCharmURLOrigin(params: ApplicationGet): Promise<CharmURLOriginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetCharmURLOrigin",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  getConfig(params: Entities): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetConfig",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  getConstraints(params: Entities): Promise<ApplicationGetConstraintsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetConstraints",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  leader(params: Entity): Promise<StringResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Leader",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  mergeBindings(params: ApplicationMergeBindingsArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "MergeBindings",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  resolveUnitErrors(params: UnitsResolved): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ResolveUnitErrors",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  scaleApplications(params: ScaleApplicationsParams): Promise<ScaleApplicationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ScaleApplications",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setCharm(params: ApplicationSetCharmV2): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetCharm",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setConfigs(params: ConfigSetArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetConfigs",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setConstraints(params: SetConstraints): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetConstraints",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  setRelationsSuspended(params: RelationSuspendedArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetRelationsSuspended",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  unexpose(params: ApplicationUnexpose): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Unexpose",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  unitsInfo(params: Entities): Promise<UnitInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "UnitsInfo",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**

  */
  unsetApplicationsConfig(params: ApplicationConfigUnsetArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "UnsetApplicationsConfig",
        version: 20,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

}

export default ApplicationV20;
