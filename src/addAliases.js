"use strict";

function addAliases(string, aliases) {
  const stringArray = Array.from(string).map(char => {
    const aliasFound = aliases.find(alias => alias.char === char);

    return aliasFound
      ? aliasFound.value
      : char;
  });

  return stringArray.join("");
}

module.exports = addAliases;
