import { GenericFacade } from "../../types";
import MigrationTargetV1 from "./MigrationTargetV1.js";

export * as MigrationTargetV1 from "./MigrationTargetV1.js";

const MigrationTarget: GenericFacade = {
  name: "MigrationTarget",
  versions: [MigrationTargetV1],
};

export default MigrationTarget;
