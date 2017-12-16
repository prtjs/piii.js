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

  var adicionados = opcoes.adicionar || [];
  var complementados = opcoes.complementar || {};
  var desacentuar = opcoes.desacentuador || require("diacritics").remove;
  var ignorados = opcoes.ignorar || [];

  var adicionadosNaoEhArray = !Array.isArray(adicionados);
  var complementadosNaoEhObjeto = typeof complementados !== "object";
  var desacentuarNaoEhFuncao = typeof desacentuar !== "function";
  var ignoradosNaoEhArray = !Array.isArray(ignorados);

  function lancarErro(mensagem) {
    throw new Error(mensagem);
  }

  if (adicionadosNaoEhArray) lancarErro("Deve ser uma array");
  if (complementadosNaoEhObjeto) lancarErro("Deve ser um objeto");
  if (desacentuarNaoEhFuncao) lancarErro("Deve ser uma função");
  if (ignoradosNaoEhArray) lancarErro("Deve ser uma array");

  // (Para não causar conflitos posteriores.)
  var censuraOriginal = censura;

  // Censura será analisada como uma função,
  // mas ela poderá ser passada em outros tipos.
  var censuraNaoEhFuncao = typeof censura !== "function";

  if (censuraNaoEhFuncao) {
    censura = function () {
      return (censuraOriginal || "*").toString();
    }
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
