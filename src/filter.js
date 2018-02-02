"use strict";

function filter(string, regex, censor, clear) {
  const match = clear(string).match(regex);

  if (match === null) return string;

  const badWords = RegExp(`\\b(${match.join("|")})\\b`);

  return clear(string).split(badWords).map((val, index, array) => {
    if (badWords.test(val)) return censor(val);

    const start = array.slice(0, index).join("").length;
    const end = val.length;

    return string.substr(start, end);
  }).join("");
}

module.exports = filter;
