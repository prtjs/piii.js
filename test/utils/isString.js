"use strict";

const isString = require("../../src/utils/isString");

describe("utils/isString", () => {
  it("deve verificar se um valor é uma string", () => {
    expect(isString("foo")).toBeTruthy();
    expect(isString([1, 2, 3])).toBeFalsy();
  });
});
