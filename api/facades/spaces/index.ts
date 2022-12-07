import { GenericFacade } from "../../types";
import SpacesV6 from "./SpacesV6.js";

export * as SpacesV6 from "./SpacesV6.js";

const Spaces: GenericFacade = {
  name: "Spaces",
  versions: [SpacesV6],
};

export default Spaces;
