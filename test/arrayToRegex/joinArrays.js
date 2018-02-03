"use strict";

const joinArrays = require("../../src/arrayToRegex/joinArrays");

describe("arrayToRegex/joinArrays", () => {
  it("deve juntar uma array invertendo e separando por '|'", () => {
    expect(joinArrays(["foo", "bar", "baz"])).toBe("(baz|bar|foo)");
  });
});
