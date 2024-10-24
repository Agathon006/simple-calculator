"use strict";

import onDigitClick from "./operations/onDigitClick";
import onCommaClick from "./operations/onCommaClick";
import onSignChangeClick from "./operations/onSignChangeClick";
import onPercentClick from "./operations/onPercentClick";
import onDivisionClick from "./operations/onDivisionClick";
import onMultClick from "./operations/onMultClick";
import onMinusClick from "./operations/onMinusClick";
import onPlusClick from "./operations/onPlusClick";
import onComputeClick from "./operations/onComputeClick";

import formatNumToStr from "./utils/formatNumToStr.js";

export default () => {
  const state = {
    value: 0,
  };

  const valueText = document.querySelector("#value");
  const resetText = document.querySelector("#reset-text");

  document.querySelector("#calc").addEventListener("click", (e) => {
    switch (e.target.dataset.btn) {
      case "zero":
        state.value = onDigitClick(state.value, "0");
        break;
      case "one":
        state.value = onDigitClick(state.value, "1");
        break;
      case "two":
        state.value = onDigitClick(state.value, "2");
        break;
      case "three":
        state.value = onDigitClick(state.value, "3");
        break;
      case "four":
        state.value = onDigitClick(state.value, "4");
        break;
      case "five":
        state.value = onDigitClick(state.value, "5");
        break;
      case "six":
        state.value = onDigitClick(state.value, "6");
        break;
      case "seven":
        state.value = onDigitClick(state.value, "7");
        break;
      case "eight":
        state.value = onDigitClick(state.value, "8");
        break;
      case "nine":
        state.value = onDigitClick(state.value, "9");
        break;
      case "comma":
        // onCommaClick(state);
        break;
      case "reset":
        state.value = 0;
        break;
      case "sign-change":
        // onSignChangeClick(state);
        break;
      case "percent":
        // onPercentClick(state);
        break;
      case "division":
        // onDivisionClick(state);
        break;
      case "mult":
        // onMultClick(state);
        break;
      case "minus":
        // onMinusClick(state);
        break;
      case "plus":
        // onPlusClick(state);
        break;
      case "compute":
        // onComputeClick(state);
        break;
      default:
        break;
    }
    valueText.textContent = formatNumToStr(state.value);
    state.value
      ? (resetText.textContent = "C")
      : (resetText.textContent = "AC");
  });
};
