import { GenericFacade } from "../../types";
import SecretBackendsV1 from "./SecretBackendsV1.js";

export * as SecretBackendsV1 from "./SecretBackendsV1.js";

const SecretBackends: GenericFacade = {
  name: "SecretBackends",
  versions: [SecretBackendsV1],
};

export default SecretBackends;
