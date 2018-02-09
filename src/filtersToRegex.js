"use strict";

const arrayToRegex = require("./arrayToRegex");
const buildAliases = require("./buildAliases");
const addAliases = require("./addAliases");
const objectIsEmpty = require("./utils/isEmpty");

function filtersToRegex(filters, repeated, aliases) {
  if (objectIsEmpty(filters)) return RegExp();

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

  return new RegExp(`\\b(${regex})\\b`, "gi");
}

module.exports = filtersToRegex;
