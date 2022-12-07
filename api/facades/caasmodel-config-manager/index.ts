import { GenericFacade } from "../../types";
import CAASModelConfigManagerV1 from "./CAASModelConfigManagerV1.js";

export * as CAASModelConfigManagerV1 from "./CAASModelConfigManagerV1.js";

const CAASModelConfigManager: GenericFacade = {
  name: "CAASModelConfigManager",
  versions: [CAASModelConfigManagerV1],
};

export default CAASModelConfigManager;
