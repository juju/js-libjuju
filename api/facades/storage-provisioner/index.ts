import { GenericFacade } from "../../types";
import StorageProvisionerV4 from "./StorageProvisionerV4.js";

export * as StorageProvisionerV4 from "./StorageProvisionerV4.js";

const StorageProvisioner: GenericFacade = {
  name: "StorageProvisioner",
  versions: [StorageProvisionerV4],
};

export default StorageProvisioner;
