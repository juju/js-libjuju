/**
  Juju ImageManager version 2.
  This facade is available on:
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0-beta4 at the git SHA a13ab81a.
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

export interface ErrorResult {
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ImageFilterParams {
  images: ImageSpec[];
}

export interface ImageMetadata {
  arch: string;
  created: string;
  kind: string;
  series: string;
  url: string;
}

export interface ImageSpec {
  arch: string;
  kind: string;
  series: string;
}

export interface ListImageResult {
  result: ImageMetadata[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ImageManagerAPI implements the ImageManager interface and is the concrete
  implementation of the api end point.
*/
class ImageManagerV2 implements Facade {
  static NAME = "ImageManager";
  static VERSION = 2;

  NAME = "ImageManager";
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
    DeleteImages deletes the images matching the specified filter.
  */
  deleteImages(params: ImageFilterParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageManager",
        request: "DeleteImages",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListImages returns images matching the specified filter.
  */
  listImages(params: ImageFilterParams): Promise<ListImageResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageManager",
        request: "ListImages",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ImageManagerV2;
