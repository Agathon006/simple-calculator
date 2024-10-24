"use strict";

import onDigitClick from "./operations/onDigitClick";
import onCommaClick from "./operations/onCommaClick";
import onSignChangeClick from "./operations/onSignChangeClick";
import onPercentClick from "./operations/onPercentClick";
import onComputeClick from "./operations/onComputeClick";

import formatNumToStr from "./utils/formatNumToStr.js";

export default () => {
  const state = {
    value: 0,
    operation: null,
  };

  const valueText = document.querySelector("#value");
  const resetText = document.querySelector("#reset-text");

  const plusBtn = document.querySelector("#plusBtn");
  const minusBtn = document.querySelector("#minusBtn");
  const multBtn = document.querySelector("#multBtn");
  const divisionBtn = document.querySelector("#divisionBtn");

  document.querySelector("#calc").addEventListener("click", (e) => {
    divisionBtn.classList.remove("active");
    multBtn.classList.remove("active");
    minusBtn.classList.remove("active");
    plusBtn.classList.remove("active");

    switch (e.target.dataset.btn) {
      case "zero":
        state.value = onDigitClick(state.value, "0");
        state.operation = null;
        break;
      case "one":
        state.value = onDigitClick(state.value, "1");
        state.operation = null;
        break;
      case "two":
        state.value = onDigitClick(state.value, "2");
        state.operation = null;
        break;
      case "three":
        state.value = onDigitClick(state.value, "3");
        state.operation = null;
        break;
      case "four":
        state.value = onDigitClick(state.value, "4");
        state.operation = null;
        break;
      case "five":
        state.value = onDigitClick(state.value, "5");
        state.operation = null;
        break;
      case "six":
        state.value = onDigitClick(state.value, "6");
        state.operation = null;
        break;
      case "seven":
        state.value = onDigitClick(state.value, "7");
        state.operation = null;
        break;
      case "eight":
        state.value = onDigitClick(state.value, "8");
        state.operation = null;
        break;
      case "nine":
        state.value = onDigitClick(state.value, "9");
        state.operation = null;
        break;
      case "comma":
        // state.value = onCommaClick(state.value);
        break;
      case "reset":
        state.value = 0;
        state.operation = null;
        break;
      case "sign-change":
        // onSignChangeClick(state.value);
        break;
      case "percent":
        // onPercentClick(state.value);
        break;
      case "division":
        state.operation = "division";
        break;
      case "mult":
        state.operation = "mult";
        break;
      case "minus":
        state.operation = "minus";
        break;
      case "plus":
        state.operation = "plus";
        break;
      case "compute":
        state.value = onComputeClick(state);
        state.operation = null;
        break;
      default:
        break;
    }

    valueText.textContent = formatNumToStr(state.value);
    state.value
      ? (resetText.textContent = "C")
      : (resetText.textContent = "AC");

    switch (state.operation) {
      case "plus":
        plusBtn.classList.add("active");
        break;
      case "minus":
        minusBtn.classList.add("active");
        break;
      case "mult":
        multBtn.classList.add("active");
        break;
      case "division":
        divisionBtn.classList.add("active");
        break;
      default:
        break;
    }
  });
};
