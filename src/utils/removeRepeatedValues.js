"use strict";

function removeRepeatedValues(array) {
  return array.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });
}

module.exports = removeRepeatedValues;
