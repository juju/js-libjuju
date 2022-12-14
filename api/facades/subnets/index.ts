import { GenericFacade } from "../../types";
import SubnetsV4 from "./SubnetsV4.js";
import SubnetsV5 from "./SubnetsV5.js";

export * as SubnetsV4 from "./SubnetsV4.js";
export * as SubnetsV5 from "./SubnetsV5.js";

const Subnets: GenericFacade = {
  name: "Subnets",
  versions: [SubnetsV4, SubnetsV5],
};

export default Subnets;
