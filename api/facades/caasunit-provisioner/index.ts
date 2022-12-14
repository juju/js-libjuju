import { GenericFacade } from "../../types";
import CAASUnitProvisionerV1 from "./CAASUnitProvisionerV1.js";
import CAASUnitProvisionerV2 from "./CAASUnitProvisionerV2.js";

export * as CAASUnitProvisionerV1 from "./CAASUnitProvisionerV1.js";
export * as CAASUnitProvisionerV2 from "./CAASUnitProvisionerV2.js";

const CAASUnitProvisioner: GenericFacade = {
  name: "CAASUnitProvisioner",
  versions: [CAASUnitProvisionerV1, CAASUnitProvisionerV2],
};

export default CAASUnitProvisioner;
