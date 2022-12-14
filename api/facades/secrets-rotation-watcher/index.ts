import { GenericFacade } from "../../types";
import SecretsRotationWatcherV1 from "./SecretsRotationWatcherV1.js";

export * as SecretsRotationWatcherV1 from "./SecretsRotationWatcherV1.js";

const SecretsRotationWatcher: GenericFacade = {
  name: "SecretsRotationWatcher",
  versions: [SecretsRotationWatcherV1],
};

export default SecretsRotationWatcher;
