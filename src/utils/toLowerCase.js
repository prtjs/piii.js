"use strict";

const isString = require("./isString");

function toLowerCase(array) {
  return array.map(value => {
    return isString(value)
      ? value.toLowerCase()
      : value;
  });
}

module.exports = toLowerCase;
