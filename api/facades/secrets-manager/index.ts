import { GenericFacade } from "../../types";
import SecretsManagerV1 from "./SecretsManagerV1.js";
import SecretsManagerV2 from "./SecretsManagerV2.js";

export * as SecretsManagerV1 from "./SecretsManagerV1.js";
export * as SecretsManagerV2 from "./SecretsManagerV2.js";

const SecretsManager: GenericFacade = {
  name: "SecretsManager",
  versions: [SecretsManagerV1, SecretsManagerV2],
};

export default SecretsManager;
