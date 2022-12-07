import { GenericFacade } from "../../types";
import LifeFlagV1 from "./LifeFlagV1.js";

export * as LifeFlagV1 from "./LifeFlagV1.js";

const LifeFlag: GenericFacade = {
  name: "LifeFlag",
  versions: [LifeFlagV1],
};

export default LifeFlag;
