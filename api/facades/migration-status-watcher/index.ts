import { GenericFacade } from "../../types";
import MigrationStatusWatcherV1 from "./MigrationStatusWatcherV1.js";

export * as MigrationStatusWatcherV1 from "./MigrationStatusWatcherV1.js";

const MigrationStatusWatcher: GenericFacade = {
  name: "MigrationStatusWatcher",
  versions: [MigrationStatusWatcherV1],
};

export default MigrationStatusWatcher;
