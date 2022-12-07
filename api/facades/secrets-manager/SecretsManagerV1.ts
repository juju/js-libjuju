/**
  Juju SecretsManager version 1.
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
  update?: boolean;
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
class SecretsManagerV1 implements Facade {
  static NAME = "SecretsManager";
  static VERSION = 1;

  NAME = "SecretsManager";
  VERSION = 1;

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
        version: 1,
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
        version: 1,
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
        type: "SecretsManager",
        request: "GetConsumerSecretsRevisionInfo",
        version: 1,
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
        type: "SecretsManager",
        request: "GetSecretContentInfo",
        version: 1,
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
        version: 1,
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
        type: "SecretsManager",
        request: "GetSecretStoreConfig",
        version: 1,
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
        version: 1,
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
        version: 1,
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
        version: 1,
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
        version: 1,
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
        version: 1,
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
        version: 1,
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
        version: 1,
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
        type: "SecretsManager",
        request: "WatchSecretRevisionsExpiryChanges",
        version: 1,
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
        type: "SecretsManager",
        request: "WatchSecretsRotationChanges",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretsManagerV1;
