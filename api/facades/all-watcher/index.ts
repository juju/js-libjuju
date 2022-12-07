import { GenericFacade } from "../../types";
import AllWatcherV1 from "./AllWatcherV1.js";
import AllWatcherV2 from "./AllWatcherV2.js";
import AllWatcherV3 from "./AllWatcherV3.js";

export * as AllWatcherV1 from "./AllWatcherV1.js";
export * as AllWatcherV2 from "./AllWatcherV2.js";
export * as AllWatcherV3 from "./AllWatcherV3.js";

const AllWatcher: GenericFacade = {
  name: "AllWatcher",
  versions: [AllWatcherV1, AllWatcherV2, AllWatcherV3],
};

export default AllWatcher;
