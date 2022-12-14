import { GenericFacade } from "../../types";
import MachinerV4 from "./MachinerV4.js";
import MachinerV5 from "./MachinerV5.js";

export * as MachinerV4 from "./MachinerV4.js";
export * as MachinerV5 from "./MachinerV5.js";

const Machiner: GenericFacade = {
  name: "Machiner",
  versions: [MachinerV4, MachinerV5],
};

export default Machiner;
