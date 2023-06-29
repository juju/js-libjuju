/**
  Juju ProxyUpdater version 2.
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

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface ProxyConfig {
  ftp: string;
  http: string;
  https: string;
  "no-proxy": string;
}

export interface ProxyConfigResult {
  "apt-mirror"?: string;
  "apt-proxy-settings"?: ProxyConfig;
  error?: Error;
  "juju-proxy-settings": ProxyConfig;
  "legacy-proxy-settings": ProxyConfig;
  "snap-proxy-settings"?: ProxyConfig;
  "snap-store-assertions"?: string;
  "snap-store-id"?: string;
  "snap-store-proxy-url"?: string;
}

export interface ProxyConfigResults {
  results: ProxyConfigResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the ProxyUpdater version 2 facade.
*/
class ProxyUpdaterV2 implements Facade {
  static NAME = "ProxyUpdater";
  static VERSION = 2;

  NAME = "ProxyUpdater";
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
    ProxyConfig returns the proxy settings for the current model.
  */
  proxyConfig(params: Entities): Promise<ProxyConfigResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ProxyUpdater",
        request: "ProxyConfig",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    WatchForProxyConfigAndAPIHostPortChanges watches for changes to the proxy and api host port settings.
  */
  watchForProxyConfigAndAPIHostPortChanges(
    params: Entities
  ): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ProxyUpdater",
        request: "WatchForProxyConfigAndAPIHostPortChanges",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ProxyUpdaterV2;
