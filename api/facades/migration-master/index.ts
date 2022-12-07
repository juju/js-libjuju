import { GenericFacade } from "../../types";
export * as MigrationMasterV2 from "./MigrationMasterV2";
export * as MigrationMasterV3 from "./MigrationMasterV3";

const MigrationMaster: GenericFacade = { name: "MigrationMaster" };
export default MigrationMaster;
