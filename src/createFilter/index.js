"use strict";

const parseList = require("./parseList");
const isArray = require("../utils/isArray");

function createFilter(array = []) {
  if (!array.every(isArray))
    throw new TypeError("must be only arrays");

  return array
    .map(parseList)
    .join("");
}

module.exports = createFilter;
