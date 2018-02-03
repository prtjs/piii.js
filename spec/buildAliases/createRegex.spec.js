"use strict";

const createRegex = require("../../src/buildAliases/createRegex");

describe("buildAliases/createRegex", () => {
  it("deve retornar uma classe de caracteres com base num caracter e numa array", () => {
    expect(createRegex("a", ["2", "4"])).toBe("[a24]");
  });
  it("deve adicionar '\\' antes dos caracteres especiais", () => {
    expect(createRegex("c", "[")).toBe("[c\\[]");
  });
});
