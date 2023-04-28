import { GenericFacade } from "../../types";
import MigrationTargetV1 from "./MigrationTargetV1.js";
import MigrationTargetV2 from "./MigrationTargetV2.js";

export * as MigrationTargetV1 from "./MigrationTargetV1.js";
export * as MigrationTargetV2 from "./MigrationTargetV2.js";

const MigrationTarget: GenericFacade = {
  name: "MigrationTarget",
  versions: [MigrationTargetV1, MigrationTargetV2],
};

export default MigrationTarget;
