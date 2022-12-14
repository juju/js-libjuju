import { GenericFacade } from "../../types";
import FirewallerV5 from "./FirewallerV5.js";
import FirewallerV7 from "./FirewallerV7.js";

export * as FirewallerV5 from "./FirewallerV5.js";
export * as FirewallerV7 from "./FirewallerV7.js";

const Firewaller: GenericFacade = {
  name: "Firewaller",
  versions: [FirewallerV5, FirewallerV7],
};

export default Firewaller;
