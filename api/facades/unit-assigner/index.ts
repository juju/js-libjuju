import { GenericFacade } from "../../types";
import UnitAssignerV1 from "./UnitAssignerV1.js";

export * as UnitAssignerV1 from "./UnitAssignerV1.js";

const UnitAssigner: GenericFacade = {
  name: "UnitAssigner",
  versions: [UnitAssignerV1],
};

export default UnitAssigner;
