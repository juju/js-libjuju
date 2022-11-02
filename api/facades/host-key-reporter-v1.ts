/**
  Juju HostKeyReporter version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 01 Nov 2022 13:55:02 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
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

interface SSHHostKeySet {
  'entity-keys': SSHHostKeys[];
}

interface SSHHostKeys {
  'public-keys': string[];
  tag: string;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the API required by the hostkeyreporter worker.
*/
class HostKeyReporterV1 {
  static NAME: string = 'HostKeyReporter';
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
    ReportKeys sets the SSH host keys for one or more entities.
  */
  reportKeys(params: SSHHostKeySet): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'HostKeyReporter',
        request: 'ReportKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default HostKeyReporterV1;
