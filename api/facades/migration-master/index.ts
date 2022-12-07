import { GenericFacade } from "../../types";
import MigrationMasterV2 from "./MigrationMasterV2.js";
import MigrationMasterV3 from "./MigrationMasterV3.js";

export * as MigrationMasterV2 from "./MigrationMasterV2.js";
export * as MigrationMasterV3 from "./MigrationMasterV3.js";

const MigrationMaster: GenericFacade = {
  name: "MigrationMaster",
  versions: [MigrationMasterV2, MigrationMasterV3],
};

export default MigrationMaster;
