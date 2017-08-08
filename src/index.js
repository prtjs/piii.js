"use strict";

var construirRegex = require("./construir-regex");
var desacentuar = require("diacritics").remove;

/**
 * Veja <https://github.com/theuves/piii.js#readme>.
 *
 * @param {String} string - String para ser filtrada.
 * @param {String|Function} [censura] - Censura para os palavrões.
 * @param {Array} [excecoes] - Palavrões que devem ser ignorados.
 * @returns {String} - String filtrada.
 */
function piii(string, censura, excecoes) {
  string = string.toString();

  var censuraOriginal = censura;

  censura = censura instanceof Function
    ? censura
    : function () {
      return (censuraOriginal || "*").toString();
    };

  excecoes = Array.isArray(excecoes)
    ? excecoes
    : [];

  // Constrói as Expressões Regulares, remove todos os caracteres especiais,
  // e filtra todos os palavrões (separando-os em uma Array).
  var filtro = construirRegex(excecoes);
  var desacentuada = desacentuar(string);
  var palavroes = desacentuada.match(filtro) || [];

  // Se não for encontrado nenhum palavrão.
  if (!palavroes.length) {
    return string;
  }

  // Cria uma Expressão Regular somente com os palavrões filtrados.
  var regex = new RegExp("\\b(" + palavroes.join("|") + ")\\b");

  var novaString = "";
  var indice = 0;

  desacentuada.split(regex).forEach(function (parte) {
    var parteOriginal = string.substr(indice, parte.length);

    novaString += regex.test(parte)
      ? censura(parteOriginal)
      : parteOriginal;

    indice += parte.length;
  });

  return novaString;
};

module.exports = piii;
