import { GenericFacade } from "../../types";
import ResourcesHookContextV1 from "./ResourcesHookContextV1.js";

export * as ResourcesHookContextV1 from "./ResourcesHookContextV1.js";

const ResourcesHookContext: GenericFacade = {
  name: "ResourcesHookContext",
  versions: [ResourcesHookContextV1],
};

export default ResourcesHookContext;
