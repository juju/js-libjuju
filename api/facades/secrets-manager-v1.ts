/**
  Juju SecretsManager version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface CreateSecretArg {
  data?: AdditionalProperties;
  description?: string;
  params?: AdditionalProperties;
  path: string;
  'rotate-interval': number;
  status: string;
  tags?: AdditionalProperties;
  type: string;
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

interface GetSecretArg {
  id: string;
  url: string;
}

interface GetSecretArgs {
  args: GetSecretArg[];
}

interface SecretRotatedArg {
  url: string;
  when: string;
}

interface SecretRotatedArgs {
  args: SecretRotatedArg[];
}

interface SecretRotationChange {
  'last-rotate-time': string;
  'rotate-interval': number;
  'secret-id': number;
  url: string;
}

interface SecretRotationWatchResult {
  changes: SecretRotationChange[];
  error?: Error;
  'watcher-id': string;
}

interface SecretRotationWatchResults {
  results: SecretRotationWatchResult[];
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

interface UpdateSecretArg {
  data?: AdditionalProperties;
  description?: string;
  params?: AdditionalProperties;
  'rotate-interval': number;
  status: string;
  tags?: AdditionalProperties;
  url: string;
}

interface UpdateSecretArgs {
  args: UpdateSecretArg[];
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
    GetSecretValues returns the secret values for the specified secrets.
  */
  getSecretValues(params: GetSecretArgs): Promise<SecretValueResults> {
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
  updateSecrets(params: UpdateSecretArgs): Promise<StringResults> {
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
