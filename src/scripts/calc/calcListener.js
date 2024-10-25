"use strict";

import onDigitClick from "./operations/onDigitClick.js";
import onCommaClick from "./operations/onCommaClick.js";
import onComputeClick from "./operations/onComputeClick.js";

import formatNumToStr from "../utils/formatNumToStr.js";

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

    if (valueText.textContent === "Error") {
      state.value = 0;
      state.lastValue = null;
      state.operation = null;
      valueText.textContent = formatNumToStr(state.value);
      lastValueText.textContent = formatNumToStr(state.lastValue);
      state.value
        ? (resetText.textContent = "C")
        : (resetText.textContent = "AC");
      return;
    }

    switch (e.target.dataset.btn) {
      case "zero":
        onDigitClick(state, valueText, "0");
        break;
      case "one":
        onDigitClick(state, valueText, "1");
        break;
      case "two":
        onDigitClick(state, valueText, "2");
        break;
      case "three":
        onDigitClick(state, valueText, "3");
        break;
      case "four":
        onDigitClick(state, valueText, "4");
        break;
      case "five":
        onDigitClick(state, valueText, "5");
        break;
      case "six":
        onDigitClick(state, valueText, "6");
        break;
      case "seven":
        onDigitClick(state, valueText, "7");
        break;
      case "eight":
        onDigitClick(state, valueText, "8");
        break;
      case "nine":
        onDigitClick(state, valueText, "9");
        break;
      case "comma":
        onCommaClick(state, valueText);
        break;
      case "reset":
        state.value = 0;
        state.lastValue = null;
        state.operation = null;
        break;
      case "sign-change":
        state.value = -state.value;
        break;
      case "percent":
        state.value = state.value / 100;
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
        onComputeClick(state, lastValueText);
        break;
      default:
        break;
    }

    if (e.target.dataset.btn !== "comma") {
      valueText.textContent = formatNumToStr(state.value);
    }
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
