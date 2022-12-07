import { GenericFacade } from "../../types";
import CAASFirewallerEmbeddedV1 from "./CAASFirewallerEmbeddedV1.js";

export * as CAASFirewallerEmbeddedV1 from "./CAASFirewallerEmbeddedV1.js";

const CAASFirewallerEmbedded: GenericFacade = {
  name: "CAASFirewallerEmbedded",
  versions: [CAASFirewallerEmbeddedV1],
};

export default CAASFirewallerEmbedded;
