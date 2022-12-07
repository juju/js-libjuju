import { GenericFacade } from "../../types";
import VolumeAttachmentPlansWatcherV1 from "./VolumeAttachmentPlansWatcherV1.js";

export * as VolumeAttachmentPlansWatcherV1 from "./VolumeAttachmentPlansWatcherV1.js";

const VolumeAttachmentPlansWatcher: GenericFacade = {
  name: "VolumeAttachmentPlansWatcher",
  versions: [VolumeAttachmentPlansWatcherV1],
};

export default VolumeAttachmentPlansWatcher;
