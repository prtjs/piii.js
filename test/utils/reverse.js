"use strict";

const reverse = require("../../src/utils/reverse");

describe("utils/reverse", () => {
  it("deve inverter uma array sem alterar seu valor de origem", () => {
    const array = [1, 2, 3];
    const revered = reverse(array);

    expect(revered).toEqual([3, 2, 1]);
    expect(array).not.toEqual([3, 2, 1]);
  });
});
