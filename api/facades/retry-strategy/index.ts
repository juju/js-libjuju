import { GenericFacade } from "../../types";
import RetryStrategyV1 from "./RetryStrategyV1.js";

export * as RetryStrategyV1 from "./RetryStrategyV1.js";

const RetryStrategy: GenericFacade = {
  name: "RetryStrategy",
  versions: [RetryStrategyV1],
};

export default RetryStrategy;
