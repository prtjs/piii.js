"use strict";

const arrayToRegex = require("../../src/arrayToRegex");

describe("arrayToRegex", () => {
  it("deve retornar uma string", () => {
    expect(arrayToRegex("foo")).toBe("foo");
  });
  it("deve criar expressões regulares", () => {
    expect(arrayToRegex(["a", "b", "c"])).toBe("(c|b|a)");
    expect(arrayToRegex(["a", ["b", "c"]])).toBe("(a(c|b))");
    expect(arrayToRegex([["a"], ["b", "c"]])).toBe("((c|b)|(a))");
  });
});
