import { startStrictBCX } from "./bootstrap";
import { preflightStrictBCXLoad } from "./entryHelpers";

preflightStrictBCXLoad("standalone");
startStrictBCX();
