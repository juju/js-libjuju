import { GenericFacade } from "../../types";
import LoggerV1 from "./LoggerV1.js";

export * as LoggerV1 from "./LoggerV1.js";

const Logger: GenericFacade = {
  name: "Logger",
  versions: [LoggerV1],
};

export default Logger;
