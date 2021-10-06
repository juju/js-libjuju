/**
  Juju Secrets version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ListSecretResult {
  'create-time': string;
  description?: string;
  int: number;
  path: string;
  provider: string;
  'provider-id'?: string;
  revision: number;
  'rotate-interval': number;
  status: string;
  tags?: AdditionalProperties;
  'update-time': string;
  url: string;
  value?: SecretValueResult;
  version: number;
}

interface ListSecretResults {
  results: ListSecretResult[];
}

interface ListSecretsArgs {
  'show-secrets': boolean;
}

interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsAPI is the backend for the Secrets facade.
*/
class SecretsV1 {
  static NAME: string = 'Secrets';
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
    ListSecrets lists available secrets.
  */
  listSecrets(params: ListSecretsArgs): Promise<ListSecretResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Secrets',
        request: 'ListSecrets',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SecretsV1;
