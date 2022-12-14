import { GenericFacade } from "../../types";
import EntityWatcherV2 from "./EntityWatcherV2.js";

export * as EntityWatcherV2 from "./EntityWatcherV2.js";

const EntityWatcher: GenericFacade = {
  name: "EntityWatcher",
  versions: [EntityWatcherV2],
};

export default EntityWatcher;
