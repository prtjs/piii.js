"use strict";

const hasOnlyLetters = require("../../src/utils/hasOnlyLetters");

describe("utils/hasOnlyLetters", () => {
  it("deve verificar se uma string só tem letras (sem acentos)", () => {
    expect(hasOnlyLetters("nao")).toBeTruthy();
    expect(hasOnlyLetters("não")).toBeFalsy();
    expect(hasOnlyLetters("lorem ipsum")).toBeFalsy();
    expect(hasOnlyLetters("123")).toBeFalsy();
  });
});
