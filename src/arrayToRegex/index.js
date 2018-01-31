"use strict";

const justJoin = require("./justJoin");
const joinArrays = require("./joinArrays");
const joinStrings = require("./joinStrings")
const reverse = require("../utils/reverse");
const isArray = require("../utils/isArray");
const isString = require("../utils/isString");
const hasOnlyLetters = require("../utils/hasOnlyLetters");

function arrayToRegex(value) {
  if (isString(value)) {
    if (hasOnlyLetters(value)) return value;

    throw new Error("must have only letters");
  }

  if (isArray(value)) {
    if (value.every(isString)) {
      if (value.every(hasOnlyLetters)) return joinStrings(value);

      throw new Error("must have only letters");
    }

    if (value.every(isArray)) return joinArrays(value.map(arrayToRegex));

    return justJoin(value.map(arrayToRegex));
  }

  throw new TypeError("must be a string or an array");
}

module.exports = arrayToRegex;
