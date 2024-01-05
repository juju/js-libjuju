import { GenericFacade } from "../../types";
import UniterV16 from "./UniterV16.js";
import UniterV18 from "./UniterV18.js";
import UniterV19 from "./UniterV19.js";

export * as UniterV16 from "./UniterV16.js";
export * as UniterV18 from "./UniterV18.js";
export * as UniterV19 from "./UniterV19.js";

const Uniter: GenericFacade = {
  name: "Uniter",
  versions: [UniterV16, UniterV18, UniterV19],
};

export default Uniter;
