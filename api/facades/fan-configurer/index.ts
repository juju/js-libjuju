import { GenericFacade } from "../../types";
import FanConfigurerV1 from "./FanConfigurerV1.js";

export * as FanConfigurerV1 from "./FanConfigurerV1.js";

const FanConfigurer: GenericFacade = {
  name: "FanConfigurer",
  versions: [FanConfigurerV1],
};

export default FanConfigurer;
