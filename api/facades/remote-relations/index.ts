import { GenericFacade } from "../../types";
import RemoteRelationsV2 from "./RemoteRelationsV2.js";

export * as RemoteRelationsV2 from "./RemoteRelationsV2.js";

const RemoteRelations: GenericFacade = {
  name: "RemoteRelations",
  versions: [RemoteRelationsV2],
};

export default RemoteRelations;
