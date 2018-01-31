"use strict";

const arrayToRegex = require("./arrayToRegex");

function filtersToRegex(filters = [], repeated) {
  const filtersInString = filters
    .map(arrayToRegex)
    .join("|");

    const regex = repeated
      ? filtersInString.replace(/(\w)/g, "$1+")
      : filtersInString;

  return new RegExp(`\\b(${regex})\\b`, "g");
}

module.exports = filtersToRegex;
