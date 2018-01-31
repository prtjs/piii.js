"use strict";

const arrayToRegex = require("./arrayToRegex");
const isArray = require("../utils/isArray");

function createFilter(array = []) {
  if (!array.every(isArray))
    throw new TypeError("must be an array of arrays");

  return arrayToRegex(array);
}

module.exports = createFilter;
