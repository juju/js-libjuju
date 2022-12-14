import { GenericFacade } from "../../types";
import RebootV2 from "./RebootV2.js";

export * as RebootV2 from "./RebootV2.js";

const Reboot: GenericFacade = {
  name: "Reboot",
  versions: [RebootV2],
};

export default Reboot;
