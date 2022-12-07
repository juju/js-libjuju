import { GenericFacade } from "../../types";
import CAASFirewallerV1 from "./CAASFirewallerV1.js";

export * as CAASFirewallerV1 from "./CAASFirewallerV1.js";

const CAASFirewaller: GenericFacade = {
  name: "CAASFirewaller",
  versions: [CAASFirewallerV1],
};

export default CAASFirewaller;
