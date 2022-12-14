import { GenericFacade } from "../../types";
import MachineActionsV1 from "./MachineActionsV1.js";

export * as MachineActionsV1 from "./MachineActionsV1.js";

const MachineActions: GenericFacade = {
  name: "MachineActions",
  versions: [MachineActionsV1],
};

export default MachineActions;
