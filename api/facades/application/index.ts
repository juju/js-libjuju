import { GenericFacade } from "../../types";
import ApplicationV12 from "./ApplicationV12.js";
import ApplicationV13 from "./ApplicationV13.js";
import ApplicationV14 from "./ApplicationV14.js";
import ApplicationV15 from "./ApplicationV15.js";
import ApplicationV18 from "./ApplicationV18.js";

export * as ApplicationV12 from "./ApplicationV12.js";
export * as ApplicationV13 from "./ApplicationV13.js";
export * as ApplicationV14 from "./ApplicationV14.js";
export * as ApplicationV15 from "./ApplicationV15.js";
export * as ApplicationV18 from "./ApplicationV18.js";

const Application: GenericFacade = {
  name: "Application",
  versions: [
    ApplicationV12,
    ApplicationV13,
    ApplicationV14,
    ApplicationV15,
    ApplicationV18,
  ],
};

export default Application;
