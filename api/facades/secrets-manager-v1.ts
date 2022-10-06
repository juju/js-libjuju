/**
  Juju SecretsManager version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface CreateSecretArg {
  UpsertSecretArg: UpsertSecretArg;
  data?: AdditionalProperties;
  description?: string;
  'expire-time'?: string;
  label?: string;
  'owner-tag': string;
  params?: AdditionalProperties;
  'rotate-policy'?: string;
}

interface CreateSecretArgs {
  args: CreateSecretArg[];
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

interface GetSecretValueArg {
  label?: string;
  peek?: boolean;
  update?: boolean;
  uri: string;
}

interface GetSecretValueArgs {
  args: GetSecretValueArg[];
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

interface SecretConsumerInfoResult {
  error?: Error;
  label: string;
  revision: number;
}

interface SecretConsumerInfoResults {
  results: SecretConsumerInfoResult[];
}

interface SecretIdResult {
  label: string;
}

interface SecretIdResults {
  error?: Error;
  result: AdditionalProperties;
}

interface SecretRotatedArg {
  uri: string;
  when: string;
}

interface SecretRotatedArgs {
  args: SecretRotatedArg[];
}

interface SecretRotationChange {
  'last-rotate-time': string;
  'rotate-interval': number;
  uri: string;
}

interface SecretRotationWatchResult {
  changes: SecretRotationChange[];
  error?: Error;
  'watcher-id': string;
}

interface SecretRotationWatchResults {
  results: SecretRotationWatchResult[];
}

interface SecretURIArg {
  uri: string;
}

interface SecretURIArgs {
  args: SecretURIArg[];
}

interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

interface SecretValueResults {
  results: SecretValueResult[];
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
  data?: AdditionalProperties;
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
  data: AdditionalProperties;
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
    GetLatestSecretsRevisionInfo returns the latest secret revisions for the specified secrets.
  */
  getLatestSecretsRevisionInfo(params: GetSecretConsumerInfoArgs): Promise<SecretConsumerInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetLatestSecretsRevisionInfo',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetSecretIds returns the caller's secret ids and their labels.
  */
  getSecretIds(): Promise<SecretIdResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetSecretIds',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetSecretValues returns the secret values for the specified secrets.
  */
  getSecretValues(params: GetSecretValueArgs): Promise<SecretValueResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'GetSecretValues',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveSecrets removes the specified secrets.
  */
  removeSecrets(params: SecretURIArgs): Promise<ErrorResults> {
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
    WatchSecretsChanges sets up a watcher to notify of changes to secret revisions for the specified consumers.
  */
  watchSecretsChanges(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SecretsManager',
        request: 'WatchSecretsChanges',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchSecretsRotationChanges sets up a watcher to notify of changes to secret rotation config.
  */
  watchSecretsRotationChanges(params: Entities): Promise<SecretRotationWatchResults> {
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
