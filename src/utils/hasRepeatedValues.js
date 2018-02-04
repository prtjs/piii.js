"use strict";

function hasRepeatedValues(array) {
  return !array.every(function (value, index, self) {
    return self.indexOf(value) === self.lastIndexOf(value);
  });
}

module.exports = hasRepeatedValues;
