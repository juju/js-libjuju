import { GenericFacade } from "../../types";
import ModelConfigV2 from "./ModelConfigV2.js";
import ModelConfigV3 from "./ModelConfigV3.js";

export * as ModelConfigV2 from "./ModelConfigV2.js";
export * as ModelConfigV3 from "./ModelConfigV3.js";

const ModelConfig: GenericFacade = {
  name: "ModelConfig",
  versions: [ModelConfigV2, ModelConfigV3],
};

export default ModelConfig;
