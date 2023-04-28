import { GenericFacade } from "../../types";
import CharmsV2 from "./CharmsV2.js";
import CharmsV4 from "./CharmsV4.js";
import CharmsV5 from "./CharmsV5.js";
import CharmsV6 from "./CharmsV6.js";

export * as CharmsV2 from "./CharmsV2.js";
export * as CharmsV4 from "./CharmsV4.js";
export * as CharmsV5 from "./CharmsV5.js";
export * as CharmsV6 from "./CharmsV6.js";

const Charms: GenericFacade = {
  name: "Charms",
  versions: [CharmsV2, CharmsV4, CharmsV5, CharmsV6],
};

export default Charms;
