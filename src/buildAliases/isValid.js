"use strict";

const isArray = require("../utils/isArray");
const isString = require("../utils/isString");
const isJustOneChar = char => char.length === 1;

function isValid(array) {
  return isArray(array)
    && array.every(isString)
    && array.every(isJustOneChar);
}

module.exports = isValid;
