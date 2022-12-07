import { GenericFacade } from "../../types";
import CAASOperatorV1 from "./CAASOperatorV1.js";

export * as CAASOperatorV1 from "./CAASOperatorV1.js";

const CAASOperator: GenericFacade = {
  name: "CAASOperator",
  versions: [CAASOperatorV1],
};

export default CAASOperator;
