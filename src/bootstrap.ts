import { InfoBeep, init_findBCXSource } from "./utilsClub";
import { hookFunction } from "./patching";
import { init, loginInit } from "./main";
import { isObject } from "./utils";

import "./modules";

export function startStrictBCX() {
	init_findBCXSource();

	console.debug("StrictBCX: Init wait");
	if (CurrentScreen == null || CurrentScreen === "Login") {
		hookFunction("LoginResponse", 0, (args, next) => {
			console.debug("StrictBCX: Init LoginResponse caught", args);
			next(args);
			const response = args[0];
			if (isObject(response) && typeof response.Name === "string" && typeof response.AccountName === "string") {
				loginInit(args[0]);
			}
		});
		InfoBeep("StrictBCX Ready!");
		console.log("StrictBCX Ready!");
	} else {
		console.debug("StrictBCX: Already logged in, init");
		init();
	}
}
