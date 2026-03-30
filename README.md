THIS IS A FORK OF BCX - USE ONLY IF YOU KNOW WHAT YOU"RE DOING
I RECOMMEND YOU TO USE [OFFICIAL BCX](https://jomshir98.github.io/bondage-club-extended/) unless you specifically want the strict remake in this repo.

## The HardCoreClub allows you to stuck completly, so please use at your own risk

## Install from GitHub Pages with Tampermonkey

1. Check your own BCX. Enable all modules in BCX confituration (BCX Menu -> Global). Ensure that all modules are enabled
2. Disable your current BCX instance
3. !IMPORTANT! Disable your UltraBC and BCTweaks mods
4. Install Tampermonkey:
    - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    - [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
5. Push this repo to GitHub and enable the Actions workflow so it deploys to GitHub Pages at `https://rufflan.github.io/HardCroeClub/`
6. Open the hosted loader and confirm script installation in Tampermonkey:
   - Stable: [link](https://rufflan.github.io/HardCroeClub/bcxLoader.user.js)
   - Development: [link](https://rufflan.github.io/HardCroeClub/devel/bcxLoader.user.js)
7. Reload your game

## GitHub setup

1. Keep the repository name as `HardCroeClub` if you want the URLs above to work unchanged.
2. In GitHub, enable Actions for the repo.
3. Let the `Deploy` workflow publish the root site from `master`.
4. Optionally run `Deploy (devel)` manually from the Actions tab to publish `/devel`.
5. In repository settings, ensure GitHub Pages serves from the `gh-pages` branch if GitHub asks.

## Instruction - how to install HardCoreClub with Book marks
Stable bookmark:
javascript:(function(){if(window.BCX_Loaded===undefined){let n=document.createElement(\"script\");n.setAttribute(\"language\",\"JavaScript\");n.setAttribute(\"crossorigin\","anonymous\");n.setAttribute(\"src\",\"https://rufflan.github.io/HardCroeClub/bcx.js?\"+Date.now());n.onload=()=>n.remove();document.head.appendChild(n);}})();

FUSAM local development:
Use `?fusam=http://localhost:8082/strict-bcx-addon.js&fusamType=script` after running the webpack dev server, or adapt `dist/strict-bcx.manifest.template.json` for a hosted manifest entry.
