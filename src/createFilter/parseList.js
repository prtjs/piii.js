"use strict";

const hasOnlyLetters = require("./hasOnlyLetters");

function parseList(optionals = []) {
  return (array, index) => {
    if (!array.every(hasOnlyLetters))
      throw new Error("must has only letters");

    const list = array.join("|");
    const isOptional = optionals.includes(index);

    return `(${list})${isOptional ? "?" : ""}`;
  };
}

module.exports = parseList;
