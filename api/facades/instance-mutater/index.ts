import { GenericFacade } from "../../types";
import InstanceMutaterV2 from "./InstanceMutaterV2.js";
import InstanceMutaterV3 from "./InstanceMutaterV3.js";

export * as InstanceMutaterV2 from "./InstanceMutaterV2.js";
export * as InstanceMutaterV3 from "./InstanceMutaterV3.js";

const InstanceMutater: GenericFacade = {
  name: "InstanceMutater",
  versions: [InstanceMutaterV2, InstanceMutaterV3],
};

export default InstanceMutater;
