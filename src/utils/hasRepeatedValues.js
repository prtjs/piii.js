"use strict";

function hasRepeatedValues(array) {
  return !array.every((value, index, self) => {
    return self.indexOf(value) === self.lastIndexOf(value);
  });
}

module.exports = hasRepeatedValues;
