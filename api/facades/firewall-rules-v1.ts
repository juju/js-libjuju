/**
  Juju FirewallRules version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Tue, 25 Aug 2020 18:00:56 GMT using
  the Juju schema from  Juju 2.8.2 at the git SHA 516c1904ce.
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

interface FirewallRule {
  'known-service': string;
  'whitelist-cidrs'?: string[];
}

interface FirewallRuleArgs {
  args: FirewallRule[];
}

interface ListFirewallRulesResults {
  Rules: FirewallRule[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides the firewallrules facade APIs for v1.
*/
class FirewallRulesV1 {
  static NAME: string = 'FirewallRules';
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
    ListFirewallRules returns all the firewall rules.
  */
  listFirewallRules(): Promise<ListFirewallRulesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'FirewallRules',
        request: 'ListFirewallRules',
        version: 1,
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
        type: 'FirewallRules',
        request: 'SetFirewallRules',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default FirewallRulesV1;
