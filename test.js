"use strict";

var test = require("ava");
var piii = require("./");

test("piii", function (t) {
  t.is(piii("Vá tomar no cú!"), "Vá tomar no *!");
  t.is(piii("Vá se ⓕⓞⓓⓔⓡ!"), "Vá se *!");
  t.is(piii("Que m3rd4."), "Que *.");
  t.is(piii("Filho da ᵽṻțặ!"), "Filho da *!");
  t.is(piii("Que porrrrra é essa?"), "Que * é essa?");
});
