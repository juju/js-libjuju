import { GenericFacade } from "../../types";
import SecretsManagerV1 from "./SecretsManagerV1.js";

export * as SecretsManagerV1 from "./SecretsManagerV1.js";

const SecretsManager: GenericFacade = {
  name: "SecretsManager",
  versions: [SecretsManagerV1],
};

export default SecretsManager;
