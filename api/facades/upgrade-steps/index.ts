import { GenericFacade } from "../../types";
import UpgradeStepsV2 from "./UpgradeStepsV2.js";

export * as UpgradeStepsV2 from "./UpgradeStepsV2.js";

const UpgradeSteps: GenericFacade = {
  name: "UpgradeSteps",
  versions: [UpgradeStepsV2],
};

export default UpgradeSteps;
