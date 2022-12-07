import { GenericFacade } from "../../types";
import UserManagerV1 from "./UserManagerV1.js";
import UserManagerV2 from "./UserManagerV2.js";
import UserManagerV3 from "./UserManagerV3.js";

export * as UserManagerV1 from "./UserManagerV1.js";
export * as UserManagerV2 from "./UserManagerV2.js";
export * as UserManagerV3 from "./UserManagerV3.js";

const UserManager: GenericFacade = {
  name: "UserManager",
  versions: [UserManagerV1, UserManagerV2, UserManagerV3],
};

export default UserManager;
