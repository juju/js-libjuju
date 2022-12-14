import { GenericFacade } from "../../types";
import ResumerV2 from "./ResumerV2.js";

export * as ResumerV2 from "./ResumerV2.js";

const Resumer: GenericFacade = {
  name: "Resumer",
  versions: [ResumerV2],
};

export default Resumer;
