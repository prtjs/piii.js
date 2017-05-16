"use strict";

var test = require("ava");
var piii = require("./");

test(function (t) {
  // Filtragem padrão.
  t.is(piii("Que porra é essa?"), "Que * é essa?");

  // Definindo uma censura.
  t.is(piii("Que porra é essa?", "π"), "Que π é essa?");

  // Definindo uma censura (como função).
  // [Deixa somente a primeira letra e um asterisco
  // nos palavrões que são filtrados.]
  t.is(piii("Que porra é essa?", function (string) {
    return string[0].concat("*");
  }), "Que p* é essa?");

  // Ignorando "porra" como um palavrão.
  t.is(piii("Que porra é essa?", undefined, [
    "porra"
  ]), "Que porra é essa?");
});
