"use strict";

var leetzar = require("./leetzar");
var listaDePalavroes = require("./lista");

/**
 * Junta todas as Expressões Regulares (geradas em "./lista/index.json"),
 * ignorando os palavrões que devem ser ignorados pelo filtro.
 *
 * @param {Array} [excecoes] - Lista de palavrões que devem ser ignorados.
 * @returns {RegExp} - Expressão Regular construída.
 */
function construirRegex(excecoes) {

  // Amazenará somente as regexs dos palavrões que não serão ignorados.
  var palavras = [];

  // Navega por todos os palavrões da lista.
  Object.keys(listaDePalavroes).forEach(function (palavrao) {

    // Se o palavrão não estiver na lista de excecões.
    if (excecoes.indexOf(palavrao) === -1) {
      palavras.push(listaDePalavroes[palavrao]);
    }
  });

  // Cria a regex e retorna-a.
  return new RegExp("\\b((" + palavras.map(function (expressao) {
    return leetzar(expressao.replace(/(\w)/g, "$1+"));
  }).join(")|(") + "))\\b", "gi");
}

module.exports = construirRegex;
