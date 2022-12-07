import { GenericFacade } from "../../types";
import CredentialManagerV1 from "./CredentialManagerV1.js";

export * as CredentialManagerV1 from "./CredentialManagerV1.js";

const CredentialManager: GenericFacade = {
  name: "CredentialManager",
  versions: [CredentialManagerV1],
};

export default CredentialManager;
