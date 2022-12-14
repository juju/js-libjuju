import { GenericFacade } from "../../types";
import ExternalControllerUpdaterV1 from "./ExternalControllerUpdaterV1.js";

export * as ExternalControllerUpdaterV1 from "./ExternalControllerUpdaterV1.js";

const ExternalControllerUpdater: GenericFacade = {
  name: "ExternalControllerUpdater",
  versions: [ExternalControllerUpdaterV1],
};

export default ExternalControllerUpdater;
