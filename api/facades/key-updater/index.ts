import { GenericFacade } from "../../types";
import KeyUpdaterV1 from "./KeyUpdaterV1.js";

export * as KeyUpdaterV1 from "./KeyUpdaterV1.js";

const KeyUpdater: GenericFacade = {
  name: "KeyUpdater",
  versions: [KeyUpdaterV1],
};

export default KeyUpdater;
