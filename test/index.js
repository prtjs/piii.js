"use strict";

const Piii = require("../src/");

describe("Piii", () => {
  describe("[filter]", () => {
    it("deve filtrar as palavras", () => {
      const piii = new Piii({
        filters: [["hello"]]
      });

      expect(piii.filter("foo bar")).toBe("foo bar");
      expect(piii.filter("foo hello bar")).toBe("foo * bar");
    });
  });
  describe("[has]", () => {
    it("deve verificar se há palavras para ser filtadas", () => {
      const piii = new Piii({
        filters: [["hello"]]
      });

      expect(piii.has("foo bar")).toBeFalsy();
      expect(piii.has("foo hello bar")).toBeTruthy();
    });
  });
  describe("[options.filters]", () => {
    it("deve retornar a string quando não informado", () => {
      const piii = new Piii({});

      expect(piii.filter("foo")).toBe("foo");
    });
    it("deve aceitar filtros personalizados", () => {
      const piii = new Piii({
        filters: [["hello"]]
      });

      expect(piii.filter("foo hello bar")).toBe("foo * bar");
    });
  });
  describe("[options.aliases]", () => {
    it("deve definir aliases para determindas letras", () => {
      const piii = new Piii({
        filters: [["hello"]],
        aliases: {e: ["3", "&"]}
      });

      expect(piii.filter("hello")).toBe("*");
      expect(piii.filter("h3llo")).toBe("*");
      expect(piii.filter("h&llo")).toBe("*");
    });
  });
  describe("[options.repeated]", () => {
    it("deve ignorar letras repetidas", () => {
      const piii = new Piii({
        filters: [["hello"]]
      });

      expect(piii.filter("heeello")).toBe("*");
      expect(piii.filter("hellooo")).toBe("*");
    });
    it("deve filtrar com exatidão", () => {
      const piii = new Piii({
        filters: [["hello"]],
        repeated: false
      });

      expect(piii.filter("foo heeello bar")).not.toBe("foo * bar");
      expect(piii.filter("foo heeello bar")).toBe("foo heeello bar");
    });
  });
  describe("[options.censor]", () => {
    it("deve usar censura personalizada como string", () => {
      const piii = new Piii({
        filters: [["hello"]],
        censor: "###"
      });

      expect(piii.filter("hello")).toBe("###");
      expect(piii.filter("hello")).not.toBe("*");
    });
    it("deve usar censura personalizada como função", () => {
      const piii = new Piii({
        filters: [["hello"]],
        censor: badWord => badWord.charAt(0) + "#"
      });

      expect(piii.filter("foo hello bar")).toBe("foo h# bar");
    });
  });
  describe("[options.cleaner]", () => {
    it("deve usar o desacentuador padrão", () => {
      const piii = new Piii({
        filters: [["hello"]]
      });

      expect(piii.filter("foo héllô bar")).toBe("foo * bar");
    });
    it("deve usar um desacentuador personalizado", () => {
      const piii = new Piii({
        filters: [["hello"]],
        cleaner: string => string.replace(/é/g, "e")
      });

      expect(piii.filter("foo héllo bar")).toBe("foo * bar");
      expect(piii.filter("foo héllô bar")).toBe("foo héllô bar");
    });
  });
});
