"use strict";

// Construir expressão regular com os palavrões.

var regexs = require("./palavras.js");
var leetzar = require("./leetzar.js");

module.exports = function (excecoes) {
  var palavras = [];

  Object.keys(regexs).forEach(function (execao) {
    if (excecoes.indexOf(execao) === -1) {
      palavras.push(regexs[execao]);
    }
  });

  return new RegExp("\\b((" + palavras.map(function (expressao) {
    return leetzar(expressao.replace(/(\w)/g, "$1+"));
  }).join(")|(") + "))\\b", "gi");
};
