import { GenericFacade } from "../../types";
import UserSecretsDrainV1 from "./UserSecretsDrainV1.js";

export * as UserSecretsDrainV1 from "./UserSecretsDrainV1.js";

const UserSecretsDrain: GenericFacade = {
  name: "UserSecretsDrain",
  versions: [UserSecretsDrainV1],
};

export default UserSecretsDrain;
