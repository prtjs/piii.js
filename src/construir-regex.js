"use strict";

var todosOsFiltros = require("./todos-os-filtros");
var complementarLetras = require("./complementar-letras");

/**
 * Junta todas as Expressões Regulares (geradas em "./lista/index.json"),
 * ignorando os palavrões que devem ser ignorados pelo filtro.
 *
 * @param {Array} [excecoes] - Lista de palavrões que devem ser ignorados.
 * @returns {RegExp} - Expressão Regular construída.
 */
function construirRegex(excecoes, adicionados, complementados) {
  var filtros = todosOsFiltros(adicionados);

  // Amazenará somente as regexs dos palavrões que não serão ignorados.
  var palavras = [];

  // Navega por todos os palavrões da lista.
  Object.keys(filtros).forEach(function (palavrao) {

    // Se o palavrão não estiver na lista de excecões.
    if (excecoes.indexOf(palavrao) === -1) {
      palavras.push(filtros[palavrao]);
    }
  });

  // Cria a regex e retorna-a.
  return new RegExp("\\b((" + palavras.map(function (expressao) {
    return complementarLetras(expressao.replace(/(\w)/g, "$1+"), complementados);
  }).join(")|(") + "))\\b", "gi");
}

module.exports = construirRegex;
