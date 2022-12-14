import { GenericFacade } from "../../types";
import AnnotationsV2 from "./AnnotationsV2.js";

export * as AnnotationsV2 from "./AnnotationsV2.js";

const Annotations: GenericFacade = {
  name: "Annotations",
  versions: [AnnotationsV2],
};

export default Annotations;
