import { GenericFacade } from "../../types";
import SecretBackendsRotateWatcherV1 from "./SecretBackendsRotateWatcherV1.js";

export * as SecretBackendsRotateWatcherV1 from "./SecretBackendsRotateWatcherV1.js";

const SecretBackendsRotateWatcher: GenericFacade = {
  name: "SecretBackendsRotateWatcher",
  versions: [SecretBackendsRotateWatcherV1],
};

export default SecretBackendsRotateWatcher;
