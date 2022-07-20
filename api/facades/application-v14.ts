/**
  Juju Application version 14.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddApplicationUnits {
  application: string;
  'attach-storage'?: string[];
  'num-units': number;
  placement: Placement[];
  policy?: string;
}

interface AddApplicationUnitsResults {
  units: string[];
}

interface AddRelation {
  endpoints: string[];
  'via-cidrs'?: string[];
}

interface AddRelationResults {
  endpoints: AdditionalProperties;
}

interface ApplicationCharmRelations {
  application: string;
}

interface ApplicationCharmRelationsResults {
  'charm-relations': string[];
}

interface ApplicationConfigUnsetArgs {
  Args: ApplicationUnset[];
}

interface ApplicationConstraint {
  constraints: Value;
  error?: Error;
}

interface ApplicationDeploy {
  Force: boolean;
  application: string;
  'attach-storage'?: string[];
  channel: string;
  'charm-origin'?: CharmOrigin;
  'charm-url': string;
  config?: AdditionalProperties;
  'config-yaml': string;
  constraints: Value;
  devices?: AdditionalProperties;
  'endpoint-bindings'?: AdditionalProperties;
  'num-units': number;
  placement?: Placement[];
  policy?: string;
  resources?: AdditionalProperties;
  series: string;
  storage?: AdditionalProperties;
}

interface ApplicationDestroy {
  application: string;
}

interface ApplicationExpose {
  application: string;
  'exposed-endpoints'?: AdditionalProperties;
}

interface ApplicationGet {
  application: string;
  branch: string;
}

interface ApplicationGetArgs {
  args: ApplicationGet[];
}

interface ApplicationGetConfigResults {
  Results: ConfigResult[];
}

interface ApplicationGetConstraintsResults {
  results: ApplicationConstraint[];
}

interface ApplicationGetResults {
  application: string;
  'application-config'?: AdditionalProperties;
  channel: string;
  charm: string;
  config: AdditionalProperties;
  constraints: Value;
  'endpoint-bindings'?: AdditionalProperties;
  series: string;
}

interface ApplicationInfoResult {
  error: Error;
  result: ApplicationResult;
}

interface ApplicationInfoResults {
  results: ApplicationInfoResult[];
}

interface ApplicationMergeBindings {
  'application-tag': string;
  bindings: AdditionalProperties;
  force: boolean;
}

interface ApplicationMergeBindingsArgs {
  args: ApplicationMergeBindings[];
}

interface ApplicationMetricCredential {
  application: string;
  'metrics-credentials': number[];
}

interface ApplicationMetricCredentials {
  creds: ApplicationMetricCredential[];
}

interface ApplicationOfferDetails {
  'application-description': string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  'offer-name': string;
  'offer-url': string;
  'offer-uuid': string;
  'source-model-tag': string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

interface ApplicationResult {
  channel?: string;
  charm?: string;
  constraints?: Value;
  'endpoint-bindings'?: AdditionalProperties;
  exposed: boolean;
  'exposed-endpoints'?: AdditionalProperties;
  life: string;
  principal: boolean;
  remote: boolean;
  series?: string;
  tag: string;
}

interface ApplicationSetCharm {
  application: string;
  channel: string;
  'charm-origin'?: CharmOrigin;
  'charm-url': string;
  'config-settings'?: AdditionalProperties;
  'config-settings-yaml'?: string;
  'endpoint-bindings'?: AdditionalProperties;
  force: boolean;
  'force-series': boolean;
  'force-units': boolean;
  generation: string;
  'resource-ids'?: AdditionalProperties;
  'storage-constraints'?: AdditionalProperties;
}

interface ApplicationUnexpose {
  application: string;
  'exposed-endpoints': string[];
}

interface ApplicationUnset {
  application: string;
  branch: string;
  options: string[];
}

interface ApplicationsDeploy {
  applications: ApplicationDeploy[];
}

interface CharmOrigin {
  architecture?: string;
  branch?: string;
  hash?: string;
  id: string;
  'instance-key'?: string;
  os?: string;
  revision?: number;
  risk?: string;
  series?: string;
  source: string;
  track?: string;
  type: string;
}

interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

interface CharmURLOriginResult {
  'charm-origin': CharmOrigin;
  error?: Error;
  url: string;
}

interface ConfigResult {
  config: AdditionalProperties;
  error?: Error;
}

interface ConfigSet {
  application: string;
  config: AdditionalProperties;
  'config-yaml': string;
  generation: string;
}

interface ConfigSetArgs {
  Args: ConfigSet[];
}

interface Constraints {
  Count: number;
  Pool: string;
  Size: number;
}

interface ConsumeApplicationArg {
  ApplicationOfferDetails: ApplicationOfferDetails;
  'application-alias'?: string;
  'application-description': string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  'external-controller'?: ExternalControllerInfo;
  macaroon?: Macaroon;
  'offer-name': string;
  'offer-url': string;
  'offer-uuid': string;
  'source-model-tag': string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

interface ConsumeApplicationArgs {
  args: ConsumeApplicationArg[];
}

interface DestroyApplicationInfo {
  'destroyed-storage': Entity[];
  'destroyed-units': Entity[];
  'detached-storage': Entity[];
}

interface DestroyApplicationParams {
  'application-tag': string;
  'destroy-storage'?: boolean;
  force: boolean;
  'max-wait'?: number;
}

interface DestroyApplicationResult {
  error: Error;
  info: DestroyApplicationInfo;
}

interface DestroyApplicationResults {
  results: DestroyApplicationResult[];
}

interface DestroyApplicationUnits {
  'unit-names': string[];
}

interface DestroyApplicationsParams {
  applications: DestroyApplicationParams[];
}

interface DestroyConsumedApplicationParams {
  'application-tag': string;
  force?: boolean;
  'max-wait'?: number;
}

interface DestroyConsumedApplicationsParams {
  applications: DestroyConsumedApplicationParams[];
}

interface DestroyRelation {
  endpoints?: string[];
  force?: boolean;
  'max-wait'?: number;
  'relation-id': number;
}

interface DestroyUnitInfo {
  'destroyed-storage': Entity[];
  'detached-storage': Entity[];
}

interface DestroyUnitParams {
  'destroy-storage'?: boolean;
  force: boolean;
  'max-wait'?: number;
  'unit-tag': string;
}

interface DestroyUnitResult {
  error: Error;
  info: DestroyUnitInfo;
}

interface DestroyUnitResults {
  results: DestroyUnitResult[];
}

interface DestroyUnitsParams {
  units: DestroyUnitParams[];
}

interface EndpointRelationData {
  ApplicationData: AdditionalProperties;
  'cross-model': boolean;
  endpoint: string;
  'related-endpoint': string;
  'relation-id': number;
  'unit-relation-data': AdditionalProperties;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
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

interface ExternalControllerInfo {
  addrs: string[];
  'ca-cert': string;
  'controller-alias': string;
  'controller-tag': string;
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface OfferUserDetails {
  access: string;
  'display-name': string;
  user: string;
}

interface Placement {
  directive: string;
  scope: string;
}

interface RelationData {
  InScope: boolean;
  UnitData: AdditionalProperties;
}

interface RelationSuspendedArg {
  message: string;
  'relation-id': number;
  suspended: boolean;
}

interface RelationSuspendedArgs {
  args: RelationSuspendedArg[];
}

interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

interface RemoteSpace {
  'cloud-type': string;
  name: string;
  'provider-attributes': AdditionalProperties;
  'provider-id': string;
  subnets: Subnet[];
}

interface ScaleApplicationInfo {
  'num-units': number;
}

interface ScaleApplicationParams {
  'application-tag': string;
  force: boolean;
  scale: number;
  'scale-change'?: number;
}

interface ScaleApplicationResult {
  error: Error;
  info: ScaleApplicationInfo;
}

interface ScaleApplicationResults {
  results: ScaleApplicationResult[];
}

interface ScaleApplicationsParams {
  applications: ScaleApplicationParams[];
}

interface SetConstraints {
  application: string;
  constraints: Value;
}

interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
}

interface StringResult {
  error?: Error;
  result: string;
}

interface Subnet {
  cidr: string;
  life: string;
  'provider-id'?: string;
  'provider-network-id'?: string;
  'provider-space-id'?: string;
  'space-tag': string;
  status?: string;
  'vlan-tag': number;
  zones: string[];
}

interface UnitInfoResult {
  error: Error;
  result: UnitResult;
}

interface UnitInfoResults {
  results: UnitInfoResult[];
}

interface UnitResult {
  address?: string;
  charm: string;
  leader?: boolean;
  life?: string;
  machine?: string;
  'opened-ports': string[];
  'provider-id'?: string;
  'public-address'?: string;
  'relation-data'?: EndpointRelationData[];
  tag: string;
  'workload-version': string;
}

interface UnitsResolved {
  all: boolean;
  retry: boolean;
  tags: Entities;
}

interface UpdateSeriesArg {
  force: boolean;
  series: string;
  tag: Entity;
}

interface UpdateSeriesArgs {
  args: UpdateSeriesArg[];
}

interface Value {
  'allocate-public-ip': boolean;
  arch: string;
  container: string;
  cores: number;
  'cpu-power': number;
  'instance-role': string;
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
  APIv14 provides the Application API facade for version 14.
*/
class ApplicationV14 {
  static NAME: string = 'Application';
  static VERSION: number = 14;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 14;
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
        type: 'Application',
        request: 'AddRelation',
        version: 14,
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
        type: 'Application',
        request: 'AddUnits',
        version: 14,
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
        type: 'Application',
        request: 'ApplicationsInfo',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmConfig returns charm config for the input list of applications and
    model generations.
  */
  charmConfig(params: ApplicationGetArgs): Promise<ApplicationGetConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'CharmConfig',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmRelations implements the server side of Application.CharmRelations.
  */
  charmRelations(params: ApplicationCharmRelations): Promise<ApplicationCharmRelationsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'CharmRelations',
        version: 14,
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
        type: 'Application',
        request: 'Consume',
        version: 14,
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
        type: 'Application',
        request: 'Deploy',
        version: 14,
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
  destroy(params: ApplicationDestroy): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'Destroy',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyApplication removes a given set of applications.
  */
  destroyApplication(params: DestroyApplicationsParams): Promise<DestroyApplicationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'DestroyApplication',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyConsumedApplications removes a given set of consumed (remote) applications.
  */
  destroyConsumedApplications(params: DestroyConsumedApplicationsParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'DestroyConsumedApplications',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyRelation removes the relation between the
    specified endpoints or an id.
  */
  destroyRelation(params: DestroyRelation): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'DestroyRelation',
        version: 14,
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
        type: 'Application',
        request: 'DestroyUnit',
        version: 14,
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
  destroyUnits(params: DestroyApplicationUnits): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'DestroyUnits',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Expose changes the juju-managed firewall to expose any ports that
    were also explicitly marked by units as open.
  */
  expose(params: ApplicationExpose): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'Expose',
        version: 14,
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
        type: 'Application',
        request: 'Get',
        version: 14,
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
        type: 'Application',
        request: 'GetCharmURLOrigin',
        version: 14,
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
        type: 'Application',
        request: 'GetConfig',
        version: 14,
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
        type: 'Application',
        request: 'GetConstraints',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Leader returns the unit name of the leader for the given application.
  */
  leader(params: Entity): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'Leader',
        version: 14,
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
        type: 'Application',
        request: 'MergeBindings',
        version: 14,
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
        type: 'Application',
        request: 'ResolveUnitErrors',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ScaleApplications scales the specified application to the requested number of units.
  */
  scaleApplications(params: ScaleApplicationsParams): Promise<ScaleApplicationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'ScaleApplications',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetCharm sets the charm for a given for the application.
  */
  setCharm(params: ApplicationSetCharm): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'SetCharm',
        version: 14,
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
        type: 'Application',
        request: 'SetConfigs',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetConstraints sets the constraints for a given application.
  */
  setConstraints(params: SetConstraints): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'SetConstraints',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetMetricCredentials sets credentials on the application.
  */
  setMetricCredentials(params: ApplicationMetricCredentials): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'SetMetricCredentials',
        version: 14,
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
        type: 'Application',
        request: 'SetRelationsSuspended',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Unexpose changes the juju-managed firewall to unexpose any ports that
    were also explicitly marked by units as open.
  */
  unexpose(params: ApplicationUnexpose): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'Unexpose',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnitsInfo returns unit information for the given entities (units or
    applications).
  */
  unitsInfo(params: Entities): Promise<UnitInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'UnitsInfo',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnsetApplicationsConfig implements the server side of Application.UnsetApplicationsConfig.
  */
  unsetApplicationsConfig(params: ApplicationConfigUnsetArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Application',
        request: 'UnsetApplicationsConfig',
        version: 14,
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
        type: 'Application',
        request: 'UpdateApplicationSeries',
        version: 14,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ApplicationV14;
