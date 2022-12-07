import { GenericFacade } from "../../types";
import FirewallRulesV1 from "./FirewallRulesV1.js";

export * as FirewallRulesV1 from "./FirewallRulesV1.js";

const FirewallRules: GenericFacade = {
  name: "FirewallRules",
  versions: [FirewallRulesV1],
};

export default FirewallRules;
