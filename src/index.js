"use strict";

const filter = require("./filter");
const generateRegex = require("./generateRegex");
const isArray = require("./utils/isArray");
const removeAccents = require("diacritics").remove;

class Piii {
  constructor(options = {}) {
    const {filters = [], censor = () => "*", cleaner = removeAccents} = options;

    if (!isArray(filters)) throw TypeError("must be an array");

    this.filters = generateRegex(filters);
    this.censor = typeof censor === "function" ? censor : () => censor;
    this.cleaner = typeof cleaner === "function" ? cleaner : removeAccents;
  }
  filter(string) {
    return filter(string, this.filters, this.censor, this.cleaner);
  }
}

module.exports = Piii;
