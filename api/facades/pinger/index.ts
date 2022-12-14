import { GenericFacade } from "../../types";
import PingerV1 from "./PingerV1.js";

export * as PingerV1 from "./PingerV1.js";

const Pinger: GenericFacade = {
  name: "Pinger",
  versions: [PingerV1],
};

export default Pinger;
