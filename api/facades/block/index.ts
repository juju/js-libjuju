import { GenericFacade } from "../../types";
import BlockV2 from "./BlockV2.js";

export * as BlockV2 from "./BlockV2.js";

const Block: GenericFacade = {
  name: "Block",
  versions: [BlockV2],
};

export default Block;
