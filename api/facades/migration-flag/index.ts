import { GenericFacade } from "../../types";
import MigrationFlagV1 from "./MigrationFlagV1.js";

export * as MigrationFlagV1 from "./MigrationFlagV1.js";

const MigrationFlag: GenericFacade = {
  name: "MigrationFlag",
  versions: [MigrationFlagV1],
};

export default MigrationFlag;
