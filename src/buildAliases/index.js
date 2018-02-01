"use strict";

const isString = require("../utils/isString");
const createRegex = require("./createRegex");
const isValidKey = require("./isValidKey");
const isValidAlias = require("./isValidAlias");

function buildAliases(aliases) {
  const keys = Object.keys(aliases);
  const values = Object.values(aliases);

  if (!keys.every(isValidKey) || !values.every(isValidAlias))
    throw new Error("invalid alias");

  return keys.map(key => {
    return {
      char: key,
      value: createRegex(key, aliases[key])
    };
  });
}

module.exports = buildAliases;
