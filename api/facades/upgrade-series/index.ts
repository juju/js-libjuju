import { GenericFacade } from "../../types";
import UpgradeSeriesV3 from "./UpgradeSeriesV3.js";

export * as UpgradeSeriesV3 from "./UpgradeSeriesV3.js";

const UpgradeSeries: GenericFacade = {
  name: "UpgradeSeries",
  versions: [UpgradeSeriesV3],
};

export default UpgradeSeries;
