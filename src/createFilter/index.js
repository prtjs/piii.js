"use strict";

const parseList = require("./parseList");
const isObject = require("../utils/isObject");

function createFilter(array = []) {
  if (!array.every(isObject))
    throw new TypeError("must be only objects");

  return array
    .map(parseList)
    .join("");
}

module.exports = createFilter;
