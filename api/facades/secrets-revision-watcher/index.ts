import { GenericFacade } from "../../types";
import SecretsRevisionWatcherV1 from "./SecretsRevisionWatcherV1.js";

export * as SecretsRevisionWatcherV1 from "./SecretsRevisionWatcherV1.js";

const SecretsRevisionWatcher: GenericFacade = {
  name: "SecretsRevisionWatcher",
  versions: [SecretsRevisionWatcherV1],
};

export default SecretsRevisionWatcher;
