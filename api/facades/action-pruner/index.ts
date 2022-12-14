import { GenericFacade } from "../../types";
import ActionPrunerV1 from "./ActionPrunerV1.js";

export * as ActionPrunerV1 from "./ActionPrunerV1.js";

const ActionPruner: GenericFacade = {
  name: "ActionPruner",
  versions: [ActionPrunerV1],
};

export default ActionPruner;
