"use strict";

const isArray = require("../../src/utils/isArray");

describe("utils/isArray", () => {
  it("deve verificar se um valor é uma array", () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray("123")).toBeFalsy();
  });
});
