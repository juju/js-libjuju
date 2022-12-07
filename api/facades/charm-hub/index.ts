import { GenericFacade } from "../../types";
import CharmHubV1 from "./CharmHubV1.js";

export * as CharmHubV1 from "./CharmHubV1.js";

const CharmHub: GenericFacade = {
  name: "CharmHub",
  versions: [CharmHubV1],
};

export default CharmHub;
