"use strict";

var construirRegex = require("./libs/construir-regex");
var todosTaoIgnorados = require("./libs/todos-tao-ignorados");

/**
 * Um avançado filtro de palavrões.
 *
 * @param {Function|String} censura - Censura para os palavrões.
 * @param {Object} opcoes - Configurações do filtro.
 */
function Piii(censura, opcoes) {
  opcoes = opcoes || {};

  var censuraOriginal = censura;

  censura = censura instanceof Function
    ? censura
    : function () {
      return (censuraOriginal || "*").toString();
    }
  ;

  var adicionados = opcoes.adicionar || [];;
  var complementados = opcoes.complementar || {};;
  var desacentuar = opcoes.desacentuador || require("diacritics").remove;
  var ignorados = opcoes.ignorar || [];;

  if (!Array.isArray(adicionados)) {
    throw new Error("Deve ser uma array");
  }

  if (typeof complementados !== "object") {
    throw new Error("Deve ser um objeto");
  }

  if (typeof desacentuar !== "function") {
    throw new Error("Deve ser uma função");
  }

  if (!Array.isArray(ignorados)) {
    throw new Error("Deve ser uma array");
  }

  /**
   * Censurar os palavrões.
   *
   * @param {String} string - String que será filtrada.
   * @returns {String} - String filtrada.
   */
  function censurar(string) {
    if (todosTaoIgnorados(ignorados, adicionados)) {
      return string;
    }

    var filtro = construirRegex(ignorados, adicionados, complementados);
    var desacentuada = desacentuar(string);
    var palavroes = desacentuada.match(filtro) || [];

    if (!palavroes.length) {
      return string;
    }

    var regex = new RegExp(
      "\\b(" + palavroes.join("|") + ")\\b"
    );

    var novaString = "";
    var indice = 0;

    desacentuada
      .split(regex)
      .forEach(function (parte) {
        var parteOriginal = string.substr(indice, parte.length);

        novaString += regex.test(parte) ? censura(parteOriginal) : parteOriginal;
        indice += parte.length;
      })
    ;

    return novaString;
  }

  /**
   * Verificar se há palavrões em uma string.
   *
   * @param {String} string - String que será analisada.
   * @returns {Boolean} Informa se há ou não há.
   */
  function verificar(string) {
    return censurar(string) !== string;
  }

  this.censurar = censurar;
  this.verificar = verificar;
}

module.exports = Piii;
