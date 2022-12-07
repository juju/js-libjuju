import { GenericFacade } from "../../types";
import MetricsManagerV1 from "./MetricsManagerV1.js";

export * as MetricsManagerV1 from "./MetricsManagerV1.js";

const MetricsManager: GenericFacade = {
  name: "MetricsManager",
  versions: [MetricsManagerV1],
};

export default MetricsManager;
