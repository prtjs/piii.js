"use strict";

const createFilter = require("./createFilter");

function generateRegex(filters = []) {
  const filtersInRegex = filters.map(createFilter);
  const regex = filtersInRegex.join("|");

  return new RegExp(`\\b(${regex})\\b`, "g");
}

module.exports = generateRegex;
