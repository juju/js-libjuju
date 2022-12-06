/**
  Juju Secrets version 1.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
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

export interface ListSecretsArgs {
  filter: SecretsFilter;
  "show-secrets": boolean;
}

export interface SecretRevision {
  "create-time"?: string;
  "expire-time"?: string;
  "provider-id"?: string;
  revision: number;
  "update-time"?: string;
}

export interface SecretValueResult {
  data: AdditionalProperties;
  error: Error;
}

export interface SecretsFilter {
  "owner-tag": string;
  revision: number;
  uri: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsAPI is the backend for the Secrets facade.
*/
class SecretsV1 {
  static NAME = "Secrets";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
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
        type: "Secrets",
        request: "ListSecrets",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default SecretsV1;
