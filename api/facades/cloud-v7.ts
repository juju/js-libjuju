/**
  Juju Cloud version 7.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddCloudArgs {
  cloud: Cloud;
  force?: boolean;
  name: string;
}

interface Cloud {
  'auth-types'?: string[];
  'ca-certificates'?: string[];
  config?: AdditionalProperties;
  endpoint?: string;
  'host-cloud-region'?: string;
  'identity-endpoint'?: string;
  'is-controller-cloud'?: boolean;
  'region-config'?: AdditionalProperties;
  regions?: CloudRegion[];
  'skip-tls-verify'?: boolean;
  'storage-endpoint'?: string;
  type: string;
}

interface CloudCredential {
  attrs?: AdditionalProperties;
  'auth-type': string;
  redacted?: string[];
}

interface CloudCredentialArg {
  'cloud-name': string;
  'credential-name': string;
}

interface CloudCredentialArgs {
  credentials?: CloudCredentialArg[];
  'include-secrets': boolean;
}

interface CloudCredentialResult {
  error: Error;
  result: CloudCredential;
}

interface CloudCredentialResults {
  results: CloudCredentialResult[];
}

interface CloudDetails {
  'auth-types'?: string[];
  endpoint?: string;
  'identity-endpoint'?: string;
  regions?: CloudRegion[];
  'storage-endpoint'?: string;
  type: string;
}

interface CloudInfo {
  CloudDetails: CloudDetails;
  users: CloudUserInfo[];
}

interface CloudInfoResult {
  error: Error;
  result: CloudInfo;
}

interface CloudInfoResults {
  results: CloudInfoResult[];
}

interface CloudInstanceTypesConstraint {
  'cloud-tag': string;
  constraints?: Value;
  region: string;
}

interface CloudInstanceTypesConstraints {
  constraints: CloudInstanceTypesConstraint[];
}

interface CloudRegion {
  endpoint?: string;
  'identity-endpoint'?: string;
  name: string;
  'storage-endpoint'?: string;
}

interface CloudResult {
  cloud: Cloud;
  error: Error;
}

interface CloudResults {
  results: CloudResult[];
}

interface CloudUserInfo {
  access: string;
  'display-name': string;
  user: string;
}

interface CloudsResult {
  clouds: AdditionalProperties;
}

interface ControllerCredentialInfo {
  content: CredentialContent;
  models: ModelAccess[];
}

interface CredentialContent {
  attrs?: AdditionalProperties;
  'auth-type': string;
  cloud: string;
  name: string;
  valid?: boolean;
}

interface CredentialContentResult {
  error: Error;
  result: ControllerCredentialInfo;
}

interface CredentialContentResults {
  results: CredentialContentResult[];
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

interface InstanceType {
  arches: string[];
  cost?: number;
  'cpu-cores': number;
  deprecated?: boolean;
  memory: number;
  name?: string;
  'root-disk'?: number;
  'virt-type'?: string;
}

interface InstanceTypesResult {
  'cost-currency': string;
  'cost-divisor': number;
  'cost-unit': string;
  error: Error;
  'instance-types': InstanceType[];
}

interface InstanceTypesResults {
  results: InstanceTypesResult[];
}

interface ListCloudInfo {
  CloudDetails: CloudDetails;
  'user-access': string;
}

interface ListCloudInfoResult {
  error: Error;
  result: ListCloudInfo;
}

interface ListCloudInfoResults {
  results: ListCloudInfoResult[];
}

interface ListCloudsRequest {
  all?: boolean;
  'user-tag': string;
}

interface ModelAccess {
  access: string;
  model: string;
}

interface ModifyCloudAccess {
  access: string;
  action: string;
  'cloud-tag': string;
  'user-tag': string;
}

interface ModifyCloudAccessRequest {
  changes: ModifyCloudAccess[];
}

interface RevokeCredentialArg {
  force: boolean;
  tag: string;
}

interface RevokeCredentialArgs {
  credentials: RevokeCredentialArg[];
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface StringsResults {
  results: StringsResult[];
}

interface TaggedCredential {
  credential: CloudCredential;
  tag: string;
}

interface TaggedCredentials {
  credentials: TaggedCredential[];
}

interface UpdateCloudArgs {
  clouds: AddCloudArgs[];
}

interface UpdateCredentialArgs {
  credentials: TaggedCredential[];
  force: boolean;
}

interface UpdateCredentialModelResult {
  errors?: ErrorResult[];
  name: string;
  uuid: string;
}

interface UpdateCredentialResult {
  error?: Error;
  models?: UpdateCredentialModelResult[];
  tag: string;
}

interface UpdateCredentialResults {
  results: UpdateCredentialResult[];
}

interface UserCloud {
  'cloud-tag': string;
  'user-tag': string;
}

interface UserClouds {
  'user-clouds': UserCloud[];
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
  CloudAPI implements the cloud interface and is the concrete implementation
  of the api end point.
*/
class CloudV7 {
  static NAME: string = 'Cloud';
  static VERSION: number = 7;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 7;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AddCloud adds a new cloud, different from the one managed by the controller.
  */
  addCloud(params: AddCloudArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'AddCloud',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddCredentials adds new credentials.
    In contrast to UpdateCredentials() below, the new credentials can be
    for a cloud that the controller does not manage (this is required
    for CAAS models)
  */
  addCredentials(params: TaggedCredentials): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'AddCredentials',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CheckCredentialsModels validates supplied cloud credentials' content against
    models that currently use these credentials.
    If there are any models that are using a credential and these models or their
    cloud instances are not going to be accessible with corresponding credential,
    there will be detailed validation errors per model.
    There's no Juju API client which uses this, but JAAS does,
  */
  checkCredentialsModels(params: TaggedCredentials): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'CheckCredentialsModels',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Cloud returns the cloud definitions for the specified clouds.
  */
  cloud(params: Entities): Promise<CloudResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'Cloud',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudInfo returns information about the specified clouds.
  */
  cloudInfo(params: Entities): Promise<CloudInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'CloudInfo',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Clouds returns the definitions of all clouds supported by the controller
    that the logged in user can see.
  */
  clouds(): Promise<CloudsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'Clouds',
        version: 7,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Credential returns the specified cloud credential for each tag, minus secrets.
  */
  credential(params: Entities): Promise<CloudCredentialResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'Credential',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CredentialContents returns the specified cloud credentials,
    including the secrets if requested.
    If no specific credential name/cloud was passed in, all credentials for this user
    are returned.
    Only credential owner can see its contents as well as what models use it.
    Controller admin has no special superpowers here and is treated the same as all other users.
  */
  credentialContents(params: CloudCredentialArgs): Promise<CredentialContentResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'CredentialContents',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InstanceTypes returns instance type information for the cloud and region
    in which the current model is deployed.
  */
  instanceTypes(params: CloudInstanceTypesConstraints): Promise<InstanceTypesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'InstanceTypes',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListCloudInfo returns clouds that the specified user has access to.
    Controller admins (superuser) can list clouds for any user.
    Other users can only ask about their own clouds.
  */
  listCloudInfo(params: ListCloudsRequest): Promise<ListCloudInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'ListCloudInfo',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModifyCloudAccess changes the model access granted to users.
  */
  modifyCloudAccess(params: ModifyCloudAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'ModifyCloudAccess',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveClouds removes the specified clouds from the controller.
    If a cloud is in use (has models deployed to it), the removal will fail.
  */
  removeClouds(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'RemoveClouds',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RevokeCredentialsCheckModels revokes a set of cloud credentials.
    If the credentials are used by any of the models, the credential deletion will be aborted.
    If credential-in-use needs to be revoked nonetheless, this method allows the use of force.
  */
  revokeCredentialsCheckModels(params: RevokeCredentialArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'RevokeCredentialsCheckModels',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpdateCloud updates an existing cloud that the controller knows about.
  */
  updateCloud(params: UpdateCloudArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'UpdateCloud',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpdateCredentialsCheckModels updates a set of cloud credentials' content.
    If there are any models that are using a credential and these models
    are not going to be visible with updated credential content,
    there will be detailed validation errors per model.  Such model errors are returned
    separately and do not contribute to the overall method error status.
    Controller admins can 'force' an update of the credential
    regardless of whether it is deemed valid or not.
  */
  updateCredentialsCheckModels(params: UpdateCredentialArgs): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'UpdateCredentialsCheckModels',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UserCredentials returns the cloud credentials for a set of users.
  */
  userCredentials(params: UserClouds): Promise<StringsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Cloud',
        request: 'UserCredentials',
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CloudV7;
