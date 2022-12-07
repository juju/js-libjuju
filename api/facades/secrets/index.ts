import { GenericFacade } from "../../types";
import SecretsV1 from "./SecretsV1.js";

export * as SecretsV1 from "./SecretsV1.js";

const Secrets: GenericFacade = {
  name: "Secrets",
  versions: [SecretsV1],
};

export default Secrets;
