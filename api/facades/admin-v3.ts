/**
  Juju Admin version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated on Wed, 09 Nov 2022 23:24:18 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


export interface Address {
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

export interface AuthUserInfo {
  'controller-access': string;
  credentials?: string;
  'display-name': string;
  identity: string;
  'last-connection'?: string;
  'model-access': string;
}

export interface FacadeVersions {
  name: string;
  versions: number[];
}

export interface HostPort {
  Address: Address;
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

export interface LoginRequest {
  'auth-tag': string;
  'bakery-version'?: number;
  'cli-args'?: string;
  'client-version'?: string;
  credentials: string;
  macaroons: Macaroon[][];
  nonce: string;
  'user-data': string;
}

export interface LoginResult {
  'bakery-discharge-required': Macaroon;
  'controller-tag': string;
  'discharge-required': Macaroon;
  'discharge-required-error': string;
  facades: FacadeVersions[];
  'model-tag': string;
  'public-dns-name': string;
  'server-version': string;
  servers: HostPort[][];
  'user-info': AuthUserInfo;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface RedirectInfoResult {
  'ca-cert': string;
  servers: HostPort[][];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  admin is the only object that unlogged-in clients can access. It holds any
  methods that are needed to log in.
*/
class AdminV3 {
  static NAME: string = 'Admin';
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
    Login logs in with the provided credentials.  All subsequent requests on the
    connection will act as the authenticated user.
  */
  login(params: LoginRequest): Promise<LoginResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Admin',
        request: 'Login',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RedirectInfo returns redirected host information for the model.
    In Juju it always returns an error because the Juju controller
    does not multiplex controllers.
  */
  redirectInfo(): Promise<RedirectInfoResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Admin',
        request: 'RedirectInfo',
        version: 3,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default AdminV3;
