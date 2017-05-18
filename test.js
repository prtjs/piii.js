"use strict";

var test = require("ava");
var piii = require("./");

test(function (t) {

  // Filtragem padrão.
  t.is(piii("Que porra é essa?"), "Que * é essa?");

  // Definindo uma censura.
  t.is(piii("Que porra é essa?", "π"), "Que π é essa?");

  // Definindo uma censura (como função).
  t.is(piii("Que porra é essa?", function (string) {
    return string.strike();
  }), "Que <strike>porra</strike> é essa?");

  // Ignorando "porra" como um palavrão.
  t.is(piii("Que porra é essa?", undefined, [
    "porra"
  ]), "Que porra é essa?");
});
