import { startStrictBCX } from "./bootstrap";
import { preflightStrictBCXLoad } from "./entryHelpers";

preflightStrictBCXLoad("fusam-addon");
startStrictBCX();
