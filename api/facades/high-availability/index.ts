import { GenericFacade } from "../../types";
import HighAvailabilityV2 from "./HighAvailabilityV2.js";

export * as HighAvailabilityV2 from "./HighAvailabilityV2.js";

const HighAvailability: GenericFacade = {
  name: "HighAvailability",
  versions: [HighAvailabilityV2],
};

export default HighAvailability;
