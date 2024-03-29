/**
  Juju Annotations version 2.
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

export interface AnnotationsGetResult {
  annotations: Record<string, string>;
  entity: string;
  error?: ErrorResult;
}

export interface AnnotationsGetResults {
  results: AnnotationsGetResult[];
}

export interface AnnotationsSet {
  annotations: EntityAnnotations[];
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityAnnotations {
  annotations: Record<string, string>;
  entity: string;
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

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the service interface and is the concrete
  implementation of the api end point.
*/
class AnnotationsV2 implements Facade {
  static NAME = "Annotations";
  static VERSION = 2;

  NAME = "Annotations";
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
    Get returns annotations for given entities.
    If annotations cannot be retrieved for a given entity, an error is returned.
    Each entity is treated independently and, hence, will fail or succeed independently.
  */
  get(params: Entities): Promise<AnnotationsGetResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Annotations",
        request: "Get",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Set stores annotations for given entities
  */
  set(params: AnnotationsSet): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Annotations",
        request: "Set",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AnnotationsV2;
