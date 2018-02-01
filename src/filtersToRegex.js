"use strict";

const arrayToRegex = require("./arrayToRegex");
const buildAliases = require("./buildAliases");
const addAliases = require("./addAliases");
const objectIsEmpty = object => Object.keys(object).length === 0;

function filtersToRegex(filters, repeated, aliases) {
  let regex;

  regex = filters
    .map(arrayToRegex)
    .join("|");

  regex = repeated
    ? regex.replace(/(\w)/g, "$1+")
    : regex;

  if (!objectIsEmpty(aliases)) {
    regex = addAliases(regex, buildAliases(aliases));
  }

  return new RegExp(`\\b(${regex})\\b`, "g");
}

module.exports = filtersToRegex;
