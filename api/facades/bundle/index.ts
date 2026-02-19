import { GenericFacade } from "../../types";
import BundleV1 from "./BundleV1.js";
import BundleV4 from "./BundleV4.js";
import BundleV5 from "./BundleV5.js";
import BundleV6 from "./BundleV6.js";
import BundleV8 from "./BundleV8.js";

export * as BundleV1 from "./BundleV1.js";
export * as BundleV4 from "./BundleV4.js";
export * as BundleV5 from "./BundleV5.js";
export * as BundleV6 from "./BundleV6.js";
export * as BundleV8 from "./BundleV8.js";

const Bundle: GenericFacade = {
  name: "Bundle",
  versions: [BundleV1, BundleV4, BundleV5, BundleV6, BundleV8],
};

export default Bundle;
