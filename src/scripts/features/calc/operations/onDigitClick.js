"use strict";

export default (value, digit) => {
    if (value === 0) {
        return +digit;
    } else {
        return +(value + digit);
    }
};
