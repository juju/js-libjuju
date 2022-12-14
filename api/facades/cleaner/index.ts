import { GenericFacade } from "../../types";
import CleanerV2 from "./CleanerV2.js";

export * as CleanerV2 from "./CleanerV2.js";

const Cleaner: GenericFacade = {
  name: "Cleaner",
  versions: [CleanerV2],
};

export default Cleaner;
