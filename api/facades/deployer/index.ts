import { GenericFacade } from "../../types";
import DeployerV1 from "./DeployerV1.js";

export * as DeployerV1 from "./DeployerV1.js";

const Deployer: GenericFacade = {
  name: "Deployer",
  versions: [DeployerV1],
};

export default Deployer;
