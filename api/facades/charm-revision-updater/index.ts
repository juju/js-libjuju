import { GenericFacade } from "../../types";
import CharmRevisionUpdaterV2 from "./CharmRevisionUpdaterV2.js";

export * as CharmRevisionUpdaterV2 from "./CharmRevisionUpdaterV2.js";

const CharmRevisionUpdater: GenericFacade = {
  name: "CharmRevisionUpdater",
  versions: [CharmRevisionUpdaterV2],
};

export default CharmRevisionUpdater;
