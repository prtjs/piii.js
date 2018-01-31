"use strict";

function hasOnlyLetters(string) {
  return /^[a-zA-Z]+$/.test(string);
}

module.exports = hasOnlyLetters;
