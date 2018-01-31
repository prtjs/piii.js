"use strict";

const hasOnlyLetters = require("../utils/hasOnlyLetters");
const isArray = require("../utils/isArray");

function parseList(object) {
  if (isArray(object.value) && !object.value.every(hasOnlyLetters))
    throw new Error("must has only letters");

  const list = object.value.join("|");
  const optional = object.optional;

  return `(${list})${optional ? "?" : ""}`;
}

module.exports = parseList;
