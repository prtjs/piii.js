"use strict";

const filter = require("./filter");
const filtersToRegex = require("./filtersToRegex");
const isArray = require("./utils/isArray");
const removeAccents = require("diacritics").remove;

class Piii {
  constructor(options = {}) {
    const {filters = [], censor = () => "*", cleaner = removeAccents, repeated = true} = options;

    if (!isArray(filters)) throw TypeError("must be an array");

    this.filters = filtersToRegex(filters, repeated);
    this.censor = typeof censor === "function" ? censor : () => censor;
    this.cleaner = typeof cleaner === "function" ? cleaner : removeAccents;
  }
  filter(string) {
    return filter(string, this.filters, this.censor, this.cleaner);
  }
}

module.exports = Piii;
