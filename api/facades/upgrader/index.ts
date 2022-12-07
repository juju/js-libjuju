import { GenericFacade } from "../../types";
import UpgraderV1 from "./UpgraderV1.js";

export * as UpgraderV1 from "./UpgraderV1.js";

const Upgrader: GenericFacade = {
  name: "Upgrader",
  versions: [UpgraderV1],
};

export default Upgrader;
