import { GenericFacade } from "../../types";
import SSHClientV2 from "./SSHClientV2.js";
import SSHClientV3 from "./SSHClientV3.js";
import SSHClientV4 from "./SSHClientV4.js";

export * as SSHClientV2 from "./SSHClientV2.js";
export * as SSHClientV3 from "./SSHClientV3.js";
export * as SSHClientV4 from "./SSHClientV4.js";

const SSHClient: GenericFacade = {
  name: "SSHClient",
  versions: [SSHClientV2, SSHClientV3, SSHClientV4],
};

export default SSHClient;
