/**
  Juju Application version 13.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta1 at the git SHA 61c87ab7e1.
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
  endpoints: AdditionalProperties;
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
  application: string;
  "attach-storage"?: string[];
  channel: string;
  "charm-origin"?: CharmOrigin;
  "charm-url": string;
  config?: AdditionalProperties;
  "config-yaml": string;
  constraints: Value;
  devices?: AdditionalProperties;
  "endpoint-bindings"?: AdditionalProperties;
  "num-units": number;
  placement?: Placement[];
  policy?: string;
  resources?: AdditionalProperties;
  series: string;
  storage?: AdditionalProperties;
}

export interface ApplicationDestroy {
  application: string;
}

export interface ApplicationExpose {
  application: string;
  "exposed-endpoints"?: AdditionalProperties;
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
  channel: string;
  charm: string;
  config: AdditionalProperties;
  constraints: Value;
  "endpoint-bindings"?: AdditionalProperties;
  series: string;
}

export interface ApplicationInfoResult {
  error: Error;
  result: ApplicationResult;
}

export interface ApplicationInfoResults {
  results: ApplicationInfoResult[];
}

export interface ApplicationMergeBindings {
  "application-tag": string;
  bindings: AdditionalProperties;
  force: boolean;
}

export interface ApplicationMergeBindingsArgs {
  args: ApplicationMergeBindings[];
}

export interface ApplicationMetricCredential {
  application: string;
  "metrics-credentials": number[];
}

export interface ApplicationMetricCredentials {
  creds: ApplicationMetricCredential[];
}

export interface ApplicationOfferDetails {
  "application-description": string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

export interface ApplicationResult {
  channel?: string;
  charm?: string;
  constraints?: Value;
  "endpoint-bindings"?: AdditionalProperties;
  exposed: boolean;
  "exposed-endpoints"?: AdditionalProperties;
  principal: boolean;
  remote: boolean;
  series?: string;
  tag: string;
}

export interface ApplicationSetCharm {
  application: string;
  channel: string;
  "charm-origin"?: CharmOrigin;
  "charm-url": string;
  "config-settings"?: AdditionalProperties;
  "config-settings-yaml"?: string;
  "endpoint-bindings"?: AdditionalProperties;
  force: boolean;
  "force-series": boolean;
  "force-units": boolean;
  generation: string;
  "resource-ids"?: AdditionalProperties;
  "storage-constraints"?: AdditionalProperties;
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

export interface CharmOrigin {
  architecture?: string;
  hash?: string;
  id: string;
  "instance-key"?: string;
  os?: string;
  revision?: number;
  risk?: string;
  series?: string;
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
  config: AdditionalProperties;
  "config-yaml": string;
  generation: string;
}

export interface ConfigSetArgs {
  Args: ConfigSet[];
}

export interface Constraints {
  Count: number;
  Pool: string;
  Size: number;
}

export interface ConsumeApplicationArg {
  ApplicationOfferDetails: ApplicationOfferDetails;
  "application-alias"?: string;
  "application-description": string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  "external-controller"?: ExternalControllerInfo;
  macaroon?: Macaroon;
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

export interface ConsumeApplicationArgs {
  args: ConsumeApplicationArg[];
}

export interface DestroyApplicationInfo {
  "destroyed-storage": Entity[];
  "destroyed-units": Entity[];
  "detached-storage": Entity[];
}

export interface DestroyApplicationParams {
  "application-tag": string;
  "destroy-storage"?: boolean;
  force: boolean;
  "max-wait"?: number;
}

export interface DestroyApplicationResult {
  error: Error;
  info: DestroyApplicationInfo;
}

export interface DestroyApplicationResults {
  results: DestroyApplicationResult[];
}

export interface DestroyApplicationUnits {
  "unit-names": string[];
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
  "destroyed-storage": Entity[];
  "detached-storage": Entity[];
}

export interface DestroyUnitParams {
  "destroy-storage"?: boolean;
  force: boolean;
  "max-wait"?: number;
  "unit-tag": string;
}

export interface DestroyUnitResult {
  error: Error;
  info: DestroyUnitInfo;
}

export interface DestroyUnitResults {
  results: DestroyUnitResult[];
}

export interface DestroyUnitsParams {
  units: DestroyUnitParams[];
}

export interface EndpointRelationData {
  ApplicationData: AdditionalProperties;
  "cross-model": boolean;
  endpoint: string;
  "related-endpoint": string;
  "unit-relation-data": AdditionalProperties;
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
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ExposedEndpoint {
  "expose-to-cidrs": string[];
  "expose-to-spaces": string[];
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

export interface RemoteSpace {
  "cloud-type": string;
  name: string;
  "provider-attributes": AdditionalProperties;
  "provider-id": string;
  subnets: Subnet[];
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
  error: Error;
  info: ScaleApplicationInfo;
}

export interface ScaleApplicationResults {
  results: ScaleApplicationResult[];
}

export interface ScaleApplicationsParams {
  applications: ScaleApplicationParams[];
}

export interface SetConstraints {
  application: string;
  constraints: Value;
}

export interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
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

export interface UnitInfoResult {
  error: Error;
  result: UnitResult;
}

export interface UnitInfoResults {
  results: UnitInfoResult[];
}

export interface UnitResult {
  address?: string;
  charm: string;
  leader?: boolean;
  machine?: string;
  "opened-ports": string[];
  "provider-id"?: string;
  "public-address"?: string;
  "relation-data"?: EndpointRelationData[];
  tag: string;
  "workload-version": string;
}

export interface UnitsResolved {
  all: boolean;
  retry: boolean;
  tags: Entities;
}

export interface UpdateSeriesArg {
  force: boolean;
  series: string;
  tag: Entity;
}

export interface UpdateSeriesArgs {
  args: UpdateSeriesArg[];
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv13 provides the Application API facade for version 13.
*/
class ApplicationV13 implements Facade {
  static NAME = "Application";
  static VERSION = 13;

