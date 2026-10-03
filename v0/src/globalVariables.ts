/*global ...*/
/*eslint no-undef: "error"*/

declare const window: any;

import jQuery from "jquery";
import { STANDALONE } from "./standalone";
window.$ = window.jQuery = jQuery;

// In the standalone build there is no Rails session, no project and no embed:
// pin the values the Rails views would otherwise inject.
window.isUserLoggedIn = STANDALONE ? false : (window.isUserLoggedIn ?? false);
window.logixProjectId = STANDALONE ? undefined : (window.logixProjectId ?? undefined);

window.restrictedElements = [];
window.globalScope = undefined;
window.lightMode = false; // To be deprecated
window.projectId = undefined;
window.id = undefined;
window.loading = false; // Flag - all assets are loaded

window.embed = STANDALONE ? false : (window.embed ?? false);

window.width = undefined;
window.height = undefined;
window.DPR = window.devicePixelRatio || 1; // devicePixelRatio, 2 for retina displays, 1 for low resolution displays
