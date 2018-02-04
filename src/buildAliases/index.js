"use strict";

const isString = require("../utils/isString");
const createRegex = require("./createRegex");
const isJustOneLetter = require("./isJustOneLetter");
const isValid = require("./isValid");

function buildAliases(aliases) {
  const keys = Object.keys(aliases);
  const values = Object.values(aliases);

  if (!keys.every(isJustOneLetter) || !values.every(isValid))
    throw new Error("invalid alias");

  return keys.map(key => {
    if (aliases[key].includes(key))
      throw new Error("invalid alias");

    return {
      char: key,
      value: createRegex(key, aliases[key])
    };
  });
}

module.exports = buildAliases;
