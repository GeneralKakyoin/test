function getCurrentScriptSource(): string | null {
	const currentScript = document.currentScript;
	if (currentScript instanceof HTMLScriptElement && currentScript.src) {
		return currentScript.src;
	}
	return null;
}

export function preflightStrictBCXLoad(label: string) {
	if (typeof window.ImportBondageCollege !== "function") {
		alert("Club not detected! Please only use this while you have Club open!");
		throw new Error("Dependency not met");
	}
	if (window.BCX_Loaded !== undefined) {
		alert("StrictBCX is already detected in current window. To reload, please refresh the window.");
		throw new Error("Already loaded");
	}
	window.BCX_Loaded = false;

	const currentScriptSource = getCurrentScriptSource();
	if (currentScriptSource) {
		(window as typeof window & { BCX_SOURCE?: string }).BCX_SOURCE ??= currentScriptSource;
	}

	console.debug(`StrictBCX: Parse start (${label})...`);
}
