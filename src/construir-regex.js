"use strict";

var leetzar = require("./1337izar");
var listaDePalavroes = require("./lista");

module.exports = function (excecoes) {
  var palavras = [];

  Object.keys(listaDePalavroes).forEach(function (execao) {
    if (excecoes.indexOf(execao) === -1) {
      palavras.push(listaDePalavroes[execao]);
    }
  });

  return new RegExp("\\b((" + palavras.map(function (expressao) {
    return leetzar(expressao.replace(/(\w)/g, "$1+"));
  }).join(")|(") + "))\\b", "gi");
};
