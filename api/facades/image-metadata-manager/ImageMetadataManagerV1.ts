/**
  Juju ImageMetadataManager version 1.

  NOTE: This file was generated using the Juju schema
  from Juju 4.0.10 at the git SHA b08ad63.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface CloudImageMetadata {
  arch: string;
  "image-id": string;
  priority: number;
  region: string;
  "root-storage-size"?: number;
  "root-storage-type"?: string;
  source: string;
  stream?: string;
  version: string;
  "virt-type"?: string;
}

export interface CloudImageMetadataList {
  metadata?: CloudImageMetadata[];
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

export interface ImageMetadataFilter {
  arches?: string[];
  region?: string;
  "root-storage-type"?: string;
  stream?: string;
  versions?: string[];
  "virt-type"?: string;
}

export interface ListCloudImageMetadataResult {
  result: CloudImageMetadata[];
}

export interface MetadataImageIds {
  "image-ids": string[];
}

export interface MetadataSaveParams {
  metadata?: CloudImageMetadataList[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

class ImageMetadataManagerV1 implements Facade {
  static NAME = "ImageMetadataManager";
  static VERSION = 1;

  NAME = "ImageMetadataManager";
  VERSION = 1;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  delete(params: MetadataImageIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageMetadataManager",
        request: "Delete",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  list(params: ImageMetadataFilter): Promise<ListCloudImageMetadataResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageMetadataManager",
        request: "List",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  save(params: MetadataSaveParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageMetadataManager",
        request: "Save",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ImageMetadataManagerV1;
