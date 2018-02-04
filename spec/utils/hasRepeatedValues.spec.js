"use strict";

const hasRepeatedValues = require("../../src/utils/hasRepeatedValues");

describe("utils/hasRepeatedValues", () => {
  it("deve verificar se há valores repetidos em uma array", () => {
    expect(hasRepeatedValues([1, 2, 3])).toBeFalsy();
    expect(hasRepeatedValues([1, 2, 3, 1])).toBeTruthy();
  });
});
