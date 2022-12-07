import { GenericFacade } from "../../types";
import SingularV2 from "./SingularV2.js";

export * as SingularV2 from "./SingularV2.js";

const Singular: GenericFacade = {
  name: "Singular",
  versions: [SingularV2],
};

export default Singular;
