import { GenericFacade } from "../../types";
import ModelUpgraderV1 from "./ModelUpgraderV1.js";

export * as ModelUpgraderV1 from "./ModelUpgraderV1.js";

const ModelUpgrader: GenericFacade = {
  name: "ModelUpgrader",
  versions: [ModelUpgraderV1],
};

export default ModelUpgrader;
