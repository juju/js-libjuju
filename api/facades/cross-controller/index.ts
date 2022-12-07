import { GenericFacade } from "../../types";
import CrossControllerV1 from "./CrossControllerV1.js";

export * as CrossControllerV1 from "./CrossControllerV1.js";

const CrossController: GenericFacade = {
  name: "CrossController",
  versions: [CrossControllerV1],
};

export default CrossController;
