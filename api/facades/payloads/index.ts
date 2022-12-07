import { GenericFacade } from "../../types";
import PayloadsV1 from "./PayloadsV1.js";

export * as PayloadsV1 from "./PayloadsV1.js";

const Payloads: GenericFacade = {
  name: "Payloads",
  versions: [PayloadsV1],
};

export default Payloads;
