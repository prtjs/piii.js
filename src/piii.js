"use strict";

var construirRegex = require("./construir-regex");
var desacentuar = require("diacritics").remove;

module.exports = function (string, censura, excecoes) {
  string = string.toString();

  var censuraOriginal = censura;

  censura = typeof censura === "function"
    ? censura
    : function () {
      return (censuraOriginal || "*").toString();
    };

  excecoes = Array.isArray(excecoes)
    ? excecoes
    : [];

  var filtro = construirRegex(excecoes);
  var desacentuada = desacentuar(string);
  var palavroes = desacentuada.match(filtro) || [];

  if (!palavroes.length) {
    return string;
  }

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
