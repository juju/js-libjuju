import { GenericFacade } from "../../types";
import CharmDownloaderV1 from "./CharmDownloaderV1.js";

export * as CharmDownloaderV1 from "./CharmDownloaderV1.js";

const CharmDownloader: GenericFacade = {
  name: "CharmDownloader",
  versions: [CharmDownloaderV1],
};

export default CharmDownloader;
