import { GenericFacade } from "../../types";
import CAASOperatorProvisionerV1 from "./CAASOperatorProvisionerV1.js";

export * as CAASOperatorProvisionerV1 from "./CAASOperatorProvisionerV1.js";

const CAASOperatorProvisioner: GenericFacade = {
  name: "CAASOperatorProvisioner",
  versions: [CAASOperatorProvisionerV1],
};

export default CAASOperatorProvisioner;
