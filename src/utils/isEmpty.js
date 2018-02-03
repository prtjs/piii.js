"use strict";

function isEmpty(value) {
  return value === null
    || value === undefined
    || typeof value === "boolean"
    || Object.keys(value).length === 0;
}

module.exports = isEmpty;
