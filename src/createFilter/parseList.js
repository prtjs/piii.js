"use strict";

const hasOnlyLetters = require("./hasOnlyLetters");

function parseList(array) {
  if (!array.every(hasOnlyLetters))
    throw new Error("must has only letters");

  const list = array.join("|");

  return `(${list})`;
}

module.exports = parseList;
