import { GenericFacade } from "../../types";
import CrossModelRelationsV2 from "./CrossModelRelationsV2.js";

export * as CrossModelRelationsV2 from "./CrossModelRelationsV2.js";

const CrossModelRelations: GenericFacade = {
  name: "CrossModelRelations",
  versions: [CrossModelRelationsV2],
};

export default CrossModelRelations;
