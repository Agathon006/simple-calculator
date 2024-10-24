"use strict";

export default (state, digit) => {
  if (
    state.operation === null &&
    typeof state.lastValue === "string" &&
    state.lastValue.indexOf("=") !== -1
  ) {
    state.lastValue = null;
    state.value = 0;
  }

  if (
    state.operation &&
    (state.lastValue === null || typeof state.lastValue === "string")
  ) {
    state.lastValue = state.value;
    state.value = 0;
  }

  if (state.value === 0) {
    state.value = +digit;
  } else {
    state.value = +(state.value + digit);
  }
};
