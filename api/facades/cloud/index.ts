import { GenericFacade } from "../../types";
export * as CloudV1 from "./CloudV1";
export * as CloudV2 from "./CloudV2";
export * as CloudV3 from "./CloudV3";
export * as CloudV4 from "./CloudV4";
export * as CloudV5 from "./CloudV5";
export * as CloudV7 from "./CloudV7";

const Cloud: GenericFacade = { name: "Cloud" };
export default Cloud;
