/**
  Juju ImageMetadata version 3.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";



/**
  API is a dummy struct for compatibility.
*/
class ImageMetadataV3 {
  static NAME: string = 'ImageMetadata';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    UpdateFromPublishedImages is now a no-op.
    It is retained for compatibility.
  */
  updateFromPublishedImages(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ImageMetadata',
        request: 'UpdateFromPublishedImages',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ImageMetadataV3;
