import { GenericFacade } from "../../types";
import StorageV6 from "./StorageV6.js";

export * as StorageV6 from "./StorageV6.js";

const Storage: GenericFacade = {
  name: "Storage",
  versions: [StorageV6],
};

export default Storage;
