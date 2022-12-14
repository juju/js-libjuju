import { GenericFacade } from "../../types";
import AgentToolsV1 from "./AgentToolsV1.js";

export * as AgentToolsV1 from "./AgentToolsV1.js";

const AgentTools: GenericFacade = {
  name: "AgentTools",
  versions: [AgentToolsV1],
};

export default AgentTools;
