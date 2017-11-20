"use strict";

var todosOsFiltros = require("./todos-os-filtros");
var complementarLetras = require("./complementar-letras");

/**
 * Junta todas as expressões regulares (de "todos-os-filtros.js"),
 * ignorando os palavrões que devem ser ignorados pelo filtro.
 *
 * @param {Array} [excecoes] - Lista de palavrões que devem ser ignorados.
 * @returns {RegExp} - Expressão Regular construída.
 */
function construirRegex(excecoes, adicionados, complementados) {
  var filtros = todosOsFiltros(adicionados);
  var palavras = [];

  Object.keys(filtros).forEach(function (palavrao) {
    if (excecoes.indexOf(palavrao) === -1) {
      palavras.push(filtros[palavrao]);
    }
  });

  palavras = palavras.map(function (expressao) {
    return complementarLetras(expressao.replace(/(\w)/g, "$1+"), complementados);
  })

  return new RegExp("\\b((" + palavras.join(")|(") + "))\\b", "gi");
}

module.exports = construirRegex;
