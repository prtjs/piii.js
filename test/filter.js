"use strict";

const filter = require("../src/filter");
const removeAccents = require("diacritics").remove;

describe("filter", () => {
  it("deve filtrar trechos em uma string", () => {
    const string = filter(
      "foo bár baz",
      "(bar)",
      () => "#",
      removeAccents
    );

    expect(string).toBe("foo # baz");
  });
});
