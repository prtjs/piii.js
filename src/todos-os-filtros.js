"use strict";

var criarFiltros = require("./criar-filtros");

/**
 * Retorna uma lista de todos os palavrões que serão filtrados.
 *
 * @param {Array} adicionados - Lista personalizada.
 * @returns {Object} Lista de todos os palavrões.
 */
function todosOsFiltros(adicionados) {
  adicionados = adicionados || [];

  // Palavrões adicionados pelo usuário.
  adicionados = criarFiltros(adicionados);

  // Todos os palavrões padrões do filtro.
  var lista = criarFiltros([

    /**
     * Caralho
     * =======
     *
     * (substantivo masculino)
     */
    {
      nome: "caralho",
      prefixo: "caralh",
      sufixos: [
        "a",
        "ada",
        "adas",
        "ao",
        "aos",
        "as",
        "inha",
        "inhas",
        "inho",
        "inhos",
        "o",
        "oes",
        "os",
        "ozao",
        "ozaos",
        "ozinho",
        "ozinhos",
        "uda",
        "udas",
        "udo",
        "udos"
      ]
    },

    /**
     * Porra
     * =====
     *
     * (substantivo feminino)
     */
    {
      nome: "porra",
      prefixo: "porr",
      sufixos: [
        "a",
        "ao",
        "aos",
        "as",
        "azinha",
        "azinhas",
        "azona",
        "azonas",
        "inha",
        "inhas",
        "ona",
        "onas"
      ]
    },

    /**
     * Cu
     * ==
     *
     * (substantivo masculino)
     */
    {
      nome: "cu",
      prefixo: "c",
      sufixos: [
        "uzao",
        "uzaos",
        "uzinho",
        "uzinhos",
        "uzoes",
        "uzuda",
        "uzudas",
        "uzudo",
        "uzudos"
      ]
    },

    /**
     * Pinto
     * =====
     *
     * (substantivo masculino)
     */
    {
      nome: "pinto",
      prefixo: "pint",
      sufixos: [
        "ao",
        "aos",
        "o",
        "oes",
        "os",
        "ozao",
        "ozaos",
        "ozinho",
        "ozinhos",
        "uda",
        "udas",
        "udo",
        "udos"
      ]
    },

    /**
     * Boceta
     * ======
     *
     * (substantivo feminino)
     */
    {
      nome: "boceta",
      prefixo: "bocet",
      sufixos: [
        "a",
        "ada",
        "adas",
        "ao",
        "aos",
        "as",
        "azinha",
        "azinhas",
        "azona",
        "azonas",
        "inha",
        "inhas",
        "oes",
        "uda",
        "udas",
        "udo",
        "udos"
      ]
    },

    /**
     * Foder
     * =====
     *
     * (verbo)
     */
    {
      nome: "foder",
      prefixo: "fod",
      sufixos: [

        /**
         * Particípio.
         */
        "ido",
        "idos",
        "ida",
        "idas",

        /**
         * Gerúndio.
         */
        "endo",

        /**
         * Conjugações do verbo.
         */
        "a",
        "ais",
        "am",
        "amo",
        "amos",
        "as",
        "e",
        "ei",
        "eis",
        "em",
        "emo",
        "emos",
        "endo",
        "er",
        "era",
        "eram",
        "eramo",
        "eramos",
        "erao",
        "eras",
        "erdes",
        "erei",
        "ereis",
        "erem",
        "eremos",
        "eres",
        "eria",
        "eriam",
        "eriamos",
        "erias",
        "erieis",
        "ermo",
        "ermos",
        "es",
        "esse",
        "esseis",
        "essem",
        "essemos",
        "esses",
        "este",
        "estes",
        "eu",
        "i",
        "ia",
        "iam",
        "iamo",
        "iamos",
        "ias",
        "iei",
        "ieis",
        "o"
      ]
    },

    /**
     * Puta
     * ====
     *
     * (substantivo masculino)
     */
    {
      nome: "puta",
      prefixo: "put",
      sufixos: [
        "a",
        "ada",
        "adas",
        "ao",
        "aos",
        "aria",
        "arias",
        "as",
        "o",
        "oes",
        "os",
        "zinha",
        "zinhas",
        "zona",
        "zonas"
      ]
    }
  ]);

  // Juntar todos os palavrões padrões com os
  // que foram adicionados pelo usuário.
  //
  // Isto ignorará se haverá os mesmos palavrões
  // que já foram adicionados na lista padrão.
  Object
    .keys(adicionados)
    .forEach(function (adicionado) {
      lista[adicionado] = adicionados[adicionado];
    })
  ;

  return lista;
}

module.exports = todosOsFiltros;
