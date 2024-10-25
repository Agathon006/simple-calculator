"use strict";

export default (state, lastValueText) => {
  let oldValue = state.value;
  switch (state.operation) {
    case "plus":
      if (state.lastValue !== null && Number.isInteger(state.lastValue)) {
        state.value = state.lastValue + state.value;
      } else {
        state.value = 0 + state.value;
      }
      state.lastValue = `${
        state.lastValue === null || !Number.isInteger(state.lastValue) ? 0 : state.lastValue
      } + ${oldValue} = `;
      break;
    case "minus":
      if (state.lastValue !== null && Number.isInteger(state.lastValue)) {
        state.value = state.lastValue - state.value;
      } else {
        state.value = 0 - state.value;
      }
      state.lastValue = `${
        state.lastValue === null || !Number.isInteger(state.lastValue) ? 0 : state.lastValue
      } - ${oldValue} = `;
      break;
    case "mult":
      if (state.lastValue !== null && Number.isInteger(state.lastValue)) {
        state.value = state.lastValue * state.value;
      } else {
        state.value = 0 * state.value;
      }
      state.lastValue = `${
        state.lastValue === null || !Number.isInteger(state.lastValue) ? 0 : state.lastValue
      } * ${oldValue} = `;
      break;
    case "division":
      if (state.value === 0) {
        state.value = "Error";
      } else {
        if (state.lastValue !== null && Number.isInteger(state.lastValue)) {
          state.value = state.lastValue / state.value;
        } else {
          state.value = 0 / state.value;
        }
      }
      state.lastValue = `${
        state.lastValue === null || !Number.isInteger(state.lastValue) ? 0 : state.lastValue
      } / ${oldValue} = `;
      break;
    default:
      if (lastValueText !== "") {
        let repeatedValue = +lastValueText.textContent.split(" ")[2];
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
