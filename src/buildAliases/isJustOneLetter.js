"use strict";

function isJustOneLetter(string) {
  return /^[a-zA-Z]$/.test(string);
}

module.exports = isJustOneLetter;
