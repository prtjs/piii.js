"use strict";

const reverse = require("../utils/reverse");
const sort = array =>  Array.from(array).sort();

function joinStrings(value) {
  return `(${reverse(sort(value)).join("|")})`;
}

module.exports = joinStrings;
