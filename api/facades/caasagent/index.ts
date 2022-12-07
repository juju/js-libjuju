import { GenericFacade } from "../../types";
import CAASAgentV1 from "./CAASAgentV1.js";
import CAASAgentV2 from "./CAASAgentV2.js";

export * as CAASAgentV1 from "./CAASAgentV1.js";
export * as CAASAgentV2 from "./CAASAgentV2.js";

const CAASAgent: GenericFacade = {
  name: "CAASAgent",
  versions: [CAASAgentV1, CAASAgentV2],
};

export default CAASAgent;
