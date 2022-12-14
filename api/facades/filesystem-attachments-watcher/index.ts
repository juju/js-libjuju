import { GenericFacade } from "../../types";
import FilesystemAttachmentsWatcherV2 from "./FilesystemAttachmentsWatcherV2.js";

export * as FilesystemAttachmentsWatcherV2 from "./FilesystemAttachmentsWatcherV2.js";

const FilesystemAttachmentsWatcher: GenericFacade = {
  name: "FilesystemAttachmentsWatcher",
  versions: [FilesystemAttachmentsWatcherV2],
};

export default FilesystemAttachmentsWatcher;
