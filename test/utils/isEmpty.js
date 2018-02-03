"use strict";

const isEmpty = require("../../src/utils/isEmpty");

describe("utils/isEmpty", () => {
  it("deve dizer se um valor é vazio", () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(true)).toBeTruthy();
    expect(isEmpty(false)).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty("abc")).toBeFalsy();
    expect(isEmpty(["a", "b", "c"])).toBeFalsy();
    expect(isEmpty({number: 42})).toBeFalsy();
  });
});
