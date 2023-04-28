import { GenericFacade } from "../../types";
import SecretBackendsManagerV1 from "./SecretBackendsManagerV1.js";

export * as SecretBackendsManagerV1 from "./SecretBackendsManagerV1.js";

const SecretBackendsManager: GenericFacade = {
  name: "SecretBackendsManager",
  versions: [SecretBackendsManagerV1],
};

export default SecretBackendsManager;
