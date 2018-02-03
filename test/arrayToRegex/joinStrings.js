"use strict";

const joinStrings = require("../../src/arrayToRegex/joinStrings");

describe("arrayToRegex/joinStrings", () => {
  it("deve juntar uma array deixando em ordem decrescente e separando por '|'", () => {
    expect(joinStrings(["a", "b", "c"])).toBe("(c|b|a)");
  });
});
