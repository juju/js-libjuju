import { GenericFacade } from "../../types";
import ResourcesV1 from "./ResourcesV1.js";
import ResourcesV2 from "./ResourcesV2.js";
import ResourcesV3 from "./ResourcesV3.js";

export * as ResourcesV1 from "./ResourcesV1.js";
export * as ResourcesV2 from "./ResourcesV2.js";
export * as ResourcesV3 from "./ResourcesV3.js";

const Resources: GenericFacade = {
  name: "Resources",
  versions: [ResourcesV1, ResourcesV2, ResourcesV3],
};

export default Resources;
