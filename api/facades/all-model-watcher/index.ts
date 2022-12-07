import { GenericFacade } from "../../types";
import AllModelWatcherV2 from "./AllModelWatcherV2.js";
import AllModelWatcherV3 from "./AllModelWatcherV3.js";
import AllModelWatcherV4 from "./AllModelWatcherV4.js";

export * as AllModelWatcherV2 from "./AllModelWatcherV2.js";
export * as AllModelWatcherV3 from "./AllModelWatcherV3.js";
export * as AllModelWatcherV4 from "./AllModelWatcherV4.js";

const AllModelWatcher: GenericFacade = {
  name: "AllModelWatcher",
  versions: [AllModelWatcherV2, AllModelWatcherV3, AllModelWatcherV4],
};

export default AllModelWatcher;
