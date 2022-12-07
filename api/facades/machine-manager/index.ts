import { GenericFacade } from "../../types";
export * as MachineManagerV6 from "./MachineManagerV6";
export * as MachineManagerV7 from "./MachineManagerV7";
export * as MachineManagerV9 from "./MachineManagerV9";

const MachineManager: GenericFacade = { name: "MachineManager" };
export default MachineManager;
