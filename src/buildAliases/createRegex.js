"use strict";

const escapeStringRegexp = require("escape-string-regexp");

function createRegex(original, aliases) {
  return `[${escapeStringRegexp([original, ...aliases].join(""))}]`;
}

module.exports = createRegex;
