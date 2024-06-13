/**
  Juju Admin version 4.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers
    Models
*/

import type { JujuRequest } from "../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../client.js";
import AdminV3, { LoginResult } from "../facades/admin/AdminV3.js";

/**
  admin is the only object that unlogged-in clients can access. It holds any
  methods that are needed to log in.
*/
class AdminV4 extends AdminV3 {
  static NAME = "Admin";
  static VERSION = 4;

  NAME = "Admin";
  VERSION = 4;

  constructor(transport: Transport, info: ConnectionInfo) {
    super(transport, info);
  }
  /**
    LoginWithSessionCookie logs in if the session cookie exists when the
    websocket connection is made.  All subsequent requests on the
    connection will act as the authenticated user.
  */
  loginWithSessionCookie(): Promise<LoginResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "Admin",
        request: "LoginWithSessionCookie",
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default AdminV4;
