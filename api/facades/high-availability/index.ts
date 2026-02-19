import { GenericFacade } from "../../types";
import HighAvailabilityV2 from "./HighAvailabilityV2.js";
import HighAvailabilityV3 from "./HighAvailabilityV3.js";

export * as HighAvailabilityV2 from "./HighAvailabilityV2.js";
export * as HighAvailabilityV3 from "./HighAvailabilityV3.js";

const HighAvailability: GenericFacade = {
  name: "HighAvailability",
  versions: [HighAvailabilityV2, HighAvailabilityV3],
};

export default HighAvailability;
