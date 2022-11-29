/**
  Juju Cloud version 5.
  This facade is available on:
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 2.9-rc3 at the git SHA cb361902f8.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface AddCloudArgs {
  cloud: Cloud;
  force?: boolean;
  name: string;
}

export interface Cloud {
  "auth-types"?: string[];
  "ca-certificates"?: string[];
  config?: AdditionalProperties;
  endpoint?: string;
  "host-cloud-region"?: string;
  "identity-endpoint"?: string;
  "region-config"?: AdditionalProperties;
  regions?: CloudRegion[];
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudCredential {
  attrs?: AdditionalProperties;
  "auth-type": string;
  redacted?: string[];
}

export interface CloudCredentialArg {
  "cloud-name": string;
  "credential-name": string;
}

export interface CloudCredentialArgs {
  credentials?: CloudCredentialArg[];
  "include-secrets": boolean;
}

export interface CloudCredentialResult {
  error: Error;
  result: CloudCredential;
}

export interface CloudCredentialResults {
  results: CloudCredentialResult[];
}

export interface CloudDetails {
  "auth-types"?: string[];
  endpoint?: string;
  "identity-endpoint"?: string;
  regions?: CloudRegion[];
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudInfo {
  CloudDetails: CloudDetails;
  users: CloudUserInfo[];
}

export interface CloudInfoResult {
  error: Error;
  result: CloudInfo;
}

export interface CloudInfoResults {
  results: CloudInfoResult[];
}

export interface CloudInstanceTypesConstraint {
  "cloud-tag": string;
  constraints?: Value;
  region: string;
}

export interface CloudInstanceTypesConstraints {
  constraints: CloudInstanceTypesConstraint[];
}

export interface CloudRegion {
  endpoint?: string;
  "identity-endpoint"?: string;
  name: string;
  "storage-endpoint"?: string;
}

export interface CloudResult {
  cloud: Cloud;
  error: Error;
}

export interface CloudResults {
  results: CloudResult[];
}

export interface CloudUserInfo {
  access: string;
  "display-name": string;
  user: string;
}

export interface CloudsResult {
  clouds: AdditionalProperties;
}

export interface ControllerCredentialInfo {
  content: CredentialContent;
  models: ModelAccess[];
}

export interface CredentialContent {
  attrs?: AdditionalProperties;
  "auth-type": string;
  cloud: string;
  name: string;
  valid?: boolean;
}

export interface CredentialContentResult {
  error: Error;
  result: ControllerCredentialInfo;
}

export interface CredentialContentResults {
  results: CredentialContentResult[];
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

export interface InstanceType {
  arches: string[];
  cost?: number;
  "cpu-cores": number;
  deprecated?: boolean;
  memory: number;
  name?: string;
  "root-disk"?: number;
  "virt-type"?: string;
}

export interface InstanceTypesResult {
  "cost-currency": string;
  "cost-divisor": number;
  "cost-unit": string;
  error: Error;
  "instance-types": InstanceType[];
}

export interface InstanceTypesResults {
  results: InstanceTypesResult[];
}

export interface ListCloudInfo {
  CloudDetails: CloudDetails;
  "user-access": string;
}

export interface ListCloudInfoResult {
  error: Error;
  result: ListCloudInfo;
}

export interface ListCloudInfoResults {
  results: ListCloudInfoResult[];
}

export interface ListCloudsRequest {
  all?: boolean;
  "user-tag": string;
}

export interface ModelAccess {
  access: string;
  model: string;
}

export interface ModifyCloudAccess {
  access: string;
  action: string;
  "cloud-tag": string;
  "user-tag": string;
}

export interface ModifyCloudAccessRequest {
  changes: ModifyCloudAccess[];
}

export interface RevokeCredentialArg {
  force: boolean;
  tag: string;
}

export interface RevokeCredentialArgs {
  credentials: RevokeCredentialArg[];
}

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface TaggedCredential {
  credential: CloudCredential;
  tag: string;
}

export interface TaggedCredentials {
  credentials: TaggedCredential[];
}

export interface UpdateCloudArgs {
  clouds: AddCloudArgs[];
}

export interface UpdateCredentialArgs {
  credentials: TaggedCredential[];
  force: boolean;
}

export interface UpdateCredentialModelResult {
  errors?: ErrorResult[];
  name: string;
  uuid: string;
}

export interface UpdateCredentialResult {
  error?: Error;
  models?: UpdateCredentialModelResult[];
  tag: string;
}

export interface UpdateCredentialResults {
  results: UpdateCredentialResult[];
}

export interface UserCloud {
  "cloud-tag": string;
  "user-tag": string;
}

export interface UserClouds {
  "user-clouds": UserCloud[];
}

export interface Value {
  "allocate-public-ip": boolean;
  arch: string;
  container: string;
  cores: number;
  "cpu-power": number;
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
  CloudAPIV5 provides a way to wrap the different calls
  between version 5 and version 6 of the cloud API.
*/
class CloudV5 {
  static NAME = "Cloud";
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
    AddCloud adds a new cloud, different from the one managed by the controller.
  */
  addCloud(params: AddCloudArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "AddCloud",
        version: 5,
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
        type: "Cloud",
        request: "AddCredentials",
        version: 5,
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
  checkCredentialsModels(
    params: TaggedCredentials
  ): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "CheckCredentialsModels",
        version: 5,
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
        type: "Cloud",
        request: "Cloud",
        version: 5,
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
        type: "Cloud",
        request: "CloudInfo",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Clouds returns the definitions of all clouds supported by the controller
    that the logged in user can see.
  */
  clouds(params: any): Promise<CloudsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "Clouds",
        version: 5,
        params: params,
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
        type: "Cloud",
        request: "Credential",
        version: 5,
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
  credentialContents(
    params: CloudCredentialArgs
  ): Promise<CredentialContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "CredentialContents",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    InstanceTypes returns instance type information for the cloud and region
    in which the current model is deployed.
  */
  instanceTypes(
    params: CloudInstanceTypesConstraints
  ): Promise<InstanceTypesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "InstanceTypes",
        version: 5,
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
        type: "Cloud",
        request: "ListCloudInfo",
        version: 5,
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
        type: "Cloud",
        request: "ModifyCloudAccess",
        version: 5,
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
        type: "Cloud",
        request: "RemoveClouds",
        version: 5,
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
  revokeCredentialsCheckModels(
    params: RevokeCredentialArgs
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "RevokeCredentialsCheckModels",
        version: 5,
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
        type: "Cloud",
        request: "UpdateCloud",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateCredentialsCheckModels updates a set of cloud credentials' content.
    If there are any models that are using a credential and these models
    are not going to be visible with updated credential content,
    there will be detailed validation errors per model.
    Controller admins can 'force' an update of the credential
    regardless of whether it is deemed valid or not.
  */
  updateCredentialsCheckModels(
    params: UpdateCredentialArgs
  ): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "UpdateCredentialsCheckModels",
        version: 5,
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
        type: "Cloud",
        request: "UserCredentials",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CloudV5;
