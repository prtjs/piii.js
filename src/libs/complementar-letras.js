"use strict";

var arrayUnique = require("array-unique");

/**
 * Complementar letras de uma string.
 *
 * (Pra ser bem sincero, não sei descrever essa função.)
 *
 * @param {String} string - A string que terá as letras complementadas.
 * @param {Object} letras - Objeto com os complementos.
 * @returns {String} - String com as letras complementadas
 * @example
 * complementarLetras("boceta", {
 *   "o": ["0"],
 *   "e": ["3"],
 *   "a": ["4"]
 * });
 * //=> "b(o|0)c(e|3)t(a|4)"
 */
function complementarLetras(string, complementos) {
  string = string.toString();

  if (typeof complementos !== "object") {
    return string;
  }

  var listaDeLetras = Object.keys(complementos);

  if (JSON.stringify(arrayUnique(listaDeLetras)) === JSON.stringify(listaDeLetras)) {
    throw new Error("Não pode haver itens repetidos");
  }

  listaDeLetras.forEach(function (letra) {
    if (/^\s*\w\s*$/i.test(letra)) {
      var listaDeComplementos = complementos[letra];

      if (Array.isArray(listaDeComplementos)) {
        listaDeComplementos.forEach(function (complemento) {
          complemento = complemento.toString().trim();

          if (!/^\s*\w\s*$/i.test(complemento)) {
            throw new Error("Caractere inválido");
          }
        });
      } else {
        throw new Error("Deve ser uma array");
      }
    } else {
      throw new Error("Caractere inválido");
    }

    letra = letra.toString().trim();

    complementos[letra] = complementos[letra].filter(function (letraQueSubstituirah) {
      return letraQueSubstituirah !== letra;
    });

    var letrasEmString = complementos[letra].join("|").replace(/\s/g, "");
    var letrasSubstitutas = "(" + letra + "|" + letrasEmString + ")";

    string = string.replace(new RegExp(letra, "g"), letrasSubstitutas);
  });

  return string;
}

module.exports = complementarLetras;
