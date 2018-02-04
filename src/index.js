"use strict";

const filter = require("./filter");
const filtersToRegex = require("./filtersToRegex");
const isArray = require("./utils/isArray");
const removeAccents = require("diacritics").remove;

class Piii {
  constructor(options = {}) {
    const {
      aliases = {},
      filters = [],
      repeated = true,
      censor = () => "*",
      cleaner = removeAccents} = options;

    if (!isArray(filters)) throw TypeError("must be an array");

    this._filters = filtersToRegex(filters, repeated, aliases);
    this._censor = typeof censor === "function" ? censor : () => censor;
    this._cleaner = typeof cleaner === "function" ? cleaner : removeAccents;
  }
  filter(string) {
    return filter(string, this._filters, this._censor, this._cleaner);
  }
  has(string) {
    return this.filter(string) !== string;
  }
}

module.exports = Piii;
