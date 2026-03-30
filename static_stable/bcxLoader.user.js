// ==UserScript==
// @name         StrictBCX Current (Loader)
// @namespace    StrictBCX
// @version      1.1.12
// @description  Loads the current StrictBCX remake from GitHub Pages
// @author       Rufflan & contributors
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-asia\.com\/club\/R\d+(\/((index|\d+)\.html)?)?$/
// @homepageURL  https://github.com/GeneralKakyoin/test
// @supportURL   https://github.com/GeneralKakyoin/test/issues
// @source       https://github.com/GeneralKakyoin/test
// @updateURL    https://generalkakyoin.github.io/test/bcxLoader.user.js
// @downloadURL  https://generalkakyoin.github.io/test/bcxLoader.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

// eslint-disable-next-line no-restricted-globals
setTimeout(
	function () {
		if (window.BCX_Loaded === undefined) {
			const n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://generalkakyoin.github.io/test/bcx.js");
			n.onload = () => n.remove();
			document.head.appendChild(n);
		}
	},
	2000
);
