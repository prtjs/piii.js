"use strict";

var test = require("ava");
var piii = require("./");

test(function (t) {
  // Filtragem padrão.
  t.is(piii("Que porra é essa?"), "Que * é essa?");

  // Definindo uma censura.
  t.is(piii("Que porra é essa?", "π"), "Que π é essa?");

  // Definindo uma censura (passando como função).
  // [Substitui cada caractere do palavrão por um asterisco.]
  t.is(piii("Que porra é essa?", function (string) {
    return "*".repeat(string.length);
  }), "Que ***** é essa?");

  // Ignorando "porra" como um palavrão.
  t.is(piii("Que porra é essa?", undefined, [
    "porra"
  ]), "Que porra é essa?");
});
