"use strict";

import switchThemeListener from "./features/theme/switchThemeListener.js";
import calcListener from "./features/calc/calcListener.js";

document.addEventListener("DOMContentLoaded", () => {
  switchThemeListener();
  calcListener();
});
