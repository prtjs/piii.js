"use strict";

function generateRegex(filters = []) {
  const regexs = filters.join("|");

  return new RegExp(`\\b(${regexs})\\b`, "g");
}

module.exports = generateRegex;
