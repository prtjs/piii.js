"use strict";

const sort = require("../../src/utils/sort");

describe("utils/sort", () => {
  it("deve ordenar uma array sem alterar seu valor original", () => {
    const array = ["b", "c", "a"];

    expect(sort(array)).toEqual(["a", "b", "c"]);
    expect(array).toEqual(["b", "c", "a"]);
  });
});
