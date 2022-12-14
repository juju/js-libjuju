import { GenericFacade } from "../../types";
import RelationStatusWatcherV1 from "./RelationStatusWatcherV1.js";

export * as RelationStatusWatcherV1 from "./RelationStatusWatcherV1.js";

const RelationStatusWatcher: GenericFacade = {
  name: "RelationStatusWatcher",
  versions: [RelationStatusWatcherV1],
};

export default RelationStatusWatcher;
