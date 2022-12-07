import { GenericFacade } from "../../types";
import LogForwardingV1 from "./LogForwardingV1.js";

export * as LogForwardingV1 from "./LogForwardingV1.js";

const LogForwarding: GenericFacade = {
  name: "LogForwarding",
  versions: [LogForwardingV1],
};

export default LogForwarding;
