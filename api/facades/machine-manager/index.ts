import { GenericFacade } from "../../types";
import MachineManagerV10 from "./MachineManagerV10.js";
import MachineManagerV6 from "./MachineManagerV6.js";
import MachineManagerV7 from "./MachineManagerV7.js";
import MachineManagerV9 from "./MachineManagerV9.js";

export * as MachineManagerV10 from "./MachineManagerV10.js";
export * as MachineManagerV6 from "./MachineManagerV6.js";
export * as MachineManagerV7 from "./MachineManagerV7.js";
export * as MachineManagerV9 from "./MachineManagerV9.js";

const MachineManager: GenericFacade = {
  name: "MachineManager",
  versions: [
    MachineManagerV10,
    MachineManagerV6,
    MachineManagerV7,
    MachineManagerV9,
  ],
};

export default MachineManager;
