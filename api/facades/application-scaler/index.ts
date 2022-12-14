import { GenericFacade } from "../../types";
import ApplicationScalerV1 from "./ApplicationScalerV1.js";

export * as ApplicationScalerV1 from "./ApplicationScalerV1.js";

const ApplicationScaler: GenericFacade = {
  name: "ApplicationScaler",
  versions: [ApplicationScalerV1],
};

export default ApplicationScaler;
