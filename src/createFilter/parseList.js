"use strict";

const arrayToRegex = require("./arrayToRegex");
const hasOnlyLetters = require("../utils/hasOnlyLetters");
const isArray = require("../utils/isArray");
const isBoolean = require("../utils/isBoolean");

function parseList(object) {
  const {optional, value} = object;

  if (optional && !isBoolean(optional))
    throw new TypeError("must be a boolean value");

  if (isArray(value) && !value.every(hasOnlyLetters))
    throw new Error("must has only letters");

  const regex = arrayToRegex(value);

  return regex + (optional ? "?" : "");
}

module.exports = parseList;
