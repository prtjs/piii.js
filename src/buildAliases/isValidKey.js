"use strict";

function isValidKey(key) {
  return /^[a-zA-Z]$/.test(key);
}

module.exports = isValidKey;
