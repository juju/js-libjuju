import { GenericFacade } from "../../types";
import ProvisionerV11 from "./ProvisionerV11.js";

export * as ProvisionerV11 from "./ProvisionerV11.js";

const Provisioner: GenericFacade = {
  name: "Provisioner",
  versions: [ProvisionerV11],
};

export default Provisioner;
