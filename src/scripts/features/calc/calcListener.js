"use strict";

import onDigitClick from "./operations/onDigitClick";
import onCommaClick from "./operations/onCommaClick";
import onResetClick from "./operations/onResetClick";
import onSignChangeClick from "./operations/onSignChangeClick";
import onPercentClick from "./operations/onPercentClick";
import onDivisionClick from "./operations/onDivisionClick";
import onMultClick from "./operations/onMultClick";
import onMinusClick from "./operations/onMinusClick";
import onPlusClick from "./operations/onPlusClick";
import onComputeClick from "./operations/onComputeClick";

export default () => {
  const calc = document.querySelector("#calc");

  calc.addEventListener("click", (e) => {
    switch (e.target.dataset.btn) {
      case "zero":
        onDigitClick('0');
        break;
      case "one":
        onDigitClick('1');
        break;
      case "two":
        onDigitClick('2');
        break;
      case "three":
        onDigitClick('3');
        break;
      case "four":
        onDigitClick('4');
        break;
      case "five":
        onDigitClick('5');
        break;
      case "six":
        onDigitClick('6');
        break;
      case "seven":
        onDigitClick('7');
        break;
      case "eight":
        onDigitClick('8');
        break;
      case "nine":
        onDigitClick('9');
        break;
      case "comma":
        onCommaClick();
        break;
      case "reset":
        onResetClick();
        break;
      case "sign-change":
        onSignChangeClick();
        break;
      case "percent":
        onPercentClick();
        break;
      case "division":
        onDivisionClick();
        break;
      case "mult":
        onMultClick();
        break;
      case "minus":
        onMinusClick();
        break;
      case "plus":
        onPlusClick();
        break;
      case "compute":
        onComputeClick();
        break;
      default:
        break;
    }
  });
};
