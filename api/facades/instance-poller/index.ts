import { GenericFacade } from "../../types";
import InstancePollerV4 from "./InstancePollerV4.js";

export * as InstancePollerV4 from "./InstancePollerV4.js";

const InstancePoller: GenericFacade = {
  name: "InstancePoller",
  versions: [InstancePollerV4],
};

export default InstancePoller;
