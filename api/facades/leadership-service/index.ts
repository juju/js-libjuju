import { GenericFacade } from "../../types";
import LeadershipServiceV2 from "./LeadershipServiceV2.js";

export * as LeadershipServiceV2 from "./LeadershipServiceV2.js";

const LeadershipService: GenericFacade = {
  name: "LeadershipService",
  versions: [LeadershipServiceV2],
};

export default LeadershipService;
