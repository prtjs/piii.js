"use strict";

var todosOsFiltros = require("./todos-os-filtros");

/**
 * Checar se na lista de ignorados tem todos os palavrões.
 *
 * @param {Array} ignorados - Lista de ignorados.
 * @returns {Boolean} - Informa se contém todos os palavrões.
 */
function todosTaoIgnorados(ignorados, adicionados) {
  var filtros = Object.keys(todosOsFiltros(adicionados));
  var contem = 0;

  filtros.forEach(function (palavrao) {
    if (ignorados.indexOf(palavrao) !== -1) {
      contem++;
    }
  });

  return contem === todosOsFiltros.length;
}

module.exports = todosTaoIgnorados;
