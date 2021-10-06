/**
  Juju ProxyUpdater version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface Entities {
  entities: Entity[];
}

interface Entity {
  tag: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface ProxyConfig {
  ftp: string;
  http: string;
  https: string;
  'no-proxy': string;
}

interface ProxyConfigResult {
  'apt-mirror'?: string;
  'apt-proxy-settings'?: ProxyConfig;
  error?: Error;
  'juju-proxy-settings': ProxyConfig;
  'legacy-proxy-settings': ProxyConfig;
  'snap-proxy-settings'?: ProxyConfig;
  'snap-store-assertions'?: string;
  'snap-store-id'?: string;
  'snap-store-proxy-url'?: string;
}

interface ProxyConfigResults {
  results: ProxyConfigResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  APIv2 provides the ProxyUpdater version 2 facade.
*/
class ProxyUpdaterV2 {
  static NAME: string = 'ProxyUpdater';
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
    ProxyConfig returns the proxy settings for the current model.
  */
  proxyConfig(params: Entities): Promise<ProxyConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ProxyUpdater',
        request: 'ProxyConfig',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForProxyConfigAndAPIHostPortChanges watches for changes to the proxy and api host port settings.
  */
  watchForProxyConfigAndAPIHostPortChanges(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ProxyUpdater',
        request: 'WatchForProxyConfigAndAPIHostPortChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ProxyUpdaterV2;
