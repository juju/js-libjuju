import { GenericFacade } from "../../types";
export * as UserManagerV1 from "./UserManagerV1";
export * as UserManagerV2 from "./UserManagerV2";
export * as UserManagerV3 from "./UserManagerV3";

const UserManager: GenericFacade = { name: "UserManager" };
export default UserManager;
