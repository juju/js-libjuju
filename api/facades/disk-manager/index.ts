import { GenericFacade } from "../../types";
import DiskManagerV2 from "./DiskManagerV2.js";

export * as DiskManagerV2 from "./DiskManagerV2.js";

const DiskManager: GenericFacade = {
  name: "DiskManager",
  versions: [DiskManagerV2],
};

export default DiskManager;
