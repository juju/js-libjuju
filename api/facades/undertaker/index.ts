import { GenericFacade } from "../../types";
import UndertakerV1 from "./UndertakerV1.js";

export * as UndertakerV1 from "./UndertakerV1.js";

const Undertaker: GenericFacade = {
  name: "Undertaker",
  versions: [UndertakerV1],
};

export default Undertaker;
