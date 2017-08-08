"use strict";

/**
 * Recebe uma Expressão Regular (no formato de string) e adiciona números que
 * possam substituir números durante a filtragem dos palavrões.
 *
 * @param {String} regex - Expressão Regular.
 * @returns {String} - Expressão Regular com mais opções de letras.
 *
 * @example
 * leetzar("porra"); //=> (p[o0]rr[a4])
 */
function leetzar(regex) {
  return regex
    .replace(/(a)/g, "[$14]")
    .replace(/(e)/g, "[$13]")
    .replace(/(i)/g, "[$11]")
    .replace(/(o)/g, "[$10]")
    .replace(/(s)/g, "[$15]")
    .replace(/(t)/g, "[$17]");
}

module.exports = leetzar;
