import { GenericFacade } from "../../types";
import OfferStatusWatcherV1 from "./OfferStatusWatcherV1.js";

export * as OfferStatusWatcherV1 from "./OfferStatusWatcherV1.js";

const OfferStatusWatcher: GenericFacade = {
  name: "OfferStatusWatcher",
  versions: [OfferStatusWatcherV1],
};

export default OfferStatusWatcher;
