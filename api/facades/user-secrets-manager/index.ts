import { GenericFacade } from "../../types";
import UserSecretsManagerV1 from "./UserSecretsManagerV1.js";

export * as UserSecretsManagerV1 from "./UserSecretsManagerV1.js";

const UserSecretsManager: GenericFacade = {
  name: "UserSecretsManager",
  versions: [UserSecretsManagerV1],
};

export default UserSecretsManager;
