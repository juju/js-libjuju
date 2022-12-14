import { GenericFacade } from "../../types";
import CAASOperatorUpgraderV1 from "./CAASOperatorUpgraderV1.js";

export * as CAASOperatorUpgraderV1 from "./CAASOperatorUpgraderV1.js";

const CAASOperatorUpgrader: GenericFacade = {
  name: "CAASOperatorUpgrader",
  versions: [CAASOperatorUpgraderV1],
};

export default CAASOperatorUpgrader;
