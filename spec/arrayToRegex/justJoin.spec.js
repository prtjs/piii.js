"use strict";

const justJoin = require("../../src/arrayToRegex/justJoin");

describe("arrayToRegex/justJoin", () => {
  it("deve apenas juntar uma array", () => {
    expect(justJoin(["foo", "bar", "baz"])).toBe("(foobarbaz)");
  });
});
