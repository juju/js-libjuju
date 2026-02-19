import { GenericFacade } from "../../types";
import ModelConfigV2 from "./ModelConfigV2.js";
import ModelConfigV3 from "./ModelConfigV3.js";
import ModelConfigV4 from "./ModelConfigV4.js";

export * as ModelConfigV2 from "./ModelConfigV2.js";
export * as ModelConfigV3 from "./ModelConfigV3.js";
export * as ModelConfigV4 from "./ModelConfigV4.js";

const ModelConfig: GenericFacade = {
  name: "ModelConfig",
  versions: [ModelConfigV2, ModelConfigV3, ModelConfigV4],
};

export default ModelConfig;
