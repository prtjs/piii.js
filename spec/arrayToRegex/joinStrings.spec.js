"use strict";

const joinStrings = require("../../src/arrayToRegex/joinStrings");

describe("arrayToRegex/joinStrings", () => {
  it("deve juntar uma array deixando em ordem decrescente e separando por '|'", () => {
    expect(joinStrings(["a", "b", "c"])).toBe("(c|b|a)");
  });
  it("deve deixar todos os valores em caixa baixa", () => {
    expect(joinStrings(["A", "B", "C"])).toBe("(c|b|a)");
  });
  it("deve remover todos os valores repetidos", () => {
    expect(joinStrings(["a", "b", "a"])).toBe("(b|a)");
    expect(joinStrings(["A", "b", "a"])).toBe("(b|a)");
  });
});
