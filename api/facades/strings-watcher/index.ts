import { GenericFacade } from "../../types";
import StringsWatcherV1 from "./StringsWatcherV1.js";

export * as StringsWatcherV1 from "./StringsWatcherV1.js";

const StringsWatcher: GenericFacade = {
  name: "StringsWatcher",
  versions: [StringsWatcherV1],
};

export default StringsWatcher;
