import { GenericFacade } from "../../types";
import MeterStatusV2 from "./MeterStatusV2.js";

export * as MeterStatusV2 from "./MeterStatusV2.js";

const MeterStatus: GenericFacade = {
  name: "MeterStatus",
  versions: [MeterStatusV2],
};

export default MeterStatus;
