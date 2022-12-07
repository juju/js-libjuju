import { GenericFacade } from "../../types";
import EnvironUpgraderV1 from "./EnvironUpgraderV1.js";

export * as EnvironUpgraderV1 from "./EnvironUpgraderV1.js";

const EnvironUpgrader: GenericFacade = {
  name: "EnvironUpgrader",
  versions: [EnvironUpgraderV1],
};

export default EnvironUpgrader;
