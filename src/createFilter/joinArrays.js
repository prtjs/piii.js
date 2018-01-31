"use strict";

const reverse = require("../utils/reverse");

function joinArrays(value) {
  return `(${reverse(value).join("|")})`;
}

module.exports = joinArrays;
