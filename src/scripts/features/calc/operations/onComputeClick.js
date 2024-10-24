"use strict";

export default (state) => {
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
      break;
  }
  state.operation = null;
};
