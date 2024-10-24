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
    lastValue: null,
    operation: null,
  };

  const valueText = document.querySelector("#value");
  const lastValueText = document.querySelector("#last-value");
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
        onDigitClick(state, "0");
        break;
      case "one":
        onDigitClick(state, "1");
        break;
      case "two":
        onDigitClick(state, "2");
        break;
      case "three":
        onDigitClick(state, "3");
        break;
      case "four":
        onDigitClick(state, "4");
        break;
      case "five":
        onDigitClick(state, "5");
        break;
      case "six":
        onDigitClick(state, "6");
        break;
      case "seven":
        onDigitClick(state, "7");
        break;
      case "eight":
        onDigitClick(state, "8");
        break;
      case "nine":
        onDigitClick(state, "9");
        break;
      case "comma":
        // onCommaClick(state.value);
        break;
      case "reset":
        state.value = 0;
        state.lastValue = null;
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
        onComputeClick(state);
        break;
      default:
        break;
    }

    valueText.textContent = formatNumToStr(state.value);
    lastValueText.textContent = formatNumToStr(state.lastValue);
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
