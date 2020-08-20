/**
  Juju ImageManager version 2.
  This facade is available on:
    Models

  NOTE: This file was generated on Wed, 19 Aug 2020 16:08:07 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA ff690fd0c2.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


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

interface ImageFilterParams {
  images: ImageSpec[];
}

interface ImageMetadata {
  arch: string;
  created: string;
  kind: string;
  series: string;
  url: string;
}

interface ImageSpec {
  arch: string;
  kind: string;
  series: string;
}

interface ListImageResult {
  result: ImageMetadata[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  ImageManagerAPI implements the ImageManager interface and is the concrete
  implementation of the api end point.
*/
class ImageManagerV2 {
  static NAME: string = 'ImageManager';
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
    DeleteImages deletes the images matching the specified filter.
  */
  deleteImages(params: ImageFilterParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ImageManager',
        request: 'DeleteImages',
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
        type: 'ImageManager',
        request: 'ListImages',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ImageManagerV2;
