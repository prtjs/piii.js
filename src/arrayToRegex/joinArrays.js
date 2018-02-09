"use strict";

const reverse = require("../utils/reverse");
const removeRepeatedValues = require("../utils/removeRepeatedValues");

function joinArrays(value) {
  return `(${reverse(removeRepeatedValues(value)).join("|")})`;
}

module.exports = joinArrays;
