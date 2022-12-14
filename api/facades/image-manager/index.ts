import { GenericFacade } from "../../types";
import ImageManagerV2 from "./ImageManagerV2.js";

export * as ImageManagerV2 from "./ImageManagerV2.js";

const ImageManager: GenericFacade = {
  name: "ImageManager",
  versions: [ImageManagerV2],
};

export default ImageManager;
