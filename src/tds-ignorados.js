"use strict";

var listaDePalavroes = require("./lista");

listaDePalavroes = Object.keys(listaDePalavroes);

/**
 * Checar se na lista de exceções tem todos os palavrões.
 *
 * @param {Array} exececoes - Lista de exceções.
 * @returns {Boolean} - Informa se contém todos os palavrões.
 */
function tdsIgnorados(exececoes) {
  var contem = 0;

  listaDePalavroes.forEach(function (palavrao) {
    if (exececoes.indexOf(palavrao) !== -1) {
      contem++;
    }
  });

  return contem === listaDePalavroes.length;
}

module.exports = tdsIgnorados;
