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

  const plusBtn = document.querySelector("#plusBtn");
  const minusBtn = document.querySelector("#minusBtn");
  const multBtn = document.querySelector("#multBtn");
  const divisionBtn = document.querySelector("#divisionBtn");

  document.querySelector("#calc").addEventListener("click", (e) => {
    
    divisionBtn.classList.remove('active');
    multBtn.classList.remove('active');
    minusBtn.classList.remove('active');
    plusBtn.classList.remove('active');

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
        // state.value = onCommaClick(state.value);
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
        divisionBtn.classList.add('active');
        // onDivisionClick(state);
        break;
      case "mult":
        multBtn.classList.add('active');
        // onMultClick(state);
        break;
      case "minus":
        minusBtn.classList.add('active');
        // onMinusClick(state);
        break;
      case "plus":
        plusBtn.classList.add('active');
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
