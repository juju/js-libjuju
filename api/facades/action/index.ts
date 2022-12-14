import { GenericFacade } from "../../types";
import ActionV6 from "./ActionV6.js";
import ActionV7 from "./ActionV7.js";

export * as ActionV6 from "./ActionV6.js";
export * as ActionV7 from "./ActionV7.js";

const Action: GenericFacade = {
  name: "Action",
  versions: [ActionV6, ActionV7],
};

export default Action;
