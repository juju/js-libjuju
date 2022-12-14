import { GenericFacade } from "../../types";
import RaftLeaseV1 from "./RaftLeaseV1.js";
import RaftLeaseV2 from "./RaftLeaseV2.js";

export * as RaftLeaseV1 from "./RaftLeaseV1.js";
export * as RaftLeaseV2 from "./RaftLeaseV2.js";

const RaftLease: GenericFacade = {
  name: "RaftLease",
  versions: [RaftLeaseV1, RaftLeaseV2],
};

export default RaftLease;
