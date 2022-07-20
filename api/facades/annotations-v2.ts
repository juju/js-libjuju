/**
  Juju Annotations version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 20 Jul 2022 18:17:45 GMT using
  the Juju schema from  Juju 3.0-beta3 at the git SHA 1ec5e6d156.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AnnotationsGetResult {
  annotations: AdditionalProperties;
  entity: string;
  error?: ErrorResult;
}

interface AnnotationsGetResults {
  results: AnnotationsGetResult[];
}

interface AnnotationsSet {
  annotations: EntityAnnotations[];
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface EntityAnnotations {
  annotations: AdditionalProperties;
  entity: string;
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

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API implements the service interface and is the concrete
  implementation of the api end point.
*/
class AnnotationsV2 {
  static NAME: string = 'Annotations';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
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
        type: 'Annotations',
        request: 'Get',
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
        type: 'Annotations',
        request: 'Set',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AnnotationsV2;
