"use strict";

const toLowerCase = require("../../src/utils/toLowerCase");

describe("utils/toLowerCase", () => {
  it("deve deixar todas as strings de uma array em caixa baixa", () => {
    expect(toLowerCase(["FOO", "Bar", "bAZ"])).toEqual(["foo", "bar", "baz"]);
  });
});
