import { GenericFacade } from "../../types";
import ModelSummaryWatcherV1 from "./ModelSummaryWatcherV1.js";

export * as ModelSummaryWatcherV1 from "./ModelSummaryWatcherV1.js";

const ModelSummaryWatcher: GenericFacade = {
  name: "ModelSummaryWatcher",
  versions: [ModelSummaryWatcherV1],
};

export default ModelSummaryWatcher;
