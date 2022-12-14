import { GenericFacade } from "../../types";
import ClientV2 from "./ClientV2.js";
import ClientV3 from "./ClientV3.js";
import ClientV5 from "./ClientV5.js";
import ClientV6 from "./ClientV6.js";

export * as ClientV2 from "./ClientV2.js";
export * as ClientV3 from "./ClientV3.js";
export * as ClientV5 from "./ClientV5.js";
export * as ClientV6 from "./ClientV6.js";

const Client: GenericFacade = {
  name: "Client",
  versions: [ClientV2, ClientV3, ClientV5, ClientV6],
};

export default Client;
