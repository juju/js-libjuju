/**
  Juju ImageMetadataManager version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface CloudImageMetadata {
  arch: string;
  'image-id': string;
  priority: number;
  region: string;
  'root-storage-size'?: number;
  'root-storage-type'?: string;
  source: string;
  stream?: string;
  version: string;
  'virt-type'?: string;
}

export interface CloudImageMetadataList {
  metadata: CloudImageMetadata[];
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

export interface ImageMetadataFilter {
  arches: string[];
  region: string;
  'root-storage-type': string;
  stream: string;
  versions: string[];
  'virt-type': string;
}

export interface ListCloudImageMetadataResult {
  result: CloudImageMetadata[];
}

export interface MetadataImageIds {
  'image-ids': string[];
}

export interface MetadataSaveParams {
  metadata: CloudImageMetadataList[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the concrete implementation of the api end point
  for loud image metadata manipulations.
*/
class ImageMetadataManagerV1 {
  static NAME: string = 'ImageMetadataManager';
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
    Delete deletes cloud image metadata for given image ids.
    It supports bulk calls.
  */
  delete(params: MetadataImageIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ImageMetadataManager',
        request: 'Delete',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    List returns all found cloud image metadata that satisfy
    given filter.
    Returned list contains metadata ordered by priority.
  */
  list(params: ImageMetadataFilter): Promise<ListCloudImageMetadataResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ImageMetadataManager',
        request: 'List',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Save stores given cloud image metadata.
    It supports bulk calls.
  */
  save(params: MetadataSaveParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ImageMetadataManager',
        request: 'Save',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ImageMetadataManagerV1;
