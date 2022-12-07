import { GenericFacade } from "../../types";
import CAASApplicationV1 from "./CAASApplicationV1.js";

export * as CAASApplicationV1 from "./CAASApplicationV1.js";

const CAASApplication: GenericFacade = {
  name: "CAASApplication",
  versions: [CAASApplicationV1],
};

export default CAASApplication;
