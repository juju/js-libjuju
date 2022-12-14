import { GenericFacade } from "../../types";
import AgentV2 from "./AgentV2.js";
import AgentV3 from "./AgentV3.js";

export * as AgentV2 from "./AgentV2.js";
export * as AgentV3 from "./AgentV3.js";

const Agent: GenericFacade = {
  name: "Agent",
  versions: [AgentV2, AgentV3],
};

export default Agent;
