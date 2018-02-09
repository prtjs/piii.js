"use strict";

const filtersToRegex = require("../src/filtersToRegex");

describe("filtersToRegex", () => {
  let filters;

  beforeEach(() => {
    filters = [["foo", "bar"]];
  });

  it("deve criar um regex vazio", () => {
    expect(filtersToRegex([], false, {})).toEqual(/(?:)/);
  });
  it("deve criar um regex sem repetição e sem aliases", () => {
    expect(filtersToRegex(filters, false, {})).toEqual(/\b((foo|bar))\b/gi);
  });
  it("deve criar um regex com repetição", () => {
    expect(filtersToRegex(filters, true, {})).toEqual(/\b((f+o+o+|b+a+r+))\b/gi);
  });
  it("deve criar um regex sem repetição e com aliases", () => {
    expect(filtersToRegex(filters, false, {a: ["4"]})).toEqual(/\b((foo|b[a4]r))\b/gi);
  });
  it("deve criar um regex com repetição e com aliases", () => {
    expect(filtersToRegex(filters, true, {a: ["4"]})).toEqual(/\b((f+o+o+|b+[a4]+r+))\b/gi);
  });
});
