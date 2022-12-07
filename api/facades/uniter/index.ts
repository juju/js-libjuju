import { GenericFacade } from "../../types";
import UniterV16 from "./UniterV16.js";
import UniterV18 from "./UniterV18.js";

export * as UniterV16 from "./UniterV16.js";
export * as UniterV18 from "./UniterV18.js";

const Uniter: GenericFacade = {
  name: "Uniter",
  versions: [UniterV16, UniterV18],
};

export default Uniter;
