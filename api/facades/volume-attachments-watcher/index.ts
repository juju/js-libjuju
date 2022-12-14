import { GenericFacade } from "../../types";
import VolumeAttachmentsWatcherV2 from "./VolumeAttachmentsWatcherV2.js";

export * as VolumeAttachmentsWatcherV2 from "./VolumeAttachmentsWatcherV2.js";

const VolumeAttachmentsWatcher: GenericFacade = {
  name: "VolumeAttachmentsWatcher",
  versions: [VolumeAttachmentsWatcherV2],
};

export default VolumeAttachmentsWatcher;
