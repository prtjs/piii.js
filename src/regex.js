"use strict";

// Construir expressão regular.

var regexs = require("./palavras.js");
var leetzar = require("./leetzar.js");

module.exports = function (excecoes) {

  // Navega pela array das exceções.
  for (var i in excecoes) {

    // Se algumas exceção informada não estiver
    // dentro da lista de expressões.
    if (Object.keys(regexs).indexOf(excecoes[i]) === -1) {
      throw new Error("Exceção inválida");
    }
  }

  // Array com as expressões
  // que serão usadas no filtro.
  var palavras = [];

  // Navega por todas as expressões.
  Object.keys(regexs).forEach(function (execao) {
    if (excecoes.indexOf(execao) === -1) {
      palavras.push(regexs[execao]);
    }
  });

  palavras = palavras.map(function (expressao) {
    return leetzar(expressao.replace(/(\w)/g, "$1+"));
  });

  return new RegExp("\\b((" + palavras.join(")|(") + "))\\b", "gi");
};
