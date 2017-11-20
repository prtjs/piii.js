"use strict";

var arrayUnique = require("array-unique");

/**
 * Criar filtros de palavrões.
 * Baseado no sufixo das palavrras.
 *
 * @param {Array} palavroes - Array de objetos c/ dados dos palavrões.
 * @returns {Object} Objeto com regexs (em string) de todos os palavroes.
 */
function criarFiltros(palavroes) {
  var listaComPalavroes = {};

  var validar = {
    nome: function (nome) {
      return /^[A-Za-z]+$/.test(nome);
    },
    prefixo: function (prefixo) {
      return /^[A-Za-z]+$/.test(prefixo);
    },
    sufixos: function (sufixos) {
      if (Array.isArray(sufixos)) {
        var filtrados = sufixos.filter(function (sufixo) {
          return /^[A-Za-z]+$/.test(sufixo);
        });

        return filtrados.length === sufixos.length;
      }

      return false;
    }
  };

  palavroes.forEach(function (objeto) {
    if (
         typeof objeto === "object"
      && validar.nome(objeto.nome)
      && validar.prefixo(objeto.prefixo)
      && validar.sufixos(objeto.sufixos)
    ) {
      objeto.sufixos = arrayUnique(objeto.sufixos
        .sort()
        .reverse()
      );

      var palavrao = objeto.prefixo + "(" + objeto.sufixos.join("|") + ")";

      listaComPalavroes[objeto.nome] = palavrao;
    }
  });

  return listaComPalavroes;
}

module.exports = criarFiltros;
