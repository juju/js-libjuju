import { GenericFacade } from "../../types";
import ImageMetadataManagerV1 from "./ImageMetadataManagerV1.js";

export * as ImageMetadataManagerV1 from "./ImageMetadataManagerV1.js";

const ImageMetadataManager: GenericFacade = {
  name: "ImageMetadataManager",
  versions: [ImageMetadataManagerV1],
};

export default ImageMetadataManager;
