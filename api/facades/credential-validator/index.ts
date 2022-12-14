import { GenericFacade } from "../../types";
import CredentialValidatorV2 from "./CredentialValidatorV2.js";

export * as CredentialValidatorV2 from "./CredentialValidatorV2.js";

const CredentialValidator: GenericFacade = {
  name: "CredentialValidator",
  versions: [CredentialValidatorV2],
};

export default CredentialValidator;
