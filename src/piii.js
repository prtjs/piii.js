"use strict";

var desacentuar = require("diacritics").remove;
var regex = require("./regex.js");

module.exports = function (objeto) {
  var censura = objeto.censura || "*";
  var excecoes = objeto.excecoes || [];

  censura = censura.toString();
  excecoes = Array.isArray(excecoes)
    ? excecoes
    : [];

  // Expressão regular para filtrar palavrões.
  var filtro = regex(excecoes);

  this.filtrar = function (string, substituto) {
    string = string.toString();

    substituto = typeof substituto === "function"
      ? substituto
      : function () {
      return censura;
    };

    var desacentuada = desacentuar(string);

    // Lista de palavrões (sem acentos).
    var listaDePalavroes = desacentuada.match(filtro) || [];

    if (!listaDePalavroes.length) {
      return string;
    }

    // Expressão regular somente com os palavrões encontrados.
    var palavroesRegex = "\\b(" + listaDePalavroes.join("|") + ")\\b";
    palavroesRegex = new RegExp(palavroesRegex);

    var dividido = desacentuada.split(palavroesRegex);
    var nova = "";

    var indice = 0;

    dividido.forEach(function (parte) {
      var trecho = string.substring(indice, indice + parte.length)

      nova += palavroesRegex.test(parte)
        ? substituto(trecho)
        : trecho;

      indice += parte.length;
    });

    return nova;
  }
};
