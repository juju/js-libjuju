import { GenericFacade } from "../../types";
import MigrationMinionV1 from "./MigrationMinionV1.js";

export * as MigrationMinionV1 from "./MigrationMinionV1.js";

const MigrationMinion: GenericFacade = {
  name: "MigrationMinion",
  versions: [MigrationMinionV1],
};

export default MigrationMinion;
