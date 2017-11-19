"use strict";

var construirRegex = require("./construir-regex");
var desacentuar = require("diacritics").remove;
var todosTaoIgnorados = require("./todos-tao-ignorados");

/**
 * Filtro de palavrões.
 *
 * @param {Function|String} censura - Censura para os palavrões.
 * @param {Object} opcoes - Configurações do filtro.
 */
function Piii(censura, opcoes) {
  opcoes = opcoes || {};

  // Armazena a "censura" para uso posterior.
  var censuraOriginal = censura;

  // Transform a "censura" em uma função, caso não seja.
  censura = censura instanceof Function
    ? censura
    : function () {
      return (censuraOriginal || "*").toString();
    }
  ;

  // Opções.
  // =======

  var adicionados = opcoes.adicionar;
  var complementados = opcoes.complementar;
  var ignorados = opcoes.ignorar;

  // Transforma os "adicionados" em uma array, caso não seja.
  adicionados = Array.isArray(adicionados)
    ? adicionados
    : []
  ;

  // Transforma os "complementados" em um objeto, caso não seja.
  complementados = typeof complementados === "object"
    ? complementados
    : []
  ;

  // Transforma os "ignorados" em uma array, caso não seja.
  ignorados = Array.isArray(ignorados)
    ? ignorados
    : []
  ;

  // Criar as funções.
  // =================

  /**
   * Censurar os palavrões.
   *
   * @param {String} string - String que será filtrada.
   * @returns {String} - String filtrada.
   */
  function censurar(string) {

    // Isto retornará a string sem modificá-la, pois se todos os
    // palavrões forem marcados nas exceções, não haverá palavrões
    // para serem filtrado, portanto todas as palavras serão filtradas.
    if (todosTaoIgnorados(ignorados, adicionados)) {
      return string;
    }

    // Constrói as Expressões Regulares, remove todos os caracteres especiais,
    // e filtra todos os palavrões (separando-os em uma Array).
    var filtro = construirRegex(ignorados, adicionados, complementados);
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

  // Retornar as funções.
  // ====================

  this.censurar = censurar;
  this.verificar = verificar;
}

module.exports = Piii;
