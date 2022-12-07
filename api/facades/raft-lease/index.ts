import { GenericFacade } from "../../types";
export * as RaftLeaseV1 from "./RaftLeaseV1";
export * as RaftLeaseV2 from "./RaftLeaseV2";

const RaftLease: GenericFacade = { name: "RaftLease" };
export default RaftLease;