  NAME = "Application";
  VERSION = 13;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AddRelation adds a relation between the specified endpoints and returns the relation info.
  */
  addRelation(params: AddRelation): Promise<AddRelationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "AddRelation",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AddUnits adds a given number of units to an application.
  */
  addUnits(params: AddApplicationUnits): Promise<AddApplicationUnitsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "AddUnits",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ApplicationsInfo returns applications information.
  */
  applicationsInfo(params: Entities): Promise<ApplicationInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ApplicationsInfo",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmConfig returns charm config for the input list of applications and
    model generations.
  */
  charmConfig(
    params: ApplicationGetArgs
  ): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "CharmConfig",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CharmRelations implements the server side of Application.CharmRelations.
  */
  charmRelations(
    params: ApplicationCharmRelations
  ): Promise<ApplicationCharmRelationsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "CharmRelations",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Consume adds remote applications to the model without creating any
    relations.
  */
  consume(params: ConsumeApplicationArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Consume",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Deploy fetches the charms from the charm store and deploys them
    using the specified placement directives.
  */
  deploy(params: ApplicationsDeploy): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Deploy",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Destroy destroys a given application, local or remote.

    NOTE(axw) this exists only for backwards compatibility,
    for API facade versions 1-3; clients should prefer its
    successor, DestroyApplication, below. Until all consumers
    have been updated, or we bump a major version, we can't
    drop this.

    TODO(axw) 2017-03-16 #1673323
    Drop this in Juju 3.0.
  */
  destroy(params: ApplicationDestroy): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Destroy",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyApplication removes a given set of applications.
  */
  destroyApplication(
    params: DestroyApplicationsParams
  ): Promise<DestroyApplicationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyApplication",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyConsumedApplications removes a given set of consumed (remote) applications.
  */
  destroyConsumedApplications(
    params: DestroyConsumedApplicationsParams
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyConsumedApplications",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyRelation removes the relation between the
    specified endpoints or an id.
  */
  destroyRelation(params: DestroyRelation): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyRelation",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyUnit removes a given set of application units.
  */
  destroyUnit(params: DestroyUnitsParams): Promise<DestroyUnitResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyUnit",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyUnits removes a given set of application units.

    NOTE(axw) this exists only for backwards compatibility,
    for API facade versions 1-3; clients should prefer its
    successor, DestroyUnit, below. Until all consumers have
    been updated, or we bump a major version, we can't drop
    this.

    TODO(axw) 2017-03-16 #1673323
    Drop this in Juju 3.0.
  */
  destroyUnits(params: DestroyApplicationUnits): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "DestroyUnits",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Expose changes the juju-managed firewall to expose any ports that
    were also explicitly marked by units as open.
  */
  expose(params: ApplicationExpose): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Expose",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Get returns the charm configuration for an application.
  */
  get(params: ApplicationGet): Promise<ApplicationGetResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Get",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetCharmURLOrigin returns the charm URL and charm origin the given
    application is running at present.
  */
  getCharmURLOrigin(params: ApplicationGet): Promise<CharmURLOriginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetCharmURLOrigin",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetConfig returns the charm config for each of the input applications.
  */
  getConfig(params: Entities): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetConfig",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetConstraints returns the constraints for a given application.
  */
  getConstraints(params: Entities): Promise<ApplicationGetConstraintsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "GetConstraints",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    MergeBindings merges operator-defined bindings with the current bindings for
    one or more applications.
  */
  mergeBindings(params: ApplicationMergeBindingsArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "MergeBindings",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ResolveUnitErrors marks errors on the specified units as resolved.
  */
  resolveUnitErrors(params: UnitsResolved): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ResolveUnitErrors",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ScaleApplications scales the specified application to the requested number of units.
  */
  scaleApplications(
    params: ScaleApplicationsParams
  ): Promise<ScaleApplicationResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "ScaleApplications",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetCharm sets the charm for a given for the application.
  */
  setCharm(params: ApplicationSetCharm): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetCharm",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetConfigs implements the server side of Application.SetConfig.  Both
    application and charm config are set. It does not unset values in
    Config map that are set to an empty string. Unset should be used for that.
  */
  setConfigs(params: ConfigSetArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetConfigs",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetConstraints sets the constraints for a given application.
  */
  setConstraints(params: SetConstraints): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetConstraints",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetMetricCredentials sets credentials on the application.
  */
  setMetricCredentials(
    params: ApplicationMetricCredentials
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetMetricCredentials",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetRelationsSuspended sets the suspended status of the specified relations.
  */
  setRelationsSuspended(params: RelationSuspendedArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "SetRelationsSuspended",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Unexpose changes the juju-managed firewall to unexpose any ports that
    were also explicitly marked by units as open.
  */
  unexpose(params: ApplicationUnexpose): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "Unexpose",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UnitsInfo returns unit information.
  */
  unitsInfo(params: Entities): Promise<UnitInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "UnitsInfo",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UnsetApplicationsConfig implements the server side of Application.UnsetApplicationsConfig.
  */
  unsetApplicationsConfig(
    params: ApplicationConfigUnsetArgs
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "UnsetApplicationsConfig",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateApplicationSeries updates the application series. Series for
    subordinates updated too.
  */
  updateApplicationSeries(params: UpdateSeriesArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Application",
        request: "UpdateApplicationSeries",
        version: 13,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ApplicationV13;
