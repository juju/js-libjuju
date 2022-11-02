/**
  Juju Secrets version 1.
  This facade is available on:
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
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

interface ListSecretsArgs {
  filter: SecretsFilter;
  'show-secrets': boolean;
}

interface SecretRevision {
  'create-time'?: string;
  'expire-time'?: string;
  'provider-id'?: string;
  revision: number;
  'update-time'?: string;
}

interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

interface SecretsFilter {
  'owner-tag': string;
  revision: number;
  uri: string;
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
