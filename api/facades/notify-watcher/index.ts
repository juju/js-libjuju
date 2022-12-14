import { GenericFacade } from "../../types";
import NotifyWatcherV1 from "./NotifyWatcherV1.js";

export * as NotifyWatcherV1 from "./NotifyWatcherV1.js";

const NotifyWatcher: GenericFacade = {
  name: "NotifyWatcher",
  versions: [NotifyWatcherV1],
};

export default NotifyWatcher;
