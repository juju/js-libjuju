import { GenericFacade } from "../../types";
import ModelGenerationV4 from "./ModelGenerationV4.js";

export * as ModelGenerationV4 from "./ModelGenerationV4.js";

const ModelGeneration: GenericFacade = {
  name: "ModelGeneration",
  versions: [ModelGenerationV4],
};

export default ModelGeneration;
