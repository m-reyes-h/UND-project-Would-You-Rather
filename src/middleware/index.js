import logger from "./logger";
import crashReport from "./crashReport";

import { applyMiddleware } from "redux";

export default applyMiddleware(logger, crashReport);
