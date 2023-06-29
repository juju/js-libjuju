/**
  Juju ImageMetadata version 3.
  This facade is available on:
    Controller-machine-agent

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

/**
  API is a dummy struct for compatibility.
*/
class ImageMetadataV3 implements Facade {
  static NAME = "ImageMetadata";
  static VERSION = 3;

  NAME = "ImageMetadata";
  VERSION = 3;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    UpdateFromPublishedImages is now a no-op.
    It is retained for compatibility.
  */
  updateFromPublishedImages(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ImageMetadata",
        request: "UpdateFromPublishedImages",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ImageMetadataV3;
