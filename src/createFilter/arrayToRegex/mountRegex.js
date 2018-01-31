"use strict";

const isString = require("../../utils/isString");
const isArray = require("../../utils/isArray");

function mountRegex(value) {
  if (isString(value)) return value;

  if (isArray(value)) return join(
    value.every(isString)
      ? value
      : value.map(arrayToRegex)
  );

  throw new TypeError("must be a string or an array");
}

module.exports = mountRegex;
