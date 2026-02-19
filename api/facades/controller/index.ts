import { GenericFacade } from "../../types";
import ControllerV11 from "./ControllerV11.js";
import ControllerV12 from "./ControllerV12.js";
import ControllerV3 from "./ControllerV3.js";
import ControllerV4 from "./ControllerV4.js";
import ControllerV5 from "./ControllerV5.js";
import ControllerV6 from "./ControllerV6.js";
import ControllerV7 from "./ControllerV7.js";
import ControllerV8 from "./ControllerV8.js";
import ControllerV9 from "./ControllerV9.js";

export * as ControllerV11 from "./ControllerV11.js";
export * as ControllerV12 from "./ControllerV12.js";
export * as ControllerV3 from "./ControllerV3.js";
export * as ControllerV4 from "./ControllerV4.js";
export * as ControllerV5 from "./ControllerV5.js";
export * as ControllerV6 from "./ControllerV6.js";
export * as ControllerV7 from "./ControllerV7.js";
export * as ControllerV8 from "./ControllerV8.js";
export * as ControllerV9 from "./ControllerV9.js";

const Controller: GenericFacade = {
  name: "Controller",
  versions: [
    ControllerV11,
    ControllerV12,
    ControllerV3,
    ControllerV4,
    ControllerV5,
    ControllerV6,
    ControllerV7,
    ControllerV8,
    ControllerV9,
  ],
};

export default Controller;
