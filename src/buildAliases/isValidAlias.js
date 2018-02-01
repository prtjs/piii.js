"use strict";

const isString = require("../utils/isString");
const hasOneChar = string => string.length === 1;

function isValidAlias(alias) {
  return Array.isArray(alias) && alias.every(isString) && alias.every(hasOneChar);
}

module.exports = isValidAlias;
