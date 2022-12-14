import { GenericFacade } from "../../types";
import SecretsTriggerWatcherV1 from "./SecretsTriggerWatcherV1.js";

export * as SecretsTriggerWatcherV1 from "./SecretsTriggerWatcherV1.js";

const SecretsTriggerWatcher: GenericFacade = {
  name: "SecretsTriggerWatcher",
  versions: [SecretsTriggerWatcherV1],
};

export default SecretsTriggerWatcher;
