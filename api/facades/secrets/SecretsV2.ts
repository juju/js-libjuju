/**
  Juju Secrets version 2.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AccessInfo {
  role: string;
  "scope-tag": string;
  "target-tag": string;
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

export interface DeleteSecretArg {
  label: string;
  revisions?: number[];
  uri: string;
}

export interface DeleteSecretArgs {
  args: DeleteSecretArg[];
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

export interface GrantRevokeUserSecretArg {
  applications: string[];
  label: string;
  uri: string;
}

export interface ListSecretResult {
  access?: AccessInfo[];
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

export interface ListSecretsArgs {
  filter: SecretsFilter;
  "show-secrets": boolean;
}

export interface SecretContentParams {
  data?: Record<string, string>;
  "value-ref"?: SecretValueRef;
}

export interface SecretRevision {
  "backend-name"?: string;
  "create-time"?: string;
  "expire-time"?: string;
  revision: number;
  "update-time"?: string;
  "value-ref"?: SecretValueRef;
}

export interface SecretValueRef {
  "backend-id": string;
  "revision-id": string;
}

export interface SecretValueResult {
  data?: Record<string, string>;
  error?: Error;
}

export interface SecretsFilter {
  label?: string;
  "owner-tag"?: string;
  revision?: number;
  uri?: string;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface UpdateUserSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  "auto-prune"?: boolean;
  content?: SecretContentParams;
  description?: string;
  "existing-label": string;
  "expire-time"?: string;
  label?: string;
  params?: AdditionalProperties;
  "rotate-policy"?: string;
  uri: string;
}

export interface UpdateUserSecretArgs {
  args: UpdateUserSecretArg[];
}

export interface UpsertSecretArg {
  content?: SecretContentParams;
  description?: string;
  "expire-time"?: string;
  label?: string;
  params?: AdditionalProperties;
  "rotate-policy"?: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsAPI is the backend for the Secrets facade.
*/
class SecretsV2 implements Facade {
  static NAME = "Secrets";
  static VERSION = 2;

  NAME = "Secrets";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    CreateSecrets creates new secrets.
  */
  createSecrets(params: CreateSecretArgs): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "CreateSecrets",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GrantSecret grants access to a user secret.
  */
  grantSecret(params: GrantRevokeUserSecretArg): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "GrantSecret",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListSecrets lists available secrets.
  */
  listSecrets(params: ListSecretsArgs): Promise<ListSecretResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "ListSecrets",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveSecrets remove user secret.
  */
  removeSecrets(params: DeleteSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "RemoveSecrets",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RevokeSecret revokes access to a user secret.
  */
  revokeSecret(params: GrantRevokeUserSecretArg): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "RevokeSecret",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UpdateSecrets creates new secrets.
  */
  updateSecrets(params: UpdateUserSecretArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Secrets",
        request: "UpdateSecrets",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretsV2;
