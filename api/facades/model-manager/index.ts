import { GenericFacade } from "../../types";
import ModelManagerV2 from "./ModelManagerV2.js";
import ModelManagerV3 from "./ModelManagerV3.js";
import ModelManagerV4 from "./ModelManagerV4.js";
import ModelManagerV5 from "./ModelManagerV5.js";
import ModelManagerV8 from "./ModelManagerV8.js";
import ModelManagerV9 from "./ModelManagerV9.js";

export * as ModelManagerV2 from "./ModelManagerV2.js";
export * as ModelManagerV3 from "./ModelManagerV3.js";
export * as ModelManagerV4 from "./ModelManagerV4.js";
export * as ModelManagerV5 from "./ModelManagerV5.js";
export * as ModelManagerV8 from "./ModelManagerV8.js";
export * as ModelManagerV9 from "./ModelManagerV9.js";

const ModelManager: GenericFacade = {
  name: "ModelManager",
  versions: [
    ModelManagerV2,
    ModelManagerV3,
    ModelManagerV4,
    ModelManagerV5,
    ModelManagerV8,
    ModelManagerV9,
  ],
};

export default ModelManager;
