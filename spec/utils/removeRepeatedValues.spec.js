"use strict";

const removeRepeatedValues = require("../../src/utils/removeRepeatedValues");

describe("utils/removeRepeatedValues", () => {
  it("deve retornar uma array sem valores repetidos", () => {
    expect(removeRepeatedValues(["a", "b", "c", "a"])).toEqual(["a", "b", "c"]);
  });
});
