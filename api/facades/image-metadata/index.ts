import { GenericFacade } from "../../types";
import ImageMetadataV3 from "./ImageMetadataV3.js";

export * as ImageMetadataV3 from "./ImageMetadataV3.js";

const ImageMetadata: GenericFacade = {
  name: "ImageMetadata",
  versions: [ImageMetadataV3],
};

export default ImageMetadata;
