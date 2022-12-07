import { GenericFacade } from "../../types";
import MetricsAdderV2 from "./MetricsAdderV2.js";

export * as MetricsAdderV2 from "./MetricsAdderV2.js";

const MetricsAdder: GenericFacade = {
  name: "MetricsAdder",
  versions: [MetricsAdderV2],
};

export default MetricsAdder;
