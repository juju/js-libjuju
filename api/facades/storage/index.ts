import { GenericFacade } from "../../types";
import StorageV6 from "./StorageV6.js";
import StorageV7 from "./StorageV7.js";

export * as StorageV6 from "./StorageV6.js";
export * as StorageV7 from "./StorageV7.js";

const Storage: GenericFacade = {
  name: "Storage",
  versions: [StorageV6, StorageV7],
};

export default Storage;
