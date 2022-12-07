import { GenericFacade } from "../../types";
import HostKeyReporterV1 from "./HostKeyReporterV1.js";

export * as HostKeyReporterV1 from "./HostKeyReporterV1.js";

const HostKeyReporter: GenericFacade = {
  name: "HostKeyReporter",
  versions: [HostKeyReporterV1],
};

export default HostKeyReporter;
