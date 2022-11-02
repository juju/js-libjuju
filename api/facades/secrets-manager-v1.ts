/**
  Juju SecretsManager version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface CreateSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  content?: SecretContentParams;
  description?: string;
  'expire-time'?: string;
  label?: string;
  'owner-tag': string;
  params?: AdditionalProperties;
  'rotate-policy'?: string;
  uri?: string;
}

interface CreateSecretArgs {
  args: CreateSecretArg[];
}

interface CreateSecretURIsArg {
  count: number;
}

interface DeleteSecretArg {
  revisions?: number[];
  uri: string;
}

interface DeleteSecretArgs {
  args: DeleteSecretArg[];
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

interface GetSecretConsumerInfoArgs {
  'consumer-tag': string;
  uris: string[];
}

interface GetSecretContentArg {
  label?: string;
  peek?: boolean;
  update?: boolean;
  uri: string;
}

interface GetSecretContentArgs {
  args: GetSecretContentArg[];
}

interface GrantRevokeSecretArg {
  role: string;
  'scope-tag': string;
  'subject-tags': string[];
  uri: string;
}

interface GrantRevokeSecretArgs {
  args: GrantRevokeSecretArg[];
}

interface ListSecretResult {
  'create-time': string;
  description?: string;
  label?: string;
  'latest-expire-time'?: string;
  'latest-revision': number;
  'next-rotate-time'?: string;
  'owner-tag': string;
  revisions: SecretRevision[];
  'rotate-policy'?: string;
  'update-time': string;
  uri: string;
  value?: SecretValueResult;
  version: number;
}

interface ListSecretResults {
  results: ListSecretResult[];
}

interface SecretConsumerInfoResult {
  error?: Error;
  label: string;
  revision: number;
}

interface SecretConsumerInfoResults {
  results: SecretConsumerInfoResult[];
}

interface SecretContentParams {
  data: AdditionalProperties;
  'provider-id': string;
}

interface SecretContentResult {
  content: SecretContentParams;
  error?: Error;
}

interface SecretContentResults {
  results: SecretContentResult[];
}

interface SecretRevision {
  'create-time'?: string;
  'expire-time'?: string;
  'provider-id'?: string;
  revision: number;
  'update-time'?: string;
}

interface SecretRotatedArg {
  'original-revision': number;
  skip: boolean;
  uri: string;
}

interface SecretRotatedArgs {
  args: SecretRotatedArg[];
}

interface SecretStoreConfig {
  params?: AdditionalProperties;
  type: string;
}

interface SecretTriggerChange {
  'next-trigger-time': string;
  revision?: number;
  uri: string;
}

interface SecretTriggerWatchResult {
  changes: SecretTriggerChange[];
  error?: Error;
  'watcher-id': string;
}

interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface UpdateSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  content?: SecretContentParams;
  description?: string;
  'expire-time'?: string;
  label?: string;
  params?: AdditionalProperties;
  'rotate-policy'?: string;
  uri: string;
}

interface UpdateSecretArgs {
  args: UpdateSecretArg[];
}

interface UpsertSecretArg {
  content: SecretContentParams;
  description: string;
  'expire-time': string;
  label: string;
  params: AdditionalProperties;
  'rotate-policy': string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsManagerAPI is the implementation for the SecretsManager facade.
*/
class SecretsManagerV1 {
  static NAME: string = 'SecretsManager';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
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
        type: 'SecretsManager',
        request: 'CreateSecretURIs',
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
        type: 'SecretsManager',
        request: 'CreateSecrets',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetConsumerSecretsRevisionInfo returns the latest secret revisions for the specified secrets.
  */
  getConsumerSecretsRevisionInfo(params: GetSecretConsumerInfoArgs): Promise<SecretConsumerInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetConsumerSecretsRevisionInfo',
        version: 1,
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
        type: 'SecretsManager',
        request: 'GetSecretContentInfo',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetSecretMetadata returns metadata for the caller's secrets.
  */
  getSecretMetadata(): Promise<ListSecretResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetSecretMetadata',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetSecretStoreConfig gets the config needed to create a client to the model's secret store.
  */
  getSecretStoreConfig(): Promise<SecretStoreConfig> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetSecretStoreConfig',
        version: 1,
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
        type: 'SecretsManager',
        request: 'RemoveSecrets',
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
        type: 'SecretsManager',
        request: 'SecretsGrant',
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
        type: 'SecretsManager',
        request: 'SecretsRevoke',
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
        type: 'SecretsManager',
        request: 'SecretsRotated',
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
        type: 'SecretsManager',
        request: 'UpdateSecrets',
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
        type: 'SecretsManager',
        request: 'WatchConsumedSecretsChanges',
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
        type: 'SecretsManager',
        request: 'WatchObsolete',
        version: 1,
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
        type: 'SecretsManager',
        request: 'WatchSecretRevisionsExpiryChanges',
        version: 1,
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
        type: 'SecretsManager',
        request: 'WatchSecretsRotationChanges',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SecretsManagerV1;
