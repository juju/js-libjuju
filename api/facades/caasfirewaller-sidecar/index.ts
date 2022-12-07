import { GenericFacade } from "../../types";
import CAASFirewallerSidecarV1 from "./CAASFirewallerSidecarV1.js";

export * as CAASFirewallerSidecarV1 from "./CAASFirewallerSidecarV1.js";

const CAASFirewallerSidecar: GenericFacade = {
  name: "CAASFirewallerSidecar",
  versions: [CAASFirewallerSidecarV1],
};

export default CAASFirewallerSidecar;
