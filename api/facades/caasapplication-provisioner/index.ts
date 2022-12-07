import { GenericFacade } from "../../types";
import CAASApplicationProvisionerV1 from "./CAASApplicationProvisionerV1.js";

export * as CAASApplicationProvisionerV1 from "./CAASApplicationProvisionerV1.js";

const CAASApplicationProvisioner: GenericFacade = {
  name: "CAASApplicationProvisioner",
  versions: [CAASApplicationProvisionerV1],
};

export default CAASApplicationProvisioner;
