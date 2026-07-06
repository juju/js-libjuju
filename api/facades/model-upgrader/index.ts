import { GenericFacade } from "../../types";
import ModelUpgraderV1 from "./ModelUpgraderV1.js";
import ModelUpgraderV2 from "./ModelUpgraderV2.js";

export * as ModelUpgraderV1 from "./ModelUpgraderV1.js";
export * as ModelUpgraderV2 from "./ModelUpgraderV2.js";

const ModelUpgrader: GenericFacade = {
  name: "ModelUpgrader",
  versions: [ModelUpgraderV1, ModelUpgraderV2],
};

export default ModelUpgrader;
