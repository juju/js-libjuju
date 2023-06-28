/**
  Juju HostKeyReporter version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
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
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface SSHHostKeySet {
  "entity-keys": SSHHostKeys[];
}

export interface SSHHostKeys {
  "public-keys": string[];
  tag: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the API required by the hostkeyreporter worker.
*/
class HostKeyReporterV1 implements Facade {
  static NAME = "HostKeyReporter";
  static VERSION = 1;

  NAME = "HostKeyReporter";
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
    ReportKeys sets the SSH host keys for one or more entities.
  */
  reportKeys(params: SSHHostKeySet): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "HostKeyReporter",
        request: "ReportKeys",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default HostKeyReporterV1;
