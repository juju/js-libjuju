import { GenericFacade } from "../../types";
import RelationUnitsWatcherV1 from "./RelationUnitsWatcherV1.js";

export * as RelationUnitsWatcherV1 from "./RelationUnitsWatcherV1.js";

const RelationUnitsWatcher: GenericFacade = {
  name: "RelationUnitsWatcher",
  versions: [RelationUnitsWatcherV1],
};

export default RelationUnitsWatcher;
