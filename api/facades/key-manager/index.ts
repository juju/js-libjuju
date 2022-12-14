import { GenericFacade } from "../../types";
import KeyManagerV1 from "./KeyManagerV1.js";

export * as KeyManagerV1 from "./KeyManagerV1.js";

const KeyManager: GenericFacade = {
  name: "KeyManager",
  versions: [KeyManagerV1],
};

export default KeyManager;
