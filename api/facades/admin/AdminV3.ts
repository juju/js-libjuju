/**
  Juju Admin version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.3 at the git SHA 65fa4c1ee5.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface Address {
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface AuthUserInfo {
  "controller-access": string;
  credentials?: string;
  "display-name": string;
  identity: string;
  "last-connection"?: string;
  "model-access": string;
}

export interface FacadeVersions {
  name: string;
  versions: number[];
}

export interface HostPort {
  Address: Address;
  cidr?: string;
  "config-type"?: string;
  "is-secondary"?: boolean;
  port: number;
  scope: string;
  "space-id"?: string;
  "space-name"?: string;
  type: string;
  value: string;
}

export interface LoginRequest {
  "auth-tag": string;
  "bakery-version"?: number;
  "cli-args"?: string;
  "client-version"?: string;
  credentials: string;
  macaroons: Macaroon[][];
  nonce: string;
  token?: string;
  "user-data": string;
}

export interface LoginResult {
  "bakery-discharge-required"?: Macaroon;
  "controller-tag"?: string;
  "discharge-required"?: Macaroon;
  "discharge-required-error"?: string;
  facades?: FacadeVersions[];
  "model-tag"?: string;
  "public-dns-name"?: string;
  "server-version"?: string;
  servers?: HostPort[][];
  "user-info"?: AuthUserInfo;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface RedirectInfoResult {
  "ca-cert": string;
  servers: HostPort[][];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  admin is the only object that unlogged-in clients can access. It holds any
  methods that are needed to log in.
*/
class AdminV3 implements Facade {
  static NAME = "Admin";
  static VERSION = 3;

  NAME = "Admin";
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
    Login logs in with the provided credentials.  All subsequent requests on the
    connection will act as the authenticated user.
  */
  login(params: LoginRequest): Promise<LoginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Admin",
        request: "Login",
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
  redirectInfo(params: any): Promise<RedirectInfoResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Admin",
        request: "RedirectInfo",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AdminV3;
