import { GenericFacade } from "../../types";
import ProxyUpdaterV2 from "./ProxyUpdaterV2.js";

export * as ProxyUpdaterV2 from "./ProxyUpdaterV2.js";

const ProxyUpdater: GenericFacade = {
  name: "ProxyUpdater",
  versions: [ProxyUpdaterV2],
};

export default ProxyUpdater;
