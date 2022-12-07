import { GenericFacade } from "../../types";
import CloudV1 from "./CloudV1.js";
import CloudV2 from "./CloudV2.js";
import CloudV3 from "./CloudV3.js";
import CloudV4 from "./CloudV4.js";
import CloudV5 from "./CloudV5.js";
import CloudV7 from "./CloudV7.js";

export * as CloudV1 from "./CloudV1.js";
export * as CloudV2 from "./CloudV2.js";
export * as CloudV3 from "./CloudV3.js";
export * as CloudV4 from "./CloudV4.js";
export * as CloudV5 from "./CloudV5.js";
export * as CloudV7 from "./CloudV7.js";

const Cloud: GenericFacade = {
  name: "Cloud",
  versions: [CloudV1, CloudV2, CloudV3, CloudV4, CloudV5, CloudV7],
};

export default Cloud;
