import { GenericFacade } from "../../types";
import ApplicationOffersV2 from "./ApplicationOffersV2.js";
import ApplicationOffersV3 from "./ApplicationOffersV3.js";
import ApplicationOffersV4 from "./ApplicationOffersV4.js";
import ApplicationOffersV6 from "./ApplicationOffersV6.js";

export * as ApplicationOffersV2 from "./ApplicationOffersV2.js";
export * as ApplicationOffersV3 from "./ApplicationOffersV3.js";
export * as ApplicationOffersV4 from "./ApplicationOffersV4.js";
export * as ApplicationOffersV6 from "./ApplicationOffersV6.js";

const ApplicationOffers: GenericFacade = {
  name: "ApplicationOffers",
  versions: [ApplicationOffersV2, ApplicationOffersV3, ApplicationOffersV4, ApplicationOffersV6],
};

export default ApplicationOffers;
