'use strict';

// importa dependências
var diacritics = require('diacritics');
var palavroes = require('./words.js');
var repeat = require('repeat-string');

// piii.js - veja a documentação em:
// <https://github.com/theuves/piii.js#readme>
module.exports = function (string, options) {
    if (!string) return;
    options = options || {};

    var censura = options.censura || '*';
    var completo = options.completo || false;
    var extras = options.extras || [];

    // transforma todos os valores em string
    // e remove a acentuação
    extras = extras.map(function (extra) {
        return diacritics.remove(extra.toString());
    });

    var censuraTemp = '*';

    if (!completo) {
        censuraTemp = censura.charAt(0);
    }

    // string sem acentuação
    var desacentuado = diacritics.remove(string);

    // expressão regular para corresponder palavrões
    var re = palavroes.ignorarLeet(palavroes.lista.concat(extras));
    re = palavroes.criarRegExp(re);

    // censura todos os palavrões, substituindo cada caractere
    // do palavrão pelo caractere * (censuraTemp)
    desacentuado = desacentuado.replace(re, function (correspondido) {
        return repeat(censuraTemp, correspondido.length);
    });

    // nova string censurada
    var str = '';

    // navega por cada caractere de `string` e `desacentuado`
    // esse processo recoloca as acentuações que foram removidas
    // mais acima, para não haver erro com o "\b" na expressão
    // regular do javascript
    for (var i = 0; i < string.length; i++) {

        // se o caractere for um caractere censurado, ele será
        // adicionado em `str`
        if (string[i] !== desacentuado[i] && desacentuado[i] === censuraTemp) {
            str += desacentuado[i];
        } else {

            // caso contrário, o caracter original
            // (que pode ter acentos) será adicionado
            str += string[i];
        }
    }

    // se for para censurar por uma sequência de caracteres
    if (completo) {
        var novaString = ''; // nova string censurada
        var tmpCensurado = false; // temp

        // navega por cada caractere da string original
        string.split('').forEach(function (char, index) {

            // @,@
            if (char === str[index]) {
                novaString += char;
                tmpCensurado = false;
            } else if (tmpCensurado === false) {
                novaString += censura;
                tmpCensurado = true;
            }
        });

        return novaString;
    }

    // senão
    return str;
};
