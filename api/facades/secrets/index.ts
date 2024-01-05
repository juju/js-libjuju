import { GenericFacade } from "../../types";
import SecretsV1 from "./SecretsV1.js";
import SecretsV2 from "./SecretsV2.js";

export * as SecretsV1 from "./SecretsV1.js";
export * as SecretsV2 from "./SecretsV2.js";

const Secrets: GenericFacade = {
  name: "Secrets",
  versions: [SecretsV1, SecretsV2],
};

export default Secrets;
