"use strict";

const buildAliases = require("../../src/buildAliases/");

describe("buildAliases", () => {
  it("deve retornar uma array com as informaçãoes do aliases", () => {
    const aliases = {
      a: ["1", "2", "3"],
      b: ["4", "5", "6"],
      c: ["7", "8", "9"]
    };

    expect(buildAliases(aliases)).toEqual([
      {char: "a", value: "[a123]"},
      {char: "b", value: "[b456]"},
      {char: "c", value: "[c789]"}
    ]);
  });
});
