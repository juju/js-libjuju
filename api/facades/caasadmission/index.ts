import { GenericFacade } from "../../types";
import CAASAdmissionV1 from "./CAASAdmissionV1.js";

export * as CAASAdmissionV1 from "./CAASAdmissionV1.js";

const CAASAdmission: GenericFacade = {
  name: "CAASAdmission",
  versions: [CAASAdmissionV1],
};

export default CAASAdmission;
