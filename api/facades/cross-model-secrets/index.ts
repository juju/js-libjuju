import { GenericFacade } from "../../types";
import CrossModelSecretsV1 from "./CrossModelSecretsV1.js";

export * as CrossModelSecretsV1 from "./CrossModelSecretsV1.js";

const CrossModelSecrets: GenericFacade = {
  name: "CrossModelSecrets",
  versions: [CrossModelSecretsV1],
};

export default CrossModelSecrets;
