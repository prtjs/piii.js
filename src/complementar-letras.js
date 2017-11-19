"use strict";

/**
 * Complementar letras de uma string.
 *
 * @param {String} string - A string que terá as letras complementadas.
 * @param {Object} letras - Objeto com os complementos.
 * @returns {String} - String com as letras complementadas
 * @example
 * complementarLetras("amores", {
 *   "a": ["2", "4"],
 *   "o": ["0"],
 *   "e": ["3"],
 *   "s": ["5", "z"]
 * });
 * //=> "(a|2|4)m(o|0)r(e|3)(s|5|z)"
 */
function complementarLetras(string, complementos) {
  string = string.toString();

  // Se não for um objeto, então não terá o
  // que complementar na string.
  if (typeof complementos !== "object") {
    return string;
  }

  var listaDeLetras = Object.keys(complementos);

  /**
   * Função para verificar se há itens repetidos em uma array.
   *
   * Obtida no stackoverflow, questão 19655975.
   *
   * [ADAPTADA]
   */
  function checkIfArrayIsUnique(array) {
    array.sort();

    for (var i = 1; i < array.length; i++ ) {
      if (array[i - 1] === array[i]) {
        return false;
      }
    }

    return true;
  }

  // Verificar se há itens repetidos.
  if (!checkIfArrayIsUnique(listaDeLetras)) {
    throw new Error("Não pode haver itens repetidos");
  }

  // Analisará todas as letras que foram adicionadas.
  listaDeLetras.forEach(function (letra) {

    // Se for uma letra válida.
    if (/^\s*\w\s*$/i.test(letra)) {
      var listaDeComplementos = complementos[letra];

      // Verifica se os dados da array também são válidos.
      if (Array.isArray(listaDeComplementos)) {
        listaDeComplementos.forEach(function (complemento) {
          complemento = complemento
            .toString()
            .trim()
          ;

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
  });

  // Substitui os dados da string.
  listaDeLetras.forEach(function (letra) {
    letra = letra
      .toString()
      .trim()
    ;

    // Se dentro da array haver a mesma letra, ela será removida aqui.
    complementos[letra] = complementos[letra].filter(function (letraQueSubstituirah) {
      return letraQueSubstituirah !== letra;
    });

    var letrasEmString = complementos[letra]
      .join("|")
      .replace(/\s/g, "");

    var letrasSubstitutas = "(" + letra + "|" + letrasEmString + ")";

    var re = new RegExp(letra, "g");

    // Atualizar a string.
    string = string.replace(re, letrasSubstitutas);
  });

  return string;
}

module.exports = complementarLetras;
