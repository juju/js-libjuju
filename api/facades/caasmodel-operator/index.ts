import { GenericFacade } from "../../types";
import CAASModelOperatorV1 from "./CAASModelOperatorV1.js";

export * as CAASModelOperatorV1 from "./CAASModelOperatorV1.js";

const CAASModelOperator: GenericFacade = {
  name: "CAASModelOperator",
  versions: [CAASModelOperatorV1],
};

export default CAASModelOperator;
