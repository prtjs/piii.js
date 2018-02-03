"use strict";

const isValid = require("../../src/buildAliases/isValid");

describe("buildAliases/isValid", () => {
  it("deve validar uma lista de aliases", () => {
    expect(isValid(["a", "b", "c"])).toBeTruthy();
    expect(isValid([1, 2, 3])).toBeFalsy();
  });
});
