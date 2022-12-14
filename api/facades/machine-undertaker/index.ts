import { GenericFacade } from "../../types";
import MachineUndertakerV1 from "./MachineUndertakerV1.js";

export * as MachineUndertakerV1 from "./MachineUndertakerV1.js";

const MachineUndertaker: GenericFacade = {
  name: "MachineUndertaker",
  versions: [MachineUndertakerV1],
};

export default MachineUndertaker;
