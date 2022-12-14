import { GenericFacade } from "../../types";
import AdminV3 from "./AdminV3.js";

export * as AdminV3 from "./AdminV3.js";

const Admin: GenericFacade = {
  name: "Admin",
  versions: [AdminV3],
};

export default Admin;
