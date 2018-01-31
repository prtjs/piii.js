"use strict";

const createFilter = require("./createFilter");

function generateRegex(filters = [], repeated) {
  const filtersInString = filters
    .map(createFilter)
    .join("|");

    const regex = repeated
      ? filtersInString.replace(/(\w)/g, "$1+")
      : filtersInString;

  return new RegExp(`\\b(${regex})\\b`, "g");
}

module.exports = generateRegex;
