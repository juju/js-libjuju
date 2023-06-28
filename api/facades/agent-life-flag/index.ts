import { GenericFacade } from "../../types";
import AgentLifeFlagV1 from "./AgentLifeFlagV1.js";

export * as AgentLifeFlagV1 from "./AgentLifeFlagV1.js";

const AgentLifeFlag: GenericFacade = {
  name: "AgentLifeFlag",
  versions: [AgentLifeFlagV1],
};

export default AgentLifeFlag;
