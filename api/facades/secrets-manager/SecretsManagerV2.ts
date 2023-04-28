/**
  Juju SecretsManager version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2-rc1 at the git SHA 3a098707a1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

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

export interface GetSecretConsumerInfoArgs {
  "consumer-tag": string;
  uris: string[];
}

export interface GetSecretContentArg {
  label?: string;
  peek?: boolean;
  refresh?: boolean;
  uri: string;
}

export interface GetSecretContentArgs {
  args: GetSecretContentArg[];
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

export interface SecretBackendArgs {
  "backend-ids": string[];
}

export interface SecretBackendConfig {
  params?: AdditionalProperties;
  type: string;
}

export interface SecretBackendConfigResult {
  config?: SecretBackendConfig;
  draining: boolean;
  "model-controller": string;
  "model-name": string;
  "model-uuid": string;
}

export interface SecretBackendConfigResults {
  "active-id": string;
  results?: AdditionalProperties;
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
  "value-ref": SecretValueRef;
}

export interface SecretContentResult {
  "backend-config"?: SecretBackendConfigResult;
  content: SecretContentParams;
  error?: Error;
  "latest-revision"?: number;
}

export interface SecretContentResults {
  results: SecretContentResult[];
}

export interface SecretRevision {
  "backend-name"?: string;
  "create-time"?: string;
  "expire-time"?: string;
  revision: number;
  "update-time"?: string;
  "value-ref"?: SecretValueRef;
}

export interface SecretRevisionArg {
  "pending-delete": boolean;
  revisions: number[];
  uri: string;
}

export interface SecretRotatedArg {
  "original-revision": number;
  skip: boolean;
  uri: string;
}

export interface SecretRotatedArgs {
  args: SecretRotatedArg[];
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

export interface SecretValueRef {
  "backend-id": string;
  "revision-id": string;
}

export interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface StringResults {
  results: StringResult[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  "watcher-id": string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
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
  SecretsManagerAPI is the implementation for the SecretsManager facade.
*/
class SecretsManagerV2 implements Facade {
  static NAME = "SecretsManager";
  static VERSION = 2;

  NAME = "SecretsManager";
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
    CreateSecretURIs creates new secret URIs.
  */
  createSecretURIs(params: CreateSecretURIsArg): Promise<StringResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "CreateSecretURIs",
        version: 2,
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
        type: "SecretsManager",
        request: "CreateSecrets",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    GetConsumerSecretsRevisionInfo returns the latest secret revisions for the specified secrets.
    This facade method is used for remote watcher to get the latest secret revisions and labels for a secret changed hook.
  */
  getConsumerSecretsRevisionInfo(params: GetSecretConsumerInfoArgs): Promise<SecretConsumerInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "GetConsumerSecretsRevisionInfo",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    GetSecretBackendConfigs gets the config needed to create a client to secret backends.
  */
  getSecretBackendConfigs(params: SecretBackendArgs): Promise<SecretBackendConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "GetSecretBackendConfigs",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    GetSecretContentInfo returns the secret values for the specified secrets.
  */
  getSecretContentInfo(params: GetSecretContentArgs): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "GetSecretContentInfo",
        version: 2,
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
        type: "SecretsManager",
        request: "GetSecretMetadata",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    GetSecretRevisionContentInfo returns the secret values for the specified secret revisions.
    Used when deleting a secret; only returns external revision info.
  */
  getSecretRevisionContentInfo(params: SecretRevisionArg): Promise<SecretContentResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "GetSecretRevisionContentInfo",
        version: 2,
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
        type: "SecretsManager",
        request: "RemoveSecrets",
        version: 2,
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
        type: "SecretsManager",
        request: "SecretsGrant",
        version: 2,
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
        type: "SecretsManager",
        request: "SecretsRevoke",
        version: 2,
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
        type: "SecretsManager",
        request: "SecretsRotated",
        version: 2,
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
        type: "SecretsManager",
        request: "UpdateSecrets",
        version: 2,
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
        type: "SecretsManager",
        request: "WatchConsumedSecretsChanges",
        version: 2,
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
        type: "SecretsManager",
        request: "WatchObsolete",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    WatchSecretRevisionsExpiryChanges sets up a watcher to notify of changes to secret revision expiry config.
  */
  watchSecretRevisionsExpiryChanges(params: Entities): Promise<SecretTriggerWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "WatchSecretRevisionsExpiryChanges",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    WatchSecretsRotationChanges sets up a watcher to notify of changes to secret rotation config.
  */
  watchSecretsRotationChanges(params: Entities): Promise<SecretTriggerWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "SecretsManager",
        request: "WatchSecretsRotationChanges",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

}

export default SecretsManagerV2;
