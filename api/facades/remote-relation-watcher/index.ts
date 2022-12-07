import { GenericFacade } from "../../types";
import RemoteRelationWatcherV1 from "./RemoteRelationWatcherV1.js";

export * as RemoteRelationWatcherV1 from "./RemoteRelationWatcherV1.js";

const RemoteRelationWatcher: GenericFacade = {
  name: "RemoteRelationWatcher",
  versions: [RemoteRelationWatcherV1],
};

export default RemoteRelationWatcher;
