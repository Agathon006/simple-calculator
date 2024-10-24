"use strict";

export default (state, lastValueText) => {
  let oldValue = state.value;
  switch (state.operation) {
    case "plus":
      if (state.lastValue !== null) {
        state.value = state.lastValue + state.value;
      } else {
        state.value = state.value + state.value;
      }
      state.lastValue = `${state.lastValue} + ${oldValue} = `;
      break;
    case "minus":
      if (state.lastValue !== null) {
        state.value = state.lastValue - state.value;
      } else {
        state.value = state.value - state.value;
      }
      state.lastValue = `${state.lastValue} - ${oldValue} = `;
      break;
    case "mult":
      if (state.lastValue !== null) {
        state.value = state.lastValue * state.value;
      } else {
        state.value = state.value * state.value;
      }
      state.lastValue = `${state.lastValue} * ${oldValue} = `;
      break;
    case "division":
      if (state.lastValue !== null) {
        if (state.lastValue === "Error") {
          state.value = "Error";
        } else {
          state.value = state.lastValue / state.value;
        }
      } else {
        if (state.lastValue === "Error") {
          state.value = "Error";
        } else {
          state.value = state.value / state.value;
        }
      }
      state.lastValue = `${state.lastValue} / ${oldValue} = `;
      break;
    default:
      let repeatedValue = +lastValueText.textContent.split(" ")[2];
      if (lastValueText !== "") {
        switch (lastValueText.textContent.split(" ")[1]) {
          case "+":
            state.value += repeatedValue;
            state.lastValue = `${
              state.value - repeatedValue
            } + ${repeatedValue} = `;
            break;
          case "-":
            state.value -= repeatedValue;
            state.lastValue = `${
              state.value + repeatedValue
            } - ${repeatedValue} = `;
            break;
          case "*":
            state.value *= repeatedValue;
            state.lastValue = `${
              state.value / repeatedValue
            } * ${repeatedValue} = `;
            break;
          case "/":
            state.value /= repeatedValue;
            state.lastValue = `${
              state.value * repeatedValue
            } / ${repeatedValue} = `;
            break;
        }
      }
      break;
  }
  state.operation = null;
};
