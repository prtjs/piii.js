"use strict";

const addAliases = require("../src/addAliases");

describe("addAliases", () => {
  it("deve substituir caracteres para corresponderem com outros", () => {
    const aliases = [
      {char: "a", value: "[a2]"},
      {char: "e", value: "[e3]"}
    ];

    expect(addAliases("ae", aliases)).toBe("[a2][e3]");
  });
});
