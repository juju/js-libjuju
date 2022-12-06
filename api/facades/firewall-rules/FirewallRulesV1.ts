/**
  Juju FirewallRules version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
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

export interface FirewallRule {
  "known-service": string;
  "whitelist-cidrs"?: string[];
}

export interface FirewallRuleArgs {
  args: FirewallRule[];
}

export interface ListFirewallRulesResults {
  Rules: FirewallRule[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the firewallrules facade APIs for v1.
*/
class FirewallRulesV1 {
  static NAME = "FirewallRules";
  static VERSION = 1;

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    ListFirewallRules returns all the firewall rules.
  */
  listFirewallRules(params: any): Promise<ListFirewallRulesResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FirewallRules",
        request: "ListFirewallRules",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetFirewallRules creates or updates the specified firewall rules.
  */
  setFirewallRules(params: FirewallRuleArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "FirewallRules",
        request: "SetFirewallRules",
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default FirewallRulesV1;
