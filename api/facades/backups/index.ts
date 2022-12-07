import { GenericFacade } from "../../types";
import BackupsV2 from "./BackupsV2.js";
import BackupsV3 from "./BackupsV3.js";

export * as BackupsV2 from "./BackupsV2.js";
export * as BackupsV3 from "./BackupsV3.js";

const Backups: GenericFacade = {
  name: "Backups",
  versions: [BackupsV2, BackupsV3],
};

export default Backups;
