/**
  Juju ImageMetadata version 3.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated on Tue, 04 Oct 2022 16:14:09 GMT using
  the Juju schema from  Juju juju-3.0-beta4 at the git SHA a13ab81a.
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
