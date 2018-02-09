"use strict";

const reverse = require("../utils/reverse");
const removeRepeatedValues = require("../utils/removeRepeatedValues");
const toLowerCase = require("../utils/toLowerCase");
const sort = require("../utils/sort");

function joinStrings(value) {
  return `(${reverse(sort(removeRepeatedValues(toLowerCase(value)))).join("|")})`;
}

module.exports = joinStrings;
