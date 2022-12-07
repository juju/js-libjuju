import { GenericFacade } from "../../types";
import MetricsDebugV2 from "./MetricsDebugV2.js";

export * as MetricsDebugV2 from "./MetricsDebugV2.js";

const MetricsDebug: GenericFacade = {
  name: "MetricsDebug",
  versions: [MetricsDebugV2],
};

export default MetricsDebug;
