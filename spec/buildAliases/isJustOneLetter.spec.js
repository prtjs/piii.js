"use strict";

const isJustOneLetter = require("../../src/buildAliases/isJustOneLetter");;

describe("buildAliases/isJustOneLetter", () => {
  it("deve verificar se uma string tem somente uma letra", () => {
    expect(isJustOneLetter("e")).toBeTruthy();
    expect(isJustOneLetter("é")).toBeFalsy();
    expect(isJustOneLetter("&")).toBeFalsy();
    expect(isJustOneLetter("eee")).toBeFalsy();
  });
});
