/**
  Juju Cloud version 7.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
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
  "is-controller-cloud"?: boolean;
  "region-config"?: AdditionalProperties;
  regions?: CloudRegion[];
  "skip-tls-verify"?: boolean;
  "storage-endpoint"?: string;
  type: string;
}

export interface CloudCredential {
  attrs?: Record<string, string>;
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
  error?: Error;
  result?: CloudCredential;
}

export interface CloudCredentialResults {
  results?: CloudCredentialResult[];
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
  error?: Error;
  result?: CloudInfo;
}

export interface CloudInfoResults {
  results: CloudInfoResult[];
}

export interface CloudRegion {
  endpoint?: string;
  "identity-endpoint"?: string;
  name: string;
  "storage-endpoint"?: string;
}

export interface CloudResult {
  cloud?: Cloud;
  error?: Error;
}

export interface CloudResults {
  results?: CloudResult[];
}

export interface CloudUserInfo {
  access: string;
  "display-name": string;
  user: string;
}

export interface CloudsResult {
  clouds?: Record<string, Cloud>;
}

export interface ControllerCredentialInfo {
  content?: CredentialContent;
  models?: ModelAccess[];
}

export interface CredentialContent {
  attrs?: Record<string, string>;
  "auth-type": string;
  cloud: string;
  name: string;
  valid?: boolean;
}

export interface CredentialContentResult {
  error?: Error;
  result?: ControllerCredentialInfo;
}

export interface CredentialContentResults {
  results?: CredentialContentResult[];
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

export interface ListCloudInfo {
  CloudDetails: CloudDetails;
  "user-access": string;
}

export interface ListCloudInfoResult {
  error?: Error;
  result?: ListCloudInfo;
}

export interface ListCloudInfoResults {
  results: ListCloudInfoResult[];
}

export interface ListCloudsRequest {
  all?: boolean;
  "user-tag": string;
}

export interface ModelAccess {
  access?: string;
  model?: string;
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
  error?: Error;
  result?: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface TaggedCredential {
  credential: CloudCredential;
  tag: string;
}

export interface TaggedCredentials {
  credentials?: TaggedCredential[];
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
  results?: UpdateCredentialResult[];
}

export interface UserCloud {
  "cloud-tag": string;
  "user-tag": string;
}

export interface UserClouds {
  "user-clouds"?: UserCloud[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

class CloudV7 implements Facade {
  static NAME = "Cloud";
  static VERSION = 7;

  NAME = "Cloud";
  VERSION = 7;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  addCloud(params: AddCloudArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "AddCloud",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  addCredentials(params: TaggedCredentials): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "AddCredentials",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  checkCredentialsModels(
    params: TaggedCredentials
  ): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "CheckCredentialsModels",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  cloud(params: Entities): Promise<CloudResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "Cloud",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  cloudInfo(params: Entities): Promise<CloudInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "CloudInfo",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  clouds(params: any): Promise<CloudsResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "Clouds",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  credential(params: Entities): Promise<CloudCredentialResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "Credential",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  credentialContents(
    params: CloudCredentialArgs
  ): Promise<CredentialContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "CredentialContents",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  listCloudInfo(params: ListCloudsRequest): Promise<ListCloudInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "ListCloudInfo",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  modifyCloudAccess(params: ModifyCloudAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "ModifyCloudAccess",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  removeClouds(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "RemoveClouds",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  revokeCredentialsCheckModels(
    params: RevokeCredentialArgs
  ): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "RevokeCredentialsCheckModels",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  updateCloud(params: UpdateCloudArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "UpdateCloud",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  updateCredentialsCheckModels(
    params: UpdateCredentialArgs
  ): Promise<UpdateCredentialResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "UpdateCredentialsCheckModels",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  userCredentials(params: UserClouds): Promise<StringsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Cloud",
        request: "UserCredentials",
        version: 7,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default CloudV7;
