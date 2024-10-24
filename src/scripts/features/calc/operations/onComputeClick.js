"use strict";

export default (state) => {
  switch (state.operation) {
    case "plus":
      return state.value + state.value;
    case "minus":
      return state.value - state.value;
    case "mult":
      return state.value * state.value;
    case "division":
      return state.value === 0 ? 'Error' : state.value / state.value;
    default:
      return state.value;
  }
};
