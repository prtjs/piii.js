"use strict";

module.exports = function (regex) {
  return regex
    .replace(/(a)/g, "[$14]")
    .replace(/(e)/g, "[$13]")
    .replace(/(i)/g, "[$11]")
    .replace(/(o)/g, "[$10]")
    .replace(/(s)/g, "[$15]")
    .replace(/(t)/g, "[$17]");
};
