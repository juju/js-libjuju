/**
  Juju UserManager version 3.
  This facade is available on:
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 3.2.1 at the git SHA 06eb3f6c7c.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddUser {
  "display-name": string;
  password?: string;
  username: string;
}

export interface AddUserResult {
  error: Error;
  "secret-key": number[];
  tag: string;
}

export interface AddUserResults {
  results: AddUserResult[];
}

export interface AddUsers {
  users: AddUser[];
}

export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
}

export interface EntityPassword {
  password: string;
  tag: string;
}

export interface EntityPasswords {
  changes: EntityPassword[];
}

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

export interface ModelUserInfo {
  access: string;
  "display-name": string;
  "last-connection": string;
  "model-tag": string;
  user: string;
}

export interface ModelUserInfoResult {
  error: Error;
  result: ModelUserInfo;
}

export interface ModelUserInfoResults {
  results: ModelUserInfoResult[];
}

export interface UserInfo {
  access: string;
  "created-by": string;
  "date-created": string;
  disabled: boolean;
  "display-name": string;
  "last-connection"?: string;
  username: string;
}

export interface UserInfoRequest {
  entities: Entity[];
  "include-disabled": boolean;
}

export interface UserInfoResult {
  error: Error;
  result: UserInfo;
}

export interface UserInfoResults {
  results: UserInfoResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  UserManagerAPI implements the user manager interface and is the concrete
  implementation of the api end point.
*/
class UserManagerV3 implements Facade {
  static NAME = "UserManager";
  static VERSION = 3;

  NAME = "UserManager";
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
    AddUser adds a user with a username, and either a password or
    a randomly generated secret key which will be returned.
  */
  addUser(params: AddUsers): Promise<AddUserResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "AddUser",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DisableUser disables one or more users.  If the user is already disabled,
    the action is considered a success.
  */
  disableUser(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "DisableUser",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    EnableUser enables one or more users.  If the user is already enabled,
    the action is considered a success.
  */
  enableUser(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "EnableUser",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModelUserInfo returns information on all users in the model.
  */
  modelUserInfo(params: Entities): Promise<ModelUserInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "ModelUserInfo",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoveUser permanently removes a user from the current controller for each
    entity provided. While the user is permanently removed we keep it's
    information around for auditing purposes.
    TODO(redir): Add information about getting deleted user information when we
    add that capability.
  */
  removeUser(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "RemoveUser",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ResetPassword resets password for supplied users by
    invalidating current passwords (if any) and generating
    new random secret keys which will be returned.
    Users cannot reset their own password.
  */
  resetPassword(params: Entities): Promise<AddUserResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "ResetPassword",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    SetPassword changes the stored password for the specified users.
  */
  setPassword(params: EntityPasswords): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "SetPassword",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    UserInfo returns information on a user.
  */
  userInfo(params: UserInfoRequest): Promise<UserInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "UserManager",
        request: "UserInfo",
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default UserManagerV3;
