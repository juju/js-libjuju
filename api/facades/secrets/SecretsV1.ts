/**
  Juju Secrets version 1.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2 at the git SHA 3a098707a1.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
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
  "owner-tag"?: string;
  revision?: number;
  uri?: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SecretsAPI is the backend for the Secrets facade.
*/
class SecretsV1 implements Facade {
  static NAME = "Secrets";
  static VERSION = 1;

  NAME = "Secrets";
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
