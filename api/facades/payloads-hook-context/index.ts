import { GenericFacade } from "../../types";
import PayloadsHookContextV1 from "./PayloadsHookContextV1.js";

export * as PayloadsHookContextV1 from "./PayloadsHookContextV1.js";

const PayloadsHookContext: GenericFacade = {
  name: "PayloadsHookContext",
  versions: [PayloadsHookContextV1],
};

export default PayloadsHookContext;
