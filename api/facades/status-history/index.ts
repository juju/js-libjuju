import { GenericFacade } from "../../types";
import StatusHistoryV2 from "./StatusHistoryV2.js";

export * as StatusHistoryV2 from "./StatusHistoryV2.js";

const StatusHistory: GenericFacade = {
  name: "StatusHistory",
  versions: [StatusHistoryV2],
};

export default StatusHistory;
