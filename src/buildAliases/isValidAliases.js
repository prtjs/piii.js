"use strict";

const isArray = require("../utils/isArray");
const isString = require("../utils/isString");
const hasOneChar = string => string.length === 1;

function isValidAliases(aliases) {
  return isArray(aliases)
    && aliases.every(isString)
    && aliases.every(hasOneChar);
}

module.exports = isValidAliases;
