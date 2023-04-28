import { GenericFacade } from "../../types";
import SecretsDrainV1 from "./SecretsDrainV1.js";

export * as SecretsDrainV1 from "./SecretsDrainV1.js";

const SecretsDrain: GenericFacade = {
  name: "SecretsDrain",
  versions: [SecretsDrainV1],
};

export default SecretsDrain;
